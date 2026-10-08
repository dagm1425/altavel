import { Link, NavLink } from 'react-router'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/logo'
import { useScroll } from '@/hooks/use-scroll'
import { Button } from '@/components/ui/button'
import { MobileNav } from '@/components/mobile-nav'

export const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'How we work', href: '/how-we-work' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
]

export function Header() {
  const scrolled = useScroll(10)

  return (
    <header
      className={cn(
        'dark text-foreground sticky top-0 z-50 mx-auto w-full max-w-(--site-width) border-b border-transparent md:rounded-md md:border md:transition-all md:ease-out',
        {
          'border-border bg-background/95 supports-backdrop-filter:bg-background/85 backdrop-blur-sm md:top-2 md:max-w-[calc(var(--site-width)-8rem)] md:shadow':
            scrolled,
        },
      )}
    >
      <nav
        className={cn(
          'flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out',
          { 'md:px-2': scrolled },
        )}
      >
        <Link className="hover:bg-muted dark:hover:bg-muted/50 rounded-md p-2" to="/">
          <Logo />
        </Link>
        <div className="hidden items-center gap-2 md:flex">
          <div>
            {navLinks.map((link) => (
              <Button
                asChild
                className="aria-[current=page]:bg-white/15 aria-[current=page]:text-white"
                key={link.label}
                size="sm"
                variant="ghost"
              >
                <NavLink to={link.href}>{link.label}</NavLink>
              </Button>
            ))}
          </div>
          <Button asChild size="sm">
            <Link to="/contact">Start a project</Link>
          </Button>
        </div>
        <MobileNav />
      </nav>
    </header>
  )
}
