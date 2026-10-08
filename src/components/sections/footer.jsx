import { Link } from 'react-router'
import { cn } from '@/lib/utils'
import { GithubIcon } from '@/components/icons/github-icon'
import { LinkedinIcon } from '@/components/icons/linkedin-icon'
import { XIcon } from '@/components/icons/x-icon'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { FullWidthDivider } from '@/components/full-width-divider'

export function Footer() {
  return (
    <footer
      className={cn(
        'relative mx-auto w-full max-w-(--site-width) lg:border-x',
        'dark:bg-[radial-gradient(35%_80%_at_15%_0%,--theme(--color-foreground/.1),transparent)]',
      )}
    >
      <FullWidthDivider position="top" />
      <div className="grid w-full grid-cols-6 gap-6 p-4 pb-8">
        <div className="col-span-6 flex flex-col gap-4 pt-5 md:col-span-4">
          <Link className="w-max" to="/">
            <Logo />
          </Link>
          <p className="text-muted-foreground max-w-sm text-sm text-balance">
            Altavel designs, builds, and supports custom software for startups, product companies,
            and enterprises.
          </p>
          <div className="flex gap-2">
            {socialLinks.map((item) => (
              <Button asChild key={item.label} size="icon" variant="outline">
                <a aria-label={item.label} href={item.link} rel="noreferrer" target="_blank">
                  {item.icon}
                </a>
              </Button>
            ))}
          </div>
        </div>
        <div className="col-span-3 w-full pt-5 md:col-span-1">
          <span className="text-muted-foreground text-xs">Services</span>
          <div className="mt-2 flex flex-col gap-2">
            {services.map(({ href, title }) => (
              <Link className="w-max text-sm hover:underline" key={title} to={href}>
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-3 w-full pt-5 md:col-span-1">
          <span className="text-muted-foreground text-xs">Company</span>
          <div className="mt-2 flex flex-col gap-2">
            {company.map(({ href, title }) => (
              <Link className="w-max text-sm hover:underline" key={title} to={href}>
                {title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <FullWidthDivider />
      <div className="flex items-center justify-center gap-2 py-4">
        <p className="text-muted-foreground text-center text-sm font-light">
          &copy; {new Date().getFullYear()} Altavel. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

const services = [
  { title: 'Custom Software', href: '/services#custom-software' },
  { title: 'Web & Mobile Apps', href: '/services#web-mobile' },
  { title: 'UI/UX Design', href: '/services#ui-ux-design' },
  { title: 'AI & Data', href: '/services#ai-data' },
  { title: 'Legacy Modernization', href: '/services#legacy-modernization' },
  { title: 'IT Audit & Consulting', href: '/services#it-consulting' },
  { title: 'Maintenance & Support', href: '/services#maintenance-support' },
]

const company = [
  { title: 'About', href: '/about' },
  { title: 'How we work', href: '/how-we-work' },
  { title: 'Careers', href: '/careers' },
  { title: 'Contact', href: '/contact' },
  { title: 'Privacy Policy', href: '/privacy' },
  { title: 'Terms of Service', href: '/terms' },
]

// Placeholder profile URLs: replace with Altavel's real accounts.
const socialLinks = [
  { label: 'LinkedIn', icon: <LinkedinIcon />, link: '#' },
  { label: 'X', icon: <XIcon />, link: '#' },
  { label: 'GitHub', icon: <GithubIcon />, link: '#' },
]
