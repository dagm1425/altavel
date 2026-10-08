import { Link } from 'react-router'
import { Seo } from '@/components/seo'
import { Band } from '@/components/band'
import { Button } from '@/components/ui/button'
import { DecorIcon } from '@/components/decor-icon'
import { FullWidthDivider } from '@/components/full-width-divider'
import { PageHero } from '@/components/sections/page-hero'
import { Accent } from '@/components/sections/section-heading'
import { ExpertiseSection } from '@/components/sections/expertise'
import { CallToAction } from '@/components/sections/cta'
import { ArrowRightIcon, CheckIcon } from 'lucide-react'

const services = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    navTitle: 'Custom Software',
    summary:
      'When off-the-shelf tools stop fitting, we build software around the way your business actually works: platforms, internal tools, portals, and the integrations that tie them together.',
    includes: [
      'Discovery, requirements, and technical scoping',
      'Software architecture and system design',
      'Integrations with your existing tools and APIs',
      'Data migration from spreadsheets or old systems',
      'Documentation and a full handover',
    ],
    roles: ['Solution architect', 'Delivery lead', 'Full-stack engineers', 'QA engineer'],
  },
  {
    id: 'web-mobile',
    title: 'Web & Mobile Apps',
    summary:
      'Fast, accessible web applications and iOS and Android apps, built native or cross-platform depending on what your users and budget need.',
    includes: [
      'Web apps, customer portals, and dashboards',
      'Native iOS and Android apps',
      'Cross-platform apps with React Native or Flutter',
      'App Store and Google Play release',
      'Analytics, crash reporting, and performance tuning',
    ],
    roles: ['Frontend engineers', 'Mobile engineers', 'Backend engineer', 'QA engineer'],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    summary:
      'Product design that makes complex software feel simple, grounded in research with real users and handed to engineering ready to build.',
    includes: [
      'User research and product discovery',
      'Wireframes and clickable prototypes',
      'Visual design and branding for products',
      'Design systems and component libraries',
      'Accessibility and usability reviews',
    ],
    roles: ['Product designer', 'UX researcher', 'Design engineer'],
  },
  {
    id: 'ai-data',
    title: 'AI & Data',
    summary:
      'AI features that hold up in production, built on solid data engineering, from assistants and document processing to analytics your team will actually use.',
    includes: [
      'LLM-powered features and AI agents',
      'Search and question answering over your own data',
      'Document processing and workflow automation',
      'Data pipelines, warehouses, and dashboards',
      'Model evaluation, monitoring, and cost control',
    ],
    roles: ['AI engineer', 'Data engineer', 'ML engineer', 'Data analyst'],
  },
  {
    id: 'legacy-modernization',
    title: 'Legacy Modernization',
    summary:
      'Aging systems hold businesses back, but rewrites are risky. We modernize in safe, staged steps so the business keeps running while the software improves.',
    includes: [
      'Assessment of your current system and risks',
      'A step-by-step modernization roadmap',
      'Re-platforming to a modern, supported stack',
      'Moving on-premise systems to the cloud',
      'Safe data migration with parallel runs',
    ],
    roles: ['Solution architect', 'Backend engineers', 'Cloud engineer', 'QA engineer'],
  },
  {
    id: 'it-consulting',
    title: 'IT Audit & Consulting',
    summary:
      'An independent, plain-language review of your infrastructure, security, and code, with a prioritized plan for what to fix first and what it will cost.',
    includes: [
      'Infrastructure and application audits',
      'Security and access reviews',
      'Code quality and architecture reviews',
      'Technology roadmaps and cloud cost reviews',
      'Compliance readiness support',
    ],
    roles: ['Solution architect', 'Security engineer', 'Cloud engineer'],
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance & Support',
    summary:
      'Software needs care after launch. We keep it healthy, secure, and improving, and we can support your users too, with response times agreed in writing.',
    includes: [
      'Monitoring, updates, and security patches',
      'Bug fixes with agreed response times',
      'Cloud hosting and DevOps management',
      'Helpdesk and end-user support agents',
      'Monthly hours for improvements and new features',
    ],
    roles: ['Support engineer', 'DevOps engineer', 'Support agents', 'Delivery lead'],
  },
]

function ServiceDetail({ service, index }) {
  return (
    <section
      className="relative grid gap-8 px-4 py-12 md:grid-cols-[1fr_1.2fr] md:gap-12 md:px-8 md:py-16"
      id={service.id}
    >
      <FullWidthDivider position="bottom" />
      <div className="flex flex-col gap-4">
        <span className="text-muted-foreground font-mono text-sm">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h2 className="text-3xl font-medium tracking-tight md:text-4xl">{service.title}</h2>
        <p className="text-muted-foreground leading-relaxed">{service.summary}</p>
        <div>
          <Button asChild className="mt-2" variant="outline">
            <Link to="/contact">
              Talk to us <ArrowRightIcon data-icon="inline-end" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="bg-card relative border p-6">
          <DecorIcon className="size-3.5" position="top-left" />
          <DecorIcon className="size-3.5" position="bottom-right" />
          <h3 className="text-highlight mb-4 font-mono text-xs tracking-widest uppercase">
            What&apos;s included
          </h3>
          <ul className="flex flex-col gap-3">
            {service.includes.map((item) => (
              <li className="flex gap-2 text-sm" key={item}>
                <CheckIcon className="mt-0.5 size-4 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-highlight mb-3 font-mono text-xs tracking-widest uppercase">
            Who works on it
          </h3>
          <ul className="flex flex-wrap gap-2">
            {service.roles.map((role) => (
              <li
                className="bg-muted/40 text-muted-foreground rounded-full border px-3 py-1 text-xs"
                key={role}
              >
                {role}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <>
      <Seo path="/services" />
      <Band tone="dark">
        <PageHero
          eyebrow="Services"
          title={
            <>
              Software services, <Accent>end to end</Accent>
            </>
          }
          description="Seven practices, one accountable team. Start with a single build, audit, or redesign, and keep the same people when it is time to support and grow it."
        >
          <Button asChild size="lg">
            <Link to="/contact">
              Book a call <ArrowRightIcon data-icon="inline-end" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/how-we-work">How we work</Link>
          </Button>
        </PageHero>
        <nav
          aria-label="Services on this page"
          className="relative mx-auto flex max-w-2xl flex-wrap justify-center gap-2 px-4 pb-12"
        >
          {services.map((service) => (
            <a
              className="text-muted-foreground hover:border-primary hover:text-foreground rounded-full border px-3 py-1 text-sm transition-colors"
              href={`#${service.id}`}
              key={service.id}
            >
              {service.navTitle || service.title}
            </a>
          ))}
        </nav>
      </Band>
      <Band>
        {services.map((service, index) => (
          <ServiceDetail index={index} key={service.id} service={service} />
        ))}
      </Band>
      <Band tone="stone">
        <ExpertiseSection />
      </Band>
      <Band tone="dark">
        <CallToAction />
      </Band>
    </>
  )
}

export default Services
