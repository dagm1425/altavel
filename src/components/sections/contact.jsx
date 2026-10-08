import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { DecorIcon } from '@/components/decor-icon'
import { CheckCircle2Icon, ClockIcon, MapPinIcon } from 'lucide-react'

// Adapted from Efferd's contact-5 block.

// EmailJS identifiers from .env (see .env.example). They are public by design.
const emailjsConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
}

// Placeholder contact details: replace with Altavel's real ones.
const details = [
  { title: 'Response time', value: 'Within one business day', icon: ClockIcon },
  { title: 'Office', value: '9705 Burnet Road Suite 102, Austin, TX 78758', icon: MapPinIcon },
]

const nextSteps = [
  'We reply within one business day to schedule a call.',
  'On a 30-minute call, we learn about your goals, users, and existing systems.',
  'You receive a proposed scope, timeline, and estimate in writing.',
]

const serviceOptions = [
  'Custom software development',
  'Web or mobile app',
  'UI/UX design',
  'AI & data',
  'Legacy modernization',
  'IT audit & consulting',
  'Maintenance & support',
  'Not sure yet',
]

const fieldClassName = 'h-11 rounded-md bg-background px-3'

export function ContactSection() {
  return (
    <section className="grid gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-highlight font-mono text-xs tracking-widest uppercase">
            What happens next
          </p>
          <ol className="flex flex-col gap-4">
            {nextSteps.map((step, index) => (
              <li className="flex gap-4" key={step}>
                <span className="text-muted-foreground font-mono text-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-highlight font-mono text-xs tracking-widest uppercase">
            Reach us directly
          </p>
          <ul className="flex flex-col gap-4">
            {details.map((item) => (
              <li className="flex items-center gap-4" key={item.title}>
                <span className="flex size-10 items-center justify-center rounded-full border">
                  <item.icon className="size-4" />
                </span>
                <div className="flex flex-col">
                  <span className="text-muted-foreground text-xs">{item.title}</span>
                  <span>{item.value}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-card relative border px-6 py-8 md:px-8">
        <DecorIcon position="top-left" />
        <DecorIcon position="top-right" />
        <DecorIcon position="bottom-left" />
        <DecorIcon position="bottom-right" />
        <div className="mb-8 flex flex-col gap-1.5">
          <h2 className="text-2xl font-medium">Tell us about your project</h2>
          <p className="text-muted-foreground text-sm">
            Share a few details and we will get back to you within one business day.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  // Sends the form straight from the browser with EmailJS. The EmailJS template decides
  // where the email goes (its "To Email" field) and how it looks.
  async function handleSubmit(event) {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))

    // Honeypot: real visitors never fill this hidden field, so quietly drop bot submissions.
    if (data.website) {
      setSubmitted(true)
      return
    }

    if (!emailjsConfig.publicKey || !emailjsConfig.serviceId || !emailjsConfig.templateId) {
      console.error('EmailJS is not configured. Fill in the VITE_EMAILJS_* values in .env.')
      setError('Email is not configured yet. Please try again later.')
      return
    }

    setSending(true)
    setError('')
    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        // Variable names match the EmailJS template: {{from_name}}, {{reply_to}}, etc.
        {
          from_name: `${data.firstName} ${data.lastName}`,
          reply_to: data.email,
          company: data.company || '-',
          service: data.service,
          message: data.message,
        },
        {
          publicKey: emailjsConfig.publicKey,
          blockHeadless: true,
          limitRate: { id: 'contact-form', throttle: 10000 },
        },
      )
      setSubmitted(true)
    } catch (sendError) {
      console.error('EmailJS failed to send:', sendError)
      setError(
        sendError?.status === 429
          ? 'Please wait a few seconds before sending another message.'
          : 'We could not send your message. Please try again.',
      )
    } finally {
      setSending(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-3 py-10" role="status">
        <CheckCircle2Icon className="size-8" />
        <p className="text-xl font-medium">Thanks, we got your message.</p>
        <p className="text-muted-foreground text-sm">
          We will be in touch within one business day.
        </p>
        <Button className="mt-2" onClick={() => setSubmitted(false)} variant="outline">
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <FieldGroup>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="first-name">First name</FieldLabel>
            <Input
              autoComplete="given-name"
              className={fieldClassName}
              id="first-name"
              name="firstName"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="last-name">Last name</FieldLabel>
            <Input
              autoComplete="family-name"
              className={fieldClassName}
              id="last-name"
              name="lastName"
              required
            />
          </Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="email">Work email</FieldLabel>
            <Input
              autoComplete="email"
              className={fieldClassName}
              id="email"
              name="email"
              required
              type="email"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="company">Company</FieldLabel>
            <Input
              autoComplete="organization"
              className={fieldClassName}
              id="company"
              name="company"
            />
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="service">What do you need?</FieldLabel>
          <select
            className={cn(
              'border-input focus-visible:border-ring focus-visible:ring-ring/50 w-full rounded-md border text-sm outline-none focus-visible:ring-3',
              fieldClassName,
            )}
            defaultValue=""
            id="service"
            name="service"
            required
          >
            <option disabled value="">
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
        <Field>
          <FieldLabel htmlFor="message">Project details</FieldLabel>
          <Textarea
            className="bg-background min-h-32 rounded-md px-3"
            id="message"
            name="message"
            placeholder="What are you building, and what kind of team do you need?"
            required
          />
        </Field>
        {/* Honeypot: hidden from people, but bots that fill every field get filtered out. */}
        <div aria-hidden="true" className="absolute -left-[9999px]">
          <label htmlFor="website">Website</label>
          <input autoComplete="off" id="website" name="website" tabIndex={-1} />
        </div>
      </FieldGroup>
      {error && (
        <p className="text-destructive mt-6 text-sm" role="alert">
          {error}
        </p>
      )}
      <Button className="mt-8 w-full" disabled={sending} size="lg" type="submit">
        {sending ? 'Sending…' : 'Send message'}
      </Button>
    </form>
  )
}
