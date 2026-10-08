// Single source of truth for SEO metadata. Plain JS (no JSX, no path aliases) so it can be
// used both by the React app (src/components/seo.jsx) and by the build-time prerender script
// (scripts/prerender.mjs).

export const SITE_NAME = 'Altavel'
export const DEFAULT_OG_IMAGE = '/og-image.png'
export const LINKEDIN_URL = 'https://www.linkedin.com/company/altaveltech/'

export const ORGANIZATION = {
  name: 'Altavel',
  description:
    'Altavel is a custom software development company in Austin, TX, that designs, builds, and supports web, mobile, and AI software for growing businesses.',
  address: {
    streetAddress: '9705 Burnet Road Suite 102',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    postalCode: '78758',
    addressCountry: 'US',
  },
}

// Keyed by route path. `noindex` keeps placeholder pages out of search results until they
// have real content.
export const PAGES = {
  '/': {
    title: 'Altavel | Custom Software & AI Development in Austin',
    description:
      'Altavel designs, builds, and supports custom web, mobile, and AI software for growing businesses, with clear milestones and code you own. Austin, TX.',
  },
  '/services': {
    title: 'Custom Software, Web & Mobile App Services | Altavel',
    description:
      'Custom software, web and mobile apps, UI/UX design, AI & data, legacy modernization, IT audits, and maintenance & support from one team.',
  },
  '/how-we-work': {
    title: 'How We Work: Project Options & Process | Altavel',
    description:
      'Fixed-scope projects, phased product builds, or ongoing support. See the four stages every project follows and the standards behind every release.',
  },
  '/about': {
    title: 'About Altavel | Software Development Company, Austin TX',
    description:
      'Altavel builds custom software that lasts, with written scope, a working release every two weeks, and code our clients own from day one.',
  },
  '/careers': {
    title: 'Careers at Altavel | Software Engineering & Design Jobs',
    description:
      'Join Altavel to build custom software for ambitious companies. Competitive pay, learning budget, clear growth paths, and remote-friendly work.',
  },
  '/contact': {
    title: 'Contact Altavel | Start Your Software Project',
    description:
      'Tell us what you want to build, fix, or modernize. Within one business day we reply with next steps, then send a written scope and estimate.',
  },
  '/privacy': {
    title: 'Privacy Policy | Altavel',
    description: 'Altavel privacy policy.',
    noindex: true,
  },
  '/terms': {
    title: 'Terms of Service | Altavel',
    description: 'Altavel terms of service.',
    noindex: true,
  },
}

export const NOT_FOUND_PAGE = {
  title: 'Page not found | Altavel',
  description: 'The page you are looking for does not exist.',
  noindex: true,
}

// Paths included in sitemap.xml (everything that is indexable).
export const SITEMAP_PATHS = Object.keys(PAGES).filter((path) => !PAGES[path].noindex)

function absolute(siteUrl, path) {
  return siteUrl ? new URL(path, siteUrl).href : null
}

// Returns the head tags for a page as plain objects: { tag, attrs, text? }.
// Without a site URL, tags that need absolute URLs (canonical, og:url) are left out.
export function getHeadTags(path, siteUrl) {
  const page = PAGES[path] || NOT_FOUND_PAGE
  // No canonical/og:url for noindex pages, so the signals do not conflict.
  const url = PAGES[path] && !page.noindex ? absolute(siteUrl, path) : null
  const image = absolute(siteUrl, DEFAULT_OG_IMAGE) || DEFAULT_OG_IMAGE

  const tags = [
    { tag: 'title', text: page.title },
    { tag: 'meta', attrs: { name: 'description', content: page.description } },
    { tag: 'meta', attrs: { property: 'og:title', content: page.title } },
    { tag: 'meta', attrs: { property: 'og:description', content: page.description } },
    { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
    { tag: 'meta', attrs: { property: 'og:site_name', content: SITE_NAME } },
    { tag: 'meta', attrs: { property: 'og:image', content: image } },
    { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
    { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
    { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
    { tag: 'meta', attrs: { name: 'twitter:title', content: page.title } },
    { tag: 'meta', attrs: { name: 'twitter:description', content: page.description } },
    { tag: 'meta', attrs: { name: 'twitter:image', content: image } },
  ]
  if (url) {
    tags.push({ tag: 'link', attrs: { rel: 'canonical', href: url } })
    tags.push({ tag: 'meta', attrs: { property: 'og:url', content: url } })
  }
  if (page.noindex) {
    tags.push({ tag: 'meta', attrs: { name: 'robots', content: 'noindex, follow' } })
  }
  return tags
}

// Organization + local business structured data (schema.org JSON-LD).
export function getStructuredData(siteUrl) {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: ORGANIZATION.name,
    description: ORGANIZATION.description,
    address: { '@type': 'PostalAddress', ...ORGANIZATION.address },
    areaServed: 'US',
    sameAs: [LINKEDIN_URL],
    knowsAbout: [
      'Custom software development',
      'Web application development',
      'Mobile app development',
      'UI/UX design',
      'AI and data engineering',
      'Legacy software modernization',
      'IT audit and consulting',
      'Software maintenance and support',
    ],
  }
  if (siteUrl) {
    org.url = absolute(siteUrl, '/')
    org.image = absolute(siteUrl, DEFAULT_OG_IMAGE)
  }
  const website = { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE_NAME }
  if (siteUrl) website.url = absolute(siteUrl, '/')
  return [org, website]
}
