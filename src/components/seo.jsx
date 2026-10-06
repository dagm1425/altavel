import { getHeadTags } from '@/seo/site'

// Set VITE_SITE_URL in .env (e.g. https://www.altavel.com) once the site has a real domain.
const SITE_URL = import.meta.env.VITE_SITE_URL

// Renders a page's title, description, and social tags. React 19 hoists these into <head>.
// Pass no path for the 404 page.
export function Seo({ path }) {
  return getHeadTags(path, SITE_URL).map(({ tag: Tag, attrs, text }, index) => (
    <Tag key={index} {...attrs}>
      {text}
    </Tag>
  ))
}
