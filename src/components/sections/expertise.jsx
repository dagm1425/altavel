import { cn } from '@/lib/utils'
import { FullWidthDivider } from '@/components/full-width-divider'
import { SectionHeading } from '@/components/sections/section-heading'
import {
  BarChart3Icon,
  CloudUploadIcon,
  GitBranchIcon,
  GlobeIcon,
  PenToolIcon,
  ShoppingCartIcon,
  SmartphoneIcon,
  SparklesIcon,
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
        eyebrow="Expertise"
        title="Deep skills across the modern stack"
        description="From the first prototype to systems serving millions of users, our engineers have shipped it before."
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
    title: 'Web Development',
    icon: <GlobeIcon />,
    description: 'Fast, accessible web apps and platforms built on modern frameworks.',
  },
  {
    title: 'Mobile Apps',
    icon: <SmartphoneIcon />,
    description: 'Native and cross-platform iOS and Android apps users love.',
  },
  {
    title: 'Generative AI',
    icon: <SparklesIcon />,
    description: 'LLM integrations, AI agents, and retrieval systems in production.',
  },
  {
    title: 'Data & Analytics',
    icon: <BarChart3Icon />,
    description: 'Pipelines, warehouses, and dashboards that turn data into decisions.',
  },
  {
    title: 'Cloud Migration',
    icon: <CloudUploadIcon />,
    description: 'Move legacy workloads to the cloud with zero-drama cutovers.',
  },
  {
    title: 'DevOps & SRE',
    icon: <GitBranchIcon />,
    description: 'CI/CD, infrastructure as code, observability, and on-call support.',
  },
  {
    title: 'E-commerce',
    icon: <ShoppingCartIcon />,
    description: 'Storefronts, checkout flows, and integrations that convert.',
  },
  {
    title: 'UI/UX Design',
    icon: <PenToolIcon />,
    description: 'Product design, design systems, and prototypes ready for engineering.',
  },
]
