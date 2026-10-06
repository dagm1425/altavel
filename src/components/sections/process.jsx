import { cn } from '@/lib/utils'
import { DecorIcon } from '@/components/decor-icon'
import { SectionHeading } from '@/components/sections/section-heading'

const steps = [
  {
    title: 'Discovery call',
    description:
      'Tell us about your product, stack, and goals. We recommend the right team shape and engagement model.',
  },
  {
    title: 'Shortlist in days',
    description:
      'Review hand-picked engineer profiles and interview your favorites. You make the final call.',
  },
  {
    title: 'Onboard & kick off',
    description:
      'We handle contracts, equipment, and access. Your new team starts shipping in the first week.',
  },
  {
    title: 'Scale with confidence',
    description:
      'Regular check-ins, performance reviews, and flexible scaling as your roadmap changes.',
  },
]

export function ProcessSection({
  id = 'process',
  eyebrow = 'How it works',
  title = 'From first call to shipping code in weeks',
  description = 'A simple, predictable process with no long procurement cycles and no surprises.',
  steps: items = steps,
  gridClassName = 'lg:grid-cols-4',
}) {
  return (
    <section className="flex flex-col gap-14 px-4 py-16 md:px-8 md:py-24" id={id}>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <ol className={cn('grid grid-cols-1 gap-8 md:grid-cols-2', gridClassName)}>
        {items.map((step, index) => (
          <li className="relative flex flex-col gap-4 px-6 pt-8 pb-6" key={step.title}>
            {/* Extended Borders */}
            <div className="bg-border absolute -inset-y-4 -left-px w-px" />
            <div className="bg-border absolute -inset-y-4 -right-px w-px" />
            <div className="bg-border absolute -inset-x-4 -top-px h-px" />
            <div className="bg-border absolute -right-4 -bottom-px -left-4 h-px" />
            <DecorIcon className="size-3.5" position="top-left" />

            <span className="text-highlight font-mono text-sm">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="text-lg font-medium">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
