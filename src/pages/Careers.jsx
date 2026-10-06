import { Band } from '@/components/band'
import { Seo } from '@/components/seo'
import { Button } from '@/components/ui/button'
import { FullWidthDivider } from '@/components/full-width-divider'
import { PageHero } from '@/components/sections/page-hero'
import { Accent, SectionHeading } from '@/components/sections/section-heading'
import { FeatureCard } from '@/components/sections/why-altavel'
import { ProcessSection } from '@/components/sections/process'
import { CallToAction } from '@/components/sections/cta'
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  BanknoteIcon,
  BookOpenIcon,
  HeartPulseIcon,
  HouseIcon,
  LaptopIcon,
  MailIcon,
  TrendingUpIcon,
} from 'lucide-react'

// Placeholder address: replace with Altavel's real careers inbox.
const careersEmail = 'careers@altavel.com'

// Placeholder benefits: confirm against Altavel's actual package.
const benefits = [
  {
    title: 'Competitive pay',
    icon: <BanknoteIcon />,
    description: 'Salaries benchmarked against the market and reviewed every year.',
  },
  {
    title: 'Health coverage',
    icon: <HeartPulseIcon />,
    description: 'Medical coverage for you, with support for your wellbeing.',
  },
  {
    title: 'Learning budget',
    icon: <BookOpenIcon />,
    description: 'Courses, certifications, and conferences paid for by us.',
  },
  {
    title: 'Clear growth paths',
    icon: <TrendingUpIcon />,
    description: 'Defined levels, regular feedback, and mentorship from senior engineers.',
  },
  {
    title: 'Modern equipment',
    icon: <LaptopIcon />,
    description: 'A high-spec laptop and the tools you need to do great work.',
  },
  {
    title: 'Flexible work',
    icon: <HouseIcon />,
    description: 'Remote-friendly schedules built around your client team.',
  },
]

const hiringSteps = [
  {
    title: 'Apply',
    description: 'Send your CV and a short note about the work you are proudest of.',
  },
  {
    title: 'Intro call',
    description: 'A friendly conversation about your experience, goals, and preferences.',
  },
  {
    title: 'Technical interviews',
    description: 'A technical discussion and a practical live coding session.',
  },
  {
    title: 'Offer & matching',
    description: 'We make an offer and match you with a client team that fits your skills.',
  },
]

// Placeholder roles: replace with real openings.
const roles = [
  { title: 'Senior React Engineer', team: 'Frontend', location: 'Remote', type: 'Full-time' },
  {
    title: 'Senior Backend Engineer (Node.js)',
    team: 'Backend',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Senior Python Engineer',
    team: 'Backend & Data',
    location: 'Remote',
    type: 'Full-time',
  },
  { title: 'QA Automation Engineer', team: 'Quality', location: 'Remote', type: 'Full-time' },
  { title: 'DevOps Engineer', team: 'Cloud', location: 'Remote', type: 'Full-time' },
]

function BenefitsSection() {
  return (
    <section className="flex flex-col gap-14 px-4 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Why Altavel"
        title={
          <>
            A place to grow, <Accent>not just a job</Accent>
          </>
        }
        description="We keep great engineers by investing in them. That is also why our clients' teams stay together."
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <FeatureCard feature={benefit} key={benefit.title} />
        ))}
      </div>
    </section>
  )
}

function OpenRolesSection() {
  return (
    <section className="flex flex-col gap-14 py-16 md:py-24" id="open-roles">
      <SectionHeading
        className="px-4"
        eyebrow="Open roles"
        title="Current openings"
        description="Don't see your role? Send us your CV anyway. We are always meeting great engineers."
      />
      <div className="relative">
        <FullWidthDivider position="top" />
        <ul className="divide-y">
          {roles.map((role) => (
            <li
              className="flex flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between md:px-8"
              key={role.title}
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium">{role.title}</h3>
                <ul className="text-muted-foreground flex flex-wrap gap-2 text-xs">
                  {[role.team, role.location, role.type].map((tag) => (
                    <li className="rounded-full border px-3 py-1" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <Button asChild className="w-fit" variant="outline">
                <a
                  href={`mailto:${careersEmail}?subject=${encodeURIComponent(`Application: ${role.title}`)}`}
                >
                  Apply <ArrowUpRightIcon data-icon="inline-end" />
                </a>
              </Button>
            </li>
          ))}
        </ul>
        <FullWidthDivider position="bottom" />
      </div>
    </section>
  )
}

function Careers() {
  return (
    <>
      <Seo path="/careers" />
      <Band tone="dark">
        <PageHero
          eyebrow="Careers"
          title={
            <>
              Do the best work of <Accent>your career</Accent>
            </>
          }
          description="Join a team of senior engineers building products for ambitious companies, with the pay, growth, and support you deserve."
        >
          <Button asChild size="lg">
            <a href="#open-roles">
              See open roles <ArrowRightIcon data-icon="inline-end" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={`mailto:${careersEmail}`}>
              <MailIcon data-icon="inline-start" /> Send your CV
            </a>
          </Button>
        </PageHero>
      </Band>
      <Band>
        <BenefitsSection />
      </Band>
      <Band tone="stone">
        <ProcessSection
          description="A clear, respectful process. Most candidates hear back from us within a week."
          eyebrow="Hiring process"
          id="hiring"
          steps={hiringSteps}
          title="How we hire"
        />
      </Band>
      <Band>
        <OpenRolesSection />
      </Band>
      <Band tone="dark">
        <CallToAction
          description="Tell us about yourself and the kind of work you want to do next. We read every application."
          title={
            <>
              Not seeing <Accent>the right role?</Accent>
            </>
          }
        >
          <Button asChild size="lg">
            <a href={`mailto:${careersEmail}`}>
              <MailIcon data-icon="inline-start" /> Send your CV
            </a>
          </Button>
        </CallToAction>
      </Band>
    </>
  )
}

export default Careers
