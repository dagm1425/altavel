import { Link } from 'react-router'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { DecorIcon } from '@/components/decor-icon'
import { FullWidthDivider } from '@/components/full-width-divider'
import { SectionHeading } from '@/components/sections/section-heading'
import { ArrowRightIcon, CheckIcon } from 'lucide-react'

const models = [
  {
    name: 'Fixed-Scope Project',
    bestFor: 'Well-defined builds with clear requirements.',
    points: [
      'Scope, price, and dates agreed up front',
      'Payment tied to delivered milestones',
      'Working demo every two weeks',
      'Full handover with code and documentation',
    ],
  },
  {
    name: 'Phased Product Build',
    bestFor: 'New products and MVPs that will grow.',
    featured: true,
    points: [
      'Discovery and prototype before the build',
      'Launch a focused first version quickly',
      'Plan each next phase on real user feedback',
      'The same team from first sprint to scale',
    ],
  },
  {
    name: 'Support & Evolution Plan',
    bestFor: 'Software that is live and needs to keep improving.',
    points: [
      'Monitoring, updates, and security patches',
      'Bug fixes with response times in writing',
      'Monthly hours for new features',
      'Helpdesk support for your users',
    ],
  },
]

export function EngagementModelsSection() {
  return (
    <section className="flex flex-col gap-14 py-16 md:py-24" id="engagement">
      <SectionHeading
        className="px-4"
        eyebrow="Ways to work with us"
        title="Pick the path that fits your project"
        description="Every option comes with the same team, the same standards, and code you own. Choose based on how defined your project is today."
      />

      <div className="relative">
        <FullWidthDivider position="top" />
        <div className="bg-border grid grid-cols-1 gap-px md:grid-cols-3">
          {models.map((model) => (
            <div
              className={cn(
                'bg-background relative flex flex-col gap-6 p-6 md:p-8',
                model.featured &&
                  'bg-[radial-gradient(70%_60%_at_50%_0%,--theme(--color-primary/.1),transparent)]',
              )}
              key={model.name}
            >
              {model.featured && (
                <>
                  <DecorIcon className="size-4" position="top-left" />
                  <DecorIcon className="size-4" position="top-right" />
                </>
              )}
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xl font-medium">{model.name}</h3>
                {model.featured && (
                  <span className="bg-primary text-primary-foreground rounded-full px-2.5 py-0.5 text-xs font-medium">
                    Most chosen
                  </span>
                )}
              </div>
              <p className="text-muted-foreground text-sm">
                <span className="text-foreground font-medium">Best for: </span>
                {model.bestFor}
              </p>
              <ul className="flex grow flex-col gap-3">
                {model.points.map((point) => (
                  <li className="flex gap-2 text-sm" key={point}>
                    <CheckIcon className="text-highlight mt-0.5 size-4 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full" variant={model.featured ? 'default' : 'outline'}>
                <Link to="/contact">
                  Discuss your project <ArrowRightIcon data-icon="inline-end" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
        <FullWidthDivider position="bottom" />
      </div>
    </section>
  )
}
