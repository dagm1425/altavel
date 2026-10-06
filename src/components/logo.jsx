import { cn } from '@/lib/utils'

export const Logo = ({ className, ...props }) => (
  <span
    className={cn(
      'text-foreground inline-flex items-center text-lg leading-none font-semibold tracking-[0.18em] uppercase',
      className,
    )}
    {...props}
  >
    Altavel
  </span>
)
