import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { DecorIcon } from '@/components/decor-icon'
import { SectionHeading } from '@/components/sections/section-heading'
import { QuoteIcon } from 'lucide-react'

// Placeholder testimonials: replace with real client quotes before launch.
const testimonials = [
  {
    quote:
      'Placeholder: a short client quote about how quickly the Altavel team ramped up and started shipping.',
    name: 'Client Name',
    role: 'CTO',
    company: 'Company',
  },
  {
    quote:
      'Placeholder: a short client quote about engineering quality, communication, and transparency.',
    name: 'Client Name',
    role: 'VP of Engineering',
    company: 'Company',
  },
  {
    quote:
      'Placeholder: a short client quote about the business impact of working with Altavel long term.',
    name: 'Client Name',
    role: 'Founder & CEO',
    company: 'Company',
  },
]

export function TestimonialsSection() {
  return (
    <section className="flex flex-col gap-14 px-4 pt-16 pb-16 md:px-8 md:pt-24 md:pb-36">
      <SectionHeading
        eyebrow="Testimonials"
        title="What our clients say"
        description="Teams that trust Altavel with the products their business depends on."
      />
      <div className="grid w-full gap-8 md:grid-cols-3 md:gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard index={index} key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, index, className, ...props }) {
  const { quote, name, role, company } = testimonial

  return (
    <figure
      className={cn(
        'relative flex flex-col justify-between gap-6 px-8 pt-8 pb-6 shadow-xs md:translate-y-[calc(3rem*var(--t-card-index))]',
        'dark:bg-[radial-gradient(50%_80%_at_25%_0%,--theme(--color-foreground/.1),transparent)]',
        className,
      )}
      style={{ '--t-card-index': index }}
      {...props}
    >
      <div className="bg-border absolute -inset-y-4 -left-px w-px" />
      <div className="bg-border absolute -inset-y-4 -right-px w-px" />
      <div className="bg-border absolute -inset-x-4 -top-px h-px" />
      <div className="bg-border absolute -right-4 -bottom-px -left-4 h-px" />
      <DecorIcon className="size-3.5" position="top-left" />

      <blockquote className="flex gap-4">
        <QuoteIcon aria-hidden="true" className="text-highlight size-6 shrink-0 stroke-1" />

        <p className="text-muted-foreground flex-1 text-base leading-relaxed font-normal">
          {quote}
        </p>
      </blockquote>

      <figcaption className="flex items-center gap-3">
        <Avatar className="ring-border ring-offset-background size-10 rounded-full ring-2 ring-offset-2">
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <cite className="text-foreground text-sm font-medium not-italic">{name}</cite>
          <p className="text-muted-foreground text-xs">
            {role}, <span className="text-foreground/80">{company}</span>
          </p>
        </div>
      </figcaption>
    </figure>
  )
}
