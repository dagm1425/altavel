import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { Header } from '@/components/header'
import { Footer } from '@/components/sections/footer'

// Scroll to the top on page change, or to the #section when the link has one.
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'instant' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

export function SiteLayout() {
  return (
    <div className="bg-ink relative flex min-h-screen flex-col overflow-x-clip">
      <ScrollManager />
      <Header />
      <main className="mx-auto w-full max-w-(--site-width) grow">
        <Outlet />
      </main>
      <div className="dark band mx-auto w-full max-w-(--site-width)">
        <Footer />
      </div>
    </div>
  )
}
