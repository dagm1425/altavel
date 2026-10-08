import { cn } from '@/lib/utils'
import { DecorIcon } from '@/components/decor-icon'
import { SectionHeading } from '@/components/sections/section-heading'

const steps = [
  {
    title: 'Discovery & scope',
    description:
      'We map your goals, users, and constraints, then agree a written scope, budget, and milestones before any code is written.',
  },
  {
    title: 'Design & build',
    description:
      'Prototypes first, then development in two-week sprints. You review a working release at the end of every one.',
  },
  {
    title: 'Test & launch',
    description:
      'Automated and manual testing, performance and security checks, then a careful release with monitoring in place.',
  },
  {
    title: 'Support & grow',
    description:
      'After launch we keep your software healthy, fix issues fast, and plan the next improvements with you.',
  },
]

export function ProcessSection({
  id = 'process',
  eyebrow = 'How it works',
  title = 'A clear path from idea to launch',
  description = 'Every project follows the same four stages, so you always know what is being built, what it costs, and what comes next.',
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
