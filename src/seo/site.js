// Single source of truth for SEO metadata. Plain JS (no JSX, no path aliases) so it can be
// used both by the React app (src/components/seo.jsx) and by the build-time prerender script
// (scripts/prerender.mjs).

export const SITE_NAME = 'Altavel'
export const DEFAULT_OG_IMAGE = '/og-image.png'

export const ORGANIZATION = {
  name: 'Altavel',
  description:
    'Altavel is an IT outsourcing company that builds dedicated software engineering and customer support teams for startups, product companies, and enterprises.',
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
    title: 'Altavel | IT Outsourcing & Dedicated Software Teams',
    description:
      'Altavel is an Austin-based IT outsourcing company providing dedicated software engineering and customer support teams for startups and enterprises.',
  },
  '/services': {
    title: 'Software Development Services | Altavel',
    description:
      'Dedicated teams, staff augmentation, custom software, AI & data, cloud & DevOps, QA, and customer support, from experienced, vetted teams.',
  },
  '/how-we-work': {
    title: 'How We Work: Engagement Models & Process | Altavel',
    description:
      'Compare staff augmentation, dedicated teams, and project delivery, see how we vet engineers, and what to expect from day one.',
  },
  '/about': {
    title: 'About Altavel | IT Outsourcing Partner in Austin, TX',
    description:
      'Altavel builds engineering teams that last, based on transparency, talent retention, and ownership, with security and IP protection built in.',
  },
  '/careers': {
    title: 'Careers at Altavel | Remote Software Engineering Jobs',
    description:
      'Join Altavel as a senior engineer. Competitive pay, learning budget, clear growth paths, and remote-friendly work with great client teams.',
  },
  '/contact': {
    title: 'Contact Altavel | Talk to Us About Your Team',
    description:
      'Tell us what you are building. Within one business day we send a recommended team shape, timeline, and estimate. Austin, TX.',
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
    knowsAbout: [
      'IT outsourcing',
      'Dedicated software development teams',
      'Staff augmentation',
      'Custom software development',
      'AI and data engineering',
      'Cloud and DevOps',
      'QA and software testing',
      'Customer support outsourcing',
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
