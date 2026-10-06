import { Link } from 'react-router'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { DecorIcon } from '@/components/decor-icon'
import { FullWidthDivider } from '@/components/full-width-divider'
import { SectionHeading } from '@/components/sections/section-heading'
import { ArrowRightIcon, CheckIcon } from 'lucide-react'

const models = [
  {
    name: 'Staff Augmentation',
    bestFor: 'Teams that need to add senior capacity fast.',
    points: [
      'You direct the day-to-day work',
      'Engineers join your tools and rituals',
      'Scale up or down month to month',
      'We handle payroll, HR, and equipment',
    ],
  },
  {
    name: 'Dedicated Team',
    bestFor: 'Product companies building for the long term.',
    featured: true,
    points: [
      'Cross-functional squad with a delivery lead',
      'We hire, manage, and retain the team',
      'Shared roadmap with weekly demos',
      'Grows with your product, not your overhead',
    ],
  },
  {
    name: 'Project Delivery',
    bestFor: 'Well-defined products with a clear scope.',
    points: [
      'Discovery, design, build, and launch',
      'Milestone-based plan and pricing',
      'Fixed timeline with weekly progress',
      'Post-launch support and maintenance',
    ],
  },
]

export function EngagementModelsSection() {
  return (
    <section className="flex flex-col gap-14 py-16 md:py-24" id="engagement">
      <SectionHeading
        className="px-4"
        eyebrow="Engagement models"
        title="Work with us the way that fits"
        description="Start with one engineer or a full team. Switch models as your product and budget evolve."
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
                    Most popular
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
                  Discuss this model <ArrowRightIcon data-icon="inline-end" />
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
