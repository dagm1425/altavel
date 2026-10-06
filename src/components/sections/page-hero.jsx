import { cn } from '@/lib/utils'

// Inner-page hero, based on Efferd's hero-2 layout (faded vertical borders + soft glow).
// Render inside a dark Band.
export function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="3xl:py-36 relative flex flex-col items-center justify-center gap-5 px-4 py-20 text-center md:py-28">
      <div aria-hidden="true" className="absolute inset-0 -z-1 size-full overflow-hidden">
        <div
          className={cn(
            'absolute -inset-x-20 inset-y-0 z-0 rounded-full',
            'bg-[radial-gradient(ellipse_at_center,theme(--color-primary/.12),transparent,transparent)]',
            'blur-[50px]',
          )}
        />
        <div className="via-border to-border absolute inset-y-0 left-4 w-px bg-linear-to-b from-transparent md:left-8" />
        <div className="via-border to-border absolute inset-y-0 right-4 w-px bg-linear-to-b from-transparent md:right-8" />
        <div className="via-border/50 to-border/50 absolute inset-y-0 left-8 w-px bg-linear-to-b from-transparent md:left-12" />
        <div className="via-border/50 to-border/50 absolute inset-y-0 right-8 w-px bg-linear-to-b from-transparent md:right-12" />
      </div>
      {eyebrow && (
        <p className="animate-in text-highlight fade-in font-mono text-xs tracking-widest uppercase duration-500">
          {eyebrow}
        </p>
      )}
      <h1 className="animate-in fill-mode-backwards fade-in slide-in-from-bottom-6 3xl:text-7xl max-w-4xl text-4xl font-medium tracking-tight text-balance delay-100 duration-500 md:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="animate-in text-muted-foreground fill-mode-backwards fade-in slide-in-from-bottom-6 max-w-2xl text-base text-balance delay-200 duration-500 md:text-lg">
          {description}
        </p>
      )}
      {children && (
        <div className="animate-in fill-mode-backwards fade-in slide-in-from-bottom-6 flex flex-wrap items-center justify-center gap-3 pt-2 delay-300 duration-500">
          {children}
        </div>
      )}
    </section>
  )
}
