// Build-time prerender: turns the client-rendered SPA into static HTML per route, so crawlers
// and link previews get real content and page-specific meta tags without running JavaScript.
// Runs after `vite build` (client) and `vite build --ssr src/entry-server.jsx` (server).

import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { loadEnv } from 'vite'
import { PAGES, SITEMAP_PATHS, getHeadTags, getStructuredData } from '../src/seo/site.js'

const root = process.cwd()
const distDir = path.join(root, 'dist')
const serverDir = path.join(root, 'dist-server')

const env = loadEnv('production', root, '')
const siteUrl = env.VITE_SITE_URL ? env.VITE_SITE_URL.replace(/\/+$/, '') : ''
if (siteUrl && !/^https?:\/\//.test(siteUrl)) {
  throw new Error(`VITE_SITE_URL must start with http:// or https:// (got "${siteUrl}")`)
}

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

function renderHeadTags(pagePath) {
  const tags = getHeadTags(pagePath, siteUrl).map(({ tag, attrs = {}, text }) => {
    const attributes = Object.entries(attrs)
      .map(([name, value]) => ` ${name}="${escapeHtml(value)}"`)
      .join('')
    // data-seo marks tags that src/main.jsx removes once React takes over the head.
    return tag === 'title'
      ? `<title data-seo>${escapeHtml(text)}</title>`
      : `<${tag} data-seo${attributes} />`
  })
  const jsonLd = getStructuredData(siteUrl).map(
    (data) =>
      `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`,
  )
  return [...tags, ...jsonLd].join('\n    ')
}

// React 19 hoists <title>/<meta>/<link> rendered by <Seo>; during renderToString they land in
// the body markup. The head already gets them from renderHeadTags, so drop the duplicates.
const stripHoistedTags = (html) =>
  html
    .replace(/<title>[\s\S]*?<\/title>/g, '')
    .replace(/<meta [^>]*\/?>/g, '')
    .replace(/<link rel="canonical"[^>]*\/?>/g, '')

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8')
if (!template.includes('<!--app-html-->') || !template.includes('<!--seo-head-->')) {
  throw new Error('dist/index.html is missing the <!--app-html--> or <!--seo-head--> placeholder')
}
const { render } = await import(pathToFileURL(path.join(serverDir, 'entry-server.js')).href)

function writePage(urlPath, outFile) {
  const appHtml = stripHoistedTags(render(urlPath))
  const html = template
    .replace(/<title data-seo>[\s\S]*?<\/title>/, '')
    .replace('<!--seo-head-->', renderHeadTags(urlPath))
    .replace('<!--app-html-->', appHtml)
  fs.mkdirSync(path.dirname(outFile), { recursive: true })
  fs.writeFileSync(outFile, html)
  console.log(`  prerendered ${urlPath.padEnd(14)} -> ${path.relative(root, outFile)}`)
}

console.log('Prerendering routes:')
for (const pagePath of Object.keys(PAGES)) {
  const outFile =
    pagePath === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, pagePath.slice(1), 'index.html')
  writePage(pagePath, outFile)
}
// Static hosts (Vercel, Netlify, Cloudflare Pages) serve 404.html for unknown URLs.
writePage('/__not-found__', path.join(distDir, '404.html'))

const robots = ['User-agent: *', 'Allow: /']
if (siteUrl) robots.push('', `Sitemap: ${siteUrl}/sitemap.xml`)
fs.writeFileSync(path.join(distDir, 'robots.txt'), robots.join('\n') + '\n')
console.log('  wrote robots.txt')

if (siteUrl) {
  const today = new Date().toISOString().slice(0, 10)
  const urls = SITEMAP_PATHS.map(
    (pagePath) =>
      `  <url>\n    <loc>${siteUrl}${pagePath === '/' ? '/' : pagePath}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`,
  )
  fs.writeFileSync(
    path.join(distDir, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
  )
  console.log(`  wrote sitemap.xml (${urls.length} URLs)`)
} else {
  console.warn(
    '  VITE_SITE_URL is not set: skipped sitemap.xml, canonical URLs, and og:url. Set it to the real domain before deploying.',
  )
}

fs.rmSync(serverDir, { recursive: true, force: true })
