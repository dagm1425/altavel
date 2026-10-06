import { cn } from '@/lib/utils'
import { DecorIcon } from '@/components/decor-icon'
import { Accent, SectionHeading } from '@/components/sections/section-heading'
import { BadgeCheckIcon, EyeIcon, HeartHandshakeIcon, ShieldCheckIcon } from 'lucide-react'

export function WhyAltavelSection() {
  return (
    <section className="flex w-full flex-col justify-center gap-14 px-4 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Why Altavel"
        title={
          <>
            Outsourcing that feels like <Accent>your own team</Accent>
          </>
        }
        description="Most outsourcing fails on communication, churn, and hidden work. We built Altavel to fix all three."
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard feature={feature} key={feature.title} />
        ))}
      </div>
    </section>
  )
}

export function FeatureCard({ feature, className, ...props }) {
  return (
    <div
      className={cn(
        'bg-background relative flex flex-col justify-start gap-6 px-6 pt-8 pb-6 shadow-xs',
        'dark:bg-[radial-gradient(50%_80%_at_25%_0%,--theme(--color-foreground/.1),transparent)]',
        className,
      )}
      {...props}
    >
      {/* Extended Borders */}
      <div className="bg-border absolute -inset-y-4 -left-px w-px" />
      <div className="bg-border absolute -inset-y-4 -right-px w-px" />
      <div className="bg-border absolute -inset-x-4 -top-px h-px" />
      <div className="bg-border absolute -right-4 -bottom-px -left-4 h-px" />

      {/* Corner Decor */}
      <DecorIcon className="size-3.5" position="top-left" />

      <div
        className={cn(
          'bg-card relative z-10 flex w-fit items-center justify-center rounded-lg border p-3',
          '[&_svg]:text-highlight [&_svg]:size-5 [&_svg]:stroke-[1.5]',
        )}
      >
        {feature.icon}
      </div>

      <div className="relative z-10 space-y-2">
        <h3 className="text-foreground text-base font-medium">{feature.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
      </div>
    </div>
  )
}

const features = [
  {
    title: 'Senior, vetted talent',
    icon: <BadgeCheckIcon />,
    description:
      'Every engineer passes technical interviews, a live coding round, and a communication check before you meet them.',
  },
  {
    title: 'Transparent delivery',
    icon: <EyeIcon />,
    description:
      'Weekly demos, shared boards, and clear reporting. You always know what is being built and what it costs.',
  },
  {
    title: 'Built for retention',
    icon: <HeartHandshakeIcon />,
    description:
      'Competitive pay, growth paths, and real benefits keep engineers on your product for the long run.',
  },
  {
    title: 'Security & IP protection',
    icon: <ShieldCheckIcon />,
    description:
      'NDAs, IP assignment, secure devices, and strict access controls are standard from day one.',
  },
]
