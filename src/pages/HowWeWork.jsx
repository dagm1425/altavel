import { Link } from 'react-router'
import { Seo } from '@/components/seo'
import { Band } from '@/components/band'
import { Button } from '@/components/ui/button'
import { FullWidthDivider } from '@/components/full-width-divider'
import { PageHero } from '@/components/sections/page-hero'
import { Accent, SectionHeading } from '@/components/sections/section-heading'
import { EngagementModelsSection } from '@/components/sections/engagement-models'
import { ProcessSection } from '@/components/sections/process'
import { FeatureCard } from '@/components/sections/why-altavel'
import { FaqsSection } from '@/components/sections/faqs'
import { CallToAction } from '@/components/sections/cta'
import {
  ArrowRightIcon,
  GitPullRequestIcon,
  KanbanSquareIcon,
  MonitorPlayIcon,
  UserRoundCheckIcon,
} from 'lucide-react'

const models = ['Fixed-Scope Project', 'Phased Product Build', 'Support & Evolution Plan']

const comparison = [
  {
    label: 'Best for',
    values: [
      'Clear, well-defined builds',
      'New products and MVPs',
      'Software that is already live',
    ],
  },
  {
    label: 'Scope',
    values: ['Agreed in full up front', 'Agreed one phase at a time', 'Ongoing, set each month'],
  },
  {
    label: 'Pricing',
    values: ['Fixed price per milestone', 'Fixed price per phase', 'Monthly plan'],
  },
  {
    label: 'You see progress',
    values: ['Demo every two weeks', 'Demo every two weeks', 'Monthly report and release notes'],
  },
  {
    label: 'Changes',
    values: [
      'Priced and approved first',
      'Planned into the next phase',
      'Included in monthly hours',
    ],
  },
  {
    label: 'At the end',
    values: ['Full handover and docs', 'A product ready to grow', 'Software that stays healthy'],
  },
]

const standards = [
  {
    title: 'Demos every two weeks',
    icon: <MonitorPlayIcon />,
    description:
      'See working software at the end of every sprint, not slide decks or status emails.',
  },
  {
    title: 'Shared boards',
    icon: <KanbanSquareIcon />,
    description: 'Every task lives in your tools, so progress is visible at any moment.',
  },
  {
    title: 'Code review & quality gates',
    icon: <GitPullRequestIcon />,
    description: 'Peer review, automated tests, and CI checks on every change.',
  },
  {
    title: 'Dedicated delivery lead',
    icon: <UserRoundCheckIcon />,
    description: 'One accountable person who keeps the team, scope, and budget on track.',
  },
]

function ComparisonSection() {
  return (
    <section className="flex flex-col gap-12 py-16 md:py-24">
      <SectionHeading
        className="px-4"
        eyebrow="Compare"
        title="Which option fits your project?"
        description="A quick side-by-side to help you choose. Many clients start with one and move to another as the product grows."
      />
      <div className="relative">
        <FullWidthDivider position="top" />
        <div className="overflow-x-auto">
          <table className="w-full min-w-2xl border-collapse text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-muted-foreground w-1/4 p-4 font-normal md:p-6" scope="col">
                  <span className="sr-only">Criteria</span>
                </th>
                {models.map((model) => (
                  <th className="p-4 text-base font-medium md:p-6" key={model} scope="col">
                    {model}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr className="border-b last:border-b-0" key={row.label}>
                  <th
                    className="text-muted-foreground p-4 font-mono text-xs font-normal tracking-wider uppercase md:p-6"
                    scope="row"
                  >
                    {row.label}
                  </th>
                  {row.values.map((value, index) => (
                    <td className="p-4 md:p-6" key={models[index]}>
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <FullWidthDivider position="bottom" />
      </div>
    </section>
  )
}

function StandardsSection() {
  return (
    <section className="flex flex-col gap-14 px-4 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Delivery standards"
        title={
          <>
            What you can expect, <Accent>on every project</Accent>
          </>
        }
        description="The same delivery habits apply to every project, whichever option you choose."
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {standards.map((item) => (
          <FeatureCard feature={item} key={item.title} />
        ))}
      </div>
    </section>
  )
}

function HowWeWork() {
  return (
    <>
      <Seo path="/how-we-work" />
      <Band tone="dark">
        <PageHero
          eyebrow="How we work"
          title={
            <>
              A clear process, <Accent>no surprises</Accent>
            </>
          }
          description="See the ways to start a project with us, the four stages every project follows, and the standards we hold ourselves to on every release."
        >
          <Button asChild size="lg">
            <Link to="/contact">
              Book a call <ArrowRightIcon data-icon="inline-end" />
            </Link>
          </Button>
        </PageHero>
      </Band>
      <Band>
        <EngagementModelsSection />
      </Band>
      <Band tone="stone">
        <ComparisonSection />
      </Band>
      <Band>
        <ProcessSection />
      </Band>
      <Band tone="stone">
        <StandardsSection />
      </Band>
      <Band>
        <FaqsSection />
      </Band>
      <Band tone="dark">
        <CallToAction />
      </Band>
    </>
  )
}

export default HowWeWork
