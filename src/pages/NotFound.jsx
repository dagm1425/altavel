import { Band } from '@/components/band'
import { Seo } from '@/components/seo'
import { NotFoundPage } from '@/components/sections/not-found'

function NotFound() {
  return (
    <>
      <Seo />
      <h1 className="sr-only">Page not found</h1>
      <Band>
        <NotFoundPage />
      </Band>
    </>
  )
}

export default NotFound
