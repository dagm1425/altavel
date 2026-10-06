import { cn } from '@/lib/utils'

export function SectionHeading({ eyebrow, title, description, align = 'center', className }) {
  return (
    <div
      className={cn(
        '3xl:max-w-3xl flex max-w-2xl flex-col gap-3',
        align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <p className="text-highlight font-mono text-xs tracking-widest uppercase">{eyebrow}</p>
      )}
      <h2 className="3xl:text-6xl text-3xl font-medium tracking-tight text-balance md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-sm leading-relaxed text-balance md:text-base">
          {description}
        </p>
      )}
    </div>
  )
}

export function Accent({ children }) {
  return (
    <span className="text-highlight font-serif font-normal tracking-normal italic">{children}</span>
  )
}
