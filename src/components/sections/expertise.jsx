import { cn } from '@/lib/utils'
import { FullWidthDivider } from '@/components/full-width-divider'
import { SectionHeading } from '@/components/sections/section-heading'
import {
  BriefcaseIcon,
  HeartPulseIcon,
  HouseIcon,
  LandmarkIcon,
  RocketIcon,
  ScaleIcon,
  ShoppingBagIcon,
  TruckIcon,
} from 'lucide-react'

const technologies = [
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'Java',
  '.NET',
  'Go',
  'Flutter',
  'React Native',
  'AWS',
  'Azure',
  'Google Cloud',
  'Kubernetes',
  'PostgreSQL',
  'LangChain',
  'LangGraph',
]

export function ExpertiseSection() {
  return (
    <section className="flex flex-col gap-14 py-16 md:py-24" id="expertise">
      <SectionHeading
        className="px-4"
        eyebrow="Industries"
        title="Industries we build for"
        description="Domain knowledge matters as much as code. These are the industries where our clients run their businesses, and the stack we use to build for them."
      />
      <div className="relative">
        <FullWidthDivider position="top" />
        <div className="bg-border grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard feature={feature} key={feature.title} />
          ))}
        </div>
        <FullWidthDivider position="bottom" />
      </div>
      <ul className="flex flex-wrap justify-center gap-2 px-4">
        {technologies.map((tech) => (
          <li
            className="bg-muted/40 text-muted-foreground rounded-full border px-3 py-1 font-mono text-xs"
            key={tech}
          >
            {tech}
          </li>
        ))}
      </ul>
    </section>
  )
}

export function FeatureCard({ feature, className, ...props }) {
  return (
    <div
      className={cn(
        'bg-background relative flex flex-col justify-start overflow-hidden p-4 md:p-6',
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          'relative z-10 flex items-center pt-4 pb-6',
          '[&_svg]:text-highlight [&_svg]:size-5',
        )}
      >
        {feature.icon}
      </div>

      <div className="relative z-10 space-y-2">
        <h3 className="text-foreground text-lg font-medium">{feature.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
      </div>
    </div>
  )
}

const features = [
  {
    title: 'Healthcare',
    icon: <HeartPulseIcon />,
    description:
      'Patient-facing apps, care platforms, and benefits tools built with privacy in mind.',
  },
  {
    title: 'Fintech & Banking',
    icon: <LandmarkIcon />,
    description: 'Payments, wealth, and banking software where security and accuracy come first.',
  },
  {
    title: 'Logistics',
    icon: <TruckIcon />,
    description: 'Freight, tracking, and operations software that keeps goods and data moving.',
  },
  {
    title: 'Retail & Supply Chain',
    icon: <ShoppingBagIcon />,
    description: 'Commerce platforms, supplier integrations, and inventory and order systems.',
  },
  {
    title: 'Real Estate',
    icon: <HouseIcon />,
    description: 'Listing, transaction, and property platforms for buyers, sellers, and agents.',
  },
  {
    title: 'HR & Payroll',
    icon: <BriefcaseIcon />,
    description: 'People, payroll, and workforce tools that handle sensitive employee data.',
  },
  {
    title: 'Legal',
    icon: <ScaleIcon />,
    description: 'Self-service legal products, document workflows, and client portals.',
  },
  {
    title: 'SaaS & Startups',
    icon: <RocketIcon />,
    description: 'New products and MVPs, built to launch quickly and scale after the next round.',
  },
]
