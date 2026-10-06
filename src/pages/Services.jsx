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
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  BrainCircuitIcon,
  CheckIcon,
  CloudIcon,
  Code2Icon,
  HeadsetIcon,
  UserPlusIcon,
  UsersIcon,
} from 'lucide-react'

const services = [
  {
    id: 'dedicated-teams',
    icon: UsersIcon,
    title: 'Dedicated Teams',
    summary:
      'A long-term, cross-functional team that works only on your product. We handle hiring, HR, equipment, and retention. You set the priorities.',
    includes: [
      'A team shaped around your roadmap',
      'A delivery lead as your single point of contact',
      'Weekly demos and transparent reporting',
      'Fast replacements if someone is not the right fit',
      'Team size that scales month to month',
    ],
    roles: [
      'Frontend',
      'Backend',
      'Full-stack',
      'Mobile',
      'QA',
      'DevOps',
      'Product designer',
      'Delivery manager',
    ],
  },
  {
    id: 'staff-augmentation',
    icon: UserPlusIcon,
    title: 'Staff Augmentation',
    summary:
      'Add senior engineers to your in-house team within weeks. They work in your tools, follow your processes, and report to your managers.',
    includes: [
      'Candidate profiles shortlisted within days',
      'You interview and approve every engineer',
      'Engineers dedicated full-time to your project',
      'Payroll, HR, and equipment handled by Altavel',
      'Flexible, month-to-month engagement',
    ],
    roles: [
      'React',
      'Node.js',
      'Python',
      'Java',
      '.NET',
      'Go',
      'iOS & Android',
      'Data engineering',
    ],
  },
  {
    id: 'custom-software',
    icon: Code2Icon,
    title: 'Custom Software Development',
    summary:
      'End-to-end delivery of web and mobile products. We take you from idea to production with a clear scope, milestones, and post-launch support.',
    includes: [
      'Discovery and technical scoping',
      'UX/UI design and prototyping',
      'Architecture and development',
      'QA, launch, and handover',
      'Ongoing maintenance and support',
    ],
    roles: ['Solution architect', 'Product designer', 'Engineers', 'QA', 'Project manager'],
  },
  {
    id: 'ai-data',
    icon: BrainCircuitIcon,
    title: 'AI & Data',
    summary:
      'Bring AI into your product with features that hold up in production, built on solid data engineering.',
    includes: [
      'LLM integrations and AI agents',
      'Search and retrieval over your own data',
      'Data pipelines and warehouses',
      'Analytics dashboards and reporting',
      'ML model deployment and monitoring',
    ],
    roles: ['AI engineer', 'ML engineer', 'Data engineer', 'Data analyst'],
  },
  {
    id: 'cloud-devops',
    icon: CloudIcon,
    title: 'Cloud & DevOps',
    summary:
      'Modern infrastructure that is secure, observable, and cost-efficient, so your team can ship often and sleep well.',
    includes: [
      'Cloud migration to AWS, Azure, or Google Cloud',
      'CI/CD pipelines',
      'Infrastructure as code',
      'Monitoring, alerting, and on-call',
      'Cloud cost optimization',
    ],
    roles: ['DevOps engineer', 'Site reliability engineer', 'Cloud architect'],
  },
  {
    id: 'qa-testing',
    icon: BadgeCheckIcon,
    title: 'QA & Testing',
    summary:
      'Quality built into every sprint, from test strategy to automated suites that run on every commit.',
    includes: [
      'Test strategy and planning',
      'Manual and exploratory testing',
      'UI and API test automation',
      'Performance and load testing',
      'Release regression testing',
    ],
    roles: ['QA engineer', 'QA automation engineer', 'Performance tester'],
  },
  {
    id: 'customer-support',
    icon: HeadsetIcon,
    title: 'Customer Support',
    summary:
      'Trained, fluent support agents who answer your customers over chat, email, and phone. They work in your helpdesk, follow your playbooks, and speak in your brand voice.',
    includes: [
      'Chat, email, and phone support',
      'Tier 1 and technical tier 2 support',
      'Agents trained on your product and tone',
      'Coverage across time zones, including after hours',
      'Quality reviews and CSAT reporting',
    ],
    roles: [
      'Support agent',
      'Technical support specialist',
      'Support team lead',
      'Quality analyst',
    ],
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
        <div className="flex items-center gap-3">
          <span className="text-muted-foreground font-mono text-sm">
            {String(index + 1).padStart(2, '0')}
          </span>
          <service.icon className="size-6" strokeWidth={1.5} />
        </div>
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
            Typical roles
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
              Engineering capacity, <Accent>exactly how you need it</Accent>
            </>
          }
          description="From a single senior engineer to a full product team, Altavel covers the skills modern software companies need to build, scale, and support their products."
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
          className="relative flex flex-wrap justify-center gap-2 px-4 pb-12"
        >
          {services.map((service) => (
            <a
              className="text-muted-foreground hover:border-primary hover:text-foreground rounded-full border px-3 py-1 text-sm transition-colors"
              href={`#${service.id}`}
              key={service.id}
            >
              {service.title}
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
