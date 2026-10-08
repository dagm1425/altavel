import { Link } from 'react-router'
import { Seo } from '@/components/seo'
import { Band } from '@/components/band'
import { Button } from '@/components/ui/button'
import { FullWidthDivider } from '@/components/full-width-divider'
import { PageHero } from '@/components/sections/page-hero'
import { Accent, SectionHeading } from '@/components/sections/section-heading'
import { FeatureCard } from '@/components/sections/why-altavel'
import AboutAndStats from '@/components/shadcn-space/radix/blocks/about-us-01'
import { LogoGrid } from '@/components/sections/logo-grid'
import { CallToAction } from '@/components/sections/cta'
import {
  ArrowRightIcon,
  EyeIcon,
  FileLockIcon,
  HandshakeIcon,
  HeartHandshakeIcon,
  KeyRoundIcon,
  LaptopIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserSearchIcon,
} from 'lucide-react'

const values = [
  {
    title: 'Own the outcome',
    icon: <HandshakeIcon />,
    description:
      'We measure success by whether the software works for your business, not by hours billed. If something is off, we say so early and fix it.',
  },
  {
    title: 'Work in the open',
    icon: <EyeIcon />,
    description:
      'Shared boards, demos every two weeks, and honest reporting. You always know what is being built, by whom, and what it costs.',
  },
  {
    title: 'Build to last',
    icon: <HeartHandshakeIcon />,
    description:
      'Clean architecture, tests, and documentation are part of the job, so your software is easy to run, extend, and hand over for years.',
  },
]

const security = [
  {
    icon: FileLockIcon,
    title: 'NDA & IP assignment',
    description: 'Signed before work starts. Everything we build belongs to you.',
  },
  {
    icon: LaptopIcon,
    title: 'Managed devices',
    description: 'Encrypted, centrally managed laptops for every engineer.',
  },
  {
    icon: KeyRoundIcon,
    title: 'Least-privilege access',
    description: 'Access granted per project and revoked on offboarding.',
  },
  {
    icon: UserSearchIcon,
    title: 'Background screening',
    description: 'Reference and background checks for every hire.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Data protection',
    description: 'Security practices aligned with your compliance requirements.',
  },
  {
    icon: ScaleIcon,
    title: 'Clear contracts',
    description: 'Simple agreements with transparent terms and exit clauses.',
  },
]

function StorySection() {
  return (
    <section className="grid gap-8 px-4 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-24">
      <div className="flex flex-col gap-3">
        <p className="text-highlight font-mono text-xs tracking-widest uppercase">Our story</p>
        <h2 className="3xl:text-6xl text-3xl font-medium tracking-tight text-balance md:text-5xl">
          Software that fits <Accent>the business</Accent>
        </h2>
      </div>
      {/* Placeholder story: replace with Altavel's own founding story. */}
      <div className="text-muted-foreground flex flex-col gap-4 leading-relaxed md:pt-8">
        <p>
          Altavel started with a simple observation: growing businesses keep bending their work
          around tools that were never built for them, and most software projects that try to fix
          this run late, over budget, or out of sight.
        </p>
        <p>
          So we built a software company that works the opposite way: a written scope before the
          first line of code, a working release every two weeks, and code that belongs to our
          clients from day one.
        </p>
        <p>
          Today we design, build, and support custom software for startups, product companies, and
          enterprises, from first prototypes to systems their whole business runs on.
        </p>
      </div>
    </section>
  )
}

function ValuesSection() {
  return (
    <section className="flex flex-col gap-14 px-4 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Our values"
        title="What we stand for"
        description="Three principles shape how we plan, build, and support every piece of software we ship."
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {values.map((value) => (
          <FeatureCard feature={value} key={value.title} />
        ))}
      </div>
    </section>
  )
}

function ClientsSection() {
  return (
    <section className="flex flex-col gap-12 px-4 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Clients"
        title="Companies we've helped build"
        description="From fast-growing startups to public companies, teams trust Altavel with the software their business runs on."
      />
      <LogoGrid />
    </section>
  )
}

function SecuritySection() {
  return (
    <section className="flex flex-col gap-14 py-16 md:py-24" id="security">
      <SectionHeading
        className="px-4"
        eyebrow="Security & compliance"
        title="Enterprise-grade protection, from day one"
        description="Your code, data, and intellectual property are protected by default in every engagement."
      />
      <div className="relative">
        <FullWidthDivider position="top" />
        <div className="bg-border grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
          {security.map((item) => (
            <div className="bg-background flex flex-col gap-3 p-6 md:p-8" key={item.title}>
              <item.icon className="text-highlight size-6" strokeWidth={1.5} />
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <FullWidthDivider position="bottom" />
      </div>
    </section>
  )
}

function About() {
  return (
    <>
      <Seo path="/about" />
      <Band tone="dark">
        <PageHero
          eyebrow="About Altavel"
          title={
            <>
              We build software <Accent>that lasts</Accent>
            </>
          }
          description="Altavel is a software engineering company building custom web, mobile, and AI products with clear milestones and code our clients own."
        >
          <Button asChild size="lg">
            <Link to="/contact">
              Start a project <ArrowRightIcon data-icon="inline-end" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/careers">Join the team</Link>
          </Button>
        </PageHero>
      </Band>
      <Band>
        <StorySection />
      </Band>
      <Band tone="stone">
        <ValuesSection />
      </Band>
      <Band>
        <AboutAndStats />
      </Band>
      <Band tone="stone">
        <ClientsSection />
      </Band>
      <Band>
        <SecuritySection />
      </Band>
      <Band tone="dark">
        <CallToAction />
      </Band>
    </>
  )
}

export default About
