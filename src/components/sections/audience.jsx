import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Accent, SectionHeading } from '@/components/sections/section-heading'
import { Building2Icon, CheckIcon, LayersIcon, RocketIcon } from 'lucide-react'

// Bento layout adapted from the Shadcn Space testimonial-01 block, without image assets.

function BentoItem({ className, delay, isInView, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1, delay, ease: 'easeInOut' }}
      className={cn('col-span-1', className)}
    >
      {children}
    </motion.div>
  )
}

function Label({ icon: Icon, children, className }) {
  return (
    <p className={cn('flex items-center gap-2 text-base font-normal', className)}>
      {Icon && <Icon className="size-4" />}
      {children}
    </p>
  )
}

function Points({ points, className, iconClassName }) {
  return (
    <ul className={cn('flex flex-wrap gap-2', className)}>
      {points.map((point) => (
        <li className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm" key={point}>
          <CheckIcon className={cn('size-3.5 shrink-0', iconClassName)} />
          {point}
        </li>
      ))}
    </ul>
  )
}

export function AudienceSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section ref={sectionRef} className="flex flex-col gap-12 px-4 py-16 md:py-24">
      <SectionHeading
        eyebrow="Who we work with"
        title={
          <>
            Built for <Accent>every stage</Accent> of growth
          </>
        }
      />
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
        {/* Startups */}
        <BentoItem className="md:col-span-2 lg:col-span-8" delay={0.2} isInView={isInView}>
          <Card className="bg-ink relative h-full w-full overflow-hidden rounded-2xl border p-8 ring-0 md:min-h-96 md:pe-16">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.06)_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_top_right,black,transparent_70%)] bg-size-[32px_32px]"
            />
            <div
              aria-hidden="true"
              className="bg-primary/30 absolute -top-24 -right-24 size-80 rounded-full blur-3xl"
            />
            <CardContent className="relative flex h-full flex-col items-start justify-between gap-16 p-0">
              <Label className="text-white/70" icon={RocketIcon}>
                Startups
              </Label>
              <div className="flex flex-col gap-6">
                <p className="text-xl font-medium text-white lg:text-2xl">
                  Ship your MVP and find product-market fit without burning runway on hiring.
                </p>
                <Points
                  className="border-white/15 text-white/80 [&>li]:border-white/15"
                  iconClassName="text-primary"
                  points={[
                    'MVPs in weeks, not quarters',
                    'Senior engineers at a startup budget',
                    'Scale the team after you raise',
                  ]}
                />
              </div>
            </CardContent>
          </Card>
        </BentoItem>

        {/* Facts & numbers (placeholder figure: replace before launch) */}
        <BentoItem className="lg:col-span-4" delay={0.2} isInView={isInView}>
          <Card className="bg-primary h-full w-full rounded-2xl border p-8 ring-0 md:min-h-96">
            <CardContent className="flex h-full flex-col items-start justify-between gap-16 p-0">
              <Label className="text-primary-foreground/70">Facts & numbers</Label>
              <div className="flex flex-col items-start gap-4">
                <p className="text-primary-foreground text-5xl font-medium tracking-tight lg:text-6xl">
                  2–4 wks
                </p>
                <p className="text-primary-foreground text-xl font-medium lg:text-2xl">
                  from first call to a team shipping code.
                </p>
              </div>
            </CardContent>
          </Card>
        </BentoItem>

        {/* Product companies */}
        <BentoItem className="lg:col-span-4" delay={0.5} isInView={isInView}>
          <Card className="bg-ink h-full w-full rounded-2xl border p-8 ring-0">
            <CardContent className="flex h-full flex-col items-start justify-between gap-8 p-0">
              <div className="flex flex-col items-start gap-2">
                <Label className="text-white/70" icon={LayersIcon}>
                  Product companies
                </Label>
                <p className="text-xl font-medium text-white lg:text-2xl">
                  Increase roadmap velocity with engineers who plug straight into your team.
                </p>
              </div>
              <ul className="flex flex-col gap-2 text-sm text-white/80">
                {[
                  'Clear the backlog faster',
                  'Fill hard-to-hire skill gaps',
                  'Keep core knowledge in-house',
                ].map((point) => (
                  <li className="flex items-center gap-2" key={point}>
                    <CheckIcon className="text-primary size-3.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              {/* Decorative velocity bars */}
              <div aria-hidden="true" className="flex h-20 w-full items-end gap-2">
                {[28, 36, 34, 48, 58, 72, 100].map((height, index) => (
                  <div
                    className="from-primary/30 to-primary flex-1 rounded-t-md bg-linear-to-t"
                    key={index}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </BentoItem>

        {/* Enterprises */}
        <BentoItem className="lg:col-span-8" delay={0.5} isInView={isInView}>
          <Card className="border-khaki bg-stone h-full w-full rounded-2xl border p-8 ring-0">
            <CardContent className="flex h-full flex-col items-start justify-between gap-16 p-0">
              <div className="flex flex-col items-start gap-2">
                <Label className="text-ink" icon={Building2Icon}>
                  Enterprises
                </Label>
                <p className="text-ink text-xl font-medium lg:text-2xl">
                  Modernize legacy systems and launch new initiatives with governance and security
                  built in from day one.
                </p>
              </div>
              <Points
                className="text-ink [&>li]:border-khaki [&>li]:bg-paper/70"
                iconClassName="text-ink"
                points={[
                  'Legacy modernization',
                  'Security and compliance first',
                  'Dedicated delivery management',
                ]}
              />
            </CardContent>
          </Card>
        </BentoItem>
      </div>
    </section>
  )
}
