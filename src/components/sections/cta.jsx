import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { DecorIcon } from '@/components/decor-icon'
import { Accent } from '@/components/sections/section-heading'
import { ArrowRightIcon } from 'lucide-react'

function DefaultActions() {
  return (
    <Button asChild size="lg">
      <Link to="/contact">
        Book a call <ArrowRightIcon data-icon="inline-end" />
      </Link>
    </Button>
  )
}

export function CallToAction({
  title = (
    <>
      Ready to <Accent>build your team?</Accent>
    </>
  ),
  description = 'Tell us what you are building. Within one business day we will send a recommended team shape, timeline, and estimate.',
  children = <DefaultActions />,
}) {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-primary/.08),transparent)] 3xl:max-w-5xl relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-5 border-y px-4 py-12 md:py-16 2xl:max-w-4xl">
        <DecorIcon className="size-4" position="top-left" />
        <DecorIcon className="size-4" position="top-right" />
        <DecorIcon className="size-4" position="bottom-left" />
        <DecorIcon className="size-4" position="bottom-right" />

        <div className="pointer-events-none absolute -inset-y-6 -left-px w-px border-l" />
        <div className="pointer-events-none absolute -inset-y-6 -right-px w-px border-r" />

        <div className="absolute top-0 left-1/2 -z-10 h-full border-l border-dashed" />

        <h2 className="text-center text-3xl font-medium tracking-tight text-balance md:text-5xl">
          {title}
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl text-center text-sm font-medium text-balance md:text-base">
          {description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2">{children}</div>
      </div>
    </section>
  )
}
