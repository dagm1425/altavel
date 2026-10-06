import { cn } from '@/lib/utils'

// Mock client list. Only show companies you have permission to list.
// Logo files live in public/logos/. Logos render as one-color silhouettes; `mono: false` is for
// files that are already black-and-white with knocked-out text (Green Dot), which are inverted
// on dark backgrounds instead, so the text stays readable.
// `className` tunes the height so logos with different proportions look balanced.
export const clients = [
  { name: 'Signify Health', src: '/logos/signify-health.png' },
  { name: 'Progyny', src: '/logos/progyny.svg' },
  { name: 'Envestnet', src: '/logos/envestnet.svg', className: 'h-8 md:h-9' },
  { name: 'Green Dot', src: '/logos/green-dot.svg', mono: false, className: 'h-9 md:h-10' },
  { name: 'Echo Global Logistics', src: '/logos/echo-global-logistics.svg' },
  { name: 'SPS Commerce', src: '/logos/sps-commerce.svg', className: 'h-8 md:h-9' },
  { name: 'Redfin', src: '/logos/redfin.png' },
  { name: 'Opendoor', src: '/logos/opendoor.svg' },
  { name: 'Paycor', src: '/logos/paycor.svg' },
  { name: 'LegalZoom', src: '/logos/legalzoom.svg', className: 'h-4 md:h-5' },
]

// Renders the logo image when one is set, otherwise a text wordmark of the company name.
export function ClientLogo({ client, className }) {
  if (client.src) {
    return (
      <img
        alt={`${client.name} logo`}
        className={cn(
          'pointer-events-none h-6 w-auto max-w-none select-none md:h-7',
          client.mono === false
            ? 'opacity-75 dark:opacity-85 dark:invert'
            : 'opacity-75 brightness-0 dark:opacity-85 dark:invert',
          client.className,
        )}
        src={client.src}
      />
    )
  }

  return (
    <span
      className={cn(
        'text-foreground/70 text-lg font-semibold tracking-tight whitespace-nowrap select-none md:text-xl',
        className,
      )}
    >
      {client.name}
    </span>
  )
}
