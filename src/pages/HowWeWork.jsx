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

const models = ['Staff Augmentation', 'Dedicated Team', 'Project Delivery']

const comparison = [
  {
    label: 'Who manages the work',
    values: ['You', 'Altavel delivery lead, with you', 'Altavel'],
  },
  {
    label: 'Team composition',
    values: ['Individual engineers', 'Cross-functional squad', 'Team shaped by project scope'],
  },
  {
    label: 'Pricing',
    values: ['Monthly, per engineer', 'Monthly, per team', 'Milestone-based'],
  },
  {
    label: 'Scope',
    values: ['Flexible', 'Evolving roadmap', 'Defined up front'],
  },
  {
    label: 'Scaling',
    values: ['Add or remove monthly', 'Grow the squad as needed', 'Change requests'],
  },
  {
    label: 'Best for',
    values: ['Adding capacity fast', 'Long-term product work', 'Well-scoped builds'],
  },
]

const vettingSteps = [
  {
    title: 'Profile screening',
    description: 'We review experience, past projects, and stack depth against the role.',
  },
  {
    title: 'Technical interview',
    description: 'Senior engineers assess architecture thinking, trade-offs, and fundamentals.',
  },
  {
    title: 'Live coding',
    description: 'A practical session on a realistic problem, not trivia or puzzles.',
  },
  {
    title: 'Communication check',
    description: 'We confirm fluent English and the ability to work with distributed teams.',
  },
  {
    title: 'References & background',
    description: 'Reference calls and background screening before anyone meets you.',
  },
]

const standards = [
  {
    title: 'Weekly demos',
    icon: <MonitorPlayIcon />,
    description: 'See working software every week, not slide decks or status emails.',
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
        title="Which model fits your team?"
        description="A quick side-by-side to help you choose. You can always switch later."
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
            What you can expect, <Accent>every week</Accent>
          </>
        }
        description="The same delivery habits apply to every engagement, whatever the model."
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
              A partnership model built for <Accent>speed and clarity</Accent>
            </>
          }
          description="Choose how you want to work with us, see exactly how we vet engineers, and know what to expect from the first call onward."
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
      <Band tone="dark">
        <ProcessSection
          description="Every Altavel engineer passes a five-stage process before they ever join a client team."
          eyebrow="Vetting"
          gridClassName="lg:grid-cols-5"
          id="vetting"
          steps={vettingSteps}
          title="How we vet engineers"
        />
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
