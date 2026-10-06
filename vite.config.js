import fs from 'node:fs'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// `vite preview` normally falls back to the home page for every URL. Make it behave like a
// static host instead: serve each route's prerendered dist/<route>/index.html, and 404.html
// with a 404 status for unknown URLs.
function servePrerenderedRoutes() {
  return {
    name: 'serve-prerendered-routes',
    configurePreviewServer(server) {
      const outDir = path.resolve(server.config.root, server.config.build.outDir)
      server.middlewares.use((req, res, next) => {
        const [pathname, query = ''] = req.url.split('?')
        if (pathname === '/' || pathname.endsWith('/') || path.extname(pathname)) return next()
        if (fs.existsSync(path.join(outDir, pathname, 'index.html'))) {
          req.url = `${pathname}/${query ? `?${query}` : ''}`
          return next()
        }
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html')
        res.end(fs.readFileSync(path.join(outDir, '404.html')))
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), servePrerenderedRoutes()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
