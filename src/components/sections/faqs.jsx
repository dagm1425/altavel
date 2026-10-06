import { Link } from 'react-router'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { DecorIcon } from '@/components/decor-icon'

export function FaqsSection() {
  return (
    <section className="grid w-full grid-cols-1 py-16 md:grid-cols-2 md:py-24" id="faq">
      <div className="px-4 pb-8 md:pt-6">
        <div className="space-y-5">
          <p className="text-highlight font-mono text-xs tracking-widest uppercase">FAQ</p>
          <h2 className="text-4xl font-medium tracking-tight text-balance md:text-5xl">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground">
            Quick answers to common questions about working with Altavel.
          </p>
          <p className="text-muted-foreground">
            {"Can't find what you're looking for? "}
            <Link
              className="text-highlight underline underline-offset-4 hover:no-underline"
              to="/contact"
            >
              Talk to us
            </Link>
          </p>
        </div>
      </div>
      <div className="relative place-content-center">
        {/* vertical guide line */}
        <div
          aria-hidden="true"
          className="bg-border pointer-events-none absolute inset-y-0 left-3 h-full w-px"
        />

        <Accordion className="rounded-none border-x-0 border-y" collapsible type="single">
          {faqs.map((item) => (
            <AccordionItem className="group relative pl-5" key={item.id} value={item.id}>
              <DecorIcon className="left-[13px] size-3 group-last:hidden" position="bottom-left" />

              <AccordionTrigger className="px-4 py-4 hover:no-underline focus-visible:underline focus-visible:ring-0">
                {item.title}
              </AccordionTrigger>

              <AccordionContent className="text-muted-foreground px-4 pb-4">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

const faqs = [
  {
    id: 'item-1',
    title: 'How is Altavel different from a typical outsourcing agency?',
    content:
      'Our engineers work as an extension of your team, not a black box. You interview and approve every engineer, they work in your tools and rituals, and you get full visibility into progress and costs.',
  },
  {
    id: 'item-2',
    title: 'What types of companies do you work with?',
    content:
      'We work with early-stage startups building their first product, growing product companies that need more velocity, and enterprises modernizing systems or launching new initiatives.',
  },
  {
    id: 'item-3',
    title: 'How quickly can a team start?',
    content:
      'We typically share a shortlist of candidates within days of our discovery call, and most teams are onboarded and shipping within two to four weeks.',
  },
  {
    id: 'item-4',
    title: 'Which engagement model is right for me?',
    content:
      'Staff augmentation suits teams that want to add capacity under their own management. A dedicated team suits long-term product work. Project delivery suits well-scoped builds. We will recommend a model on our first call, and you can switch later.',
  },
  {
    id: 'item-5',
    title: 'How do you protect our code and data?',
    content:
      'Every engagement starts with an NDA and full IP assignment to you. We use secure, managed devices, least-privilege access, and offboarding checklists for every engineer.',
  },
  {
    id: 'item-6',
    title: 'How do you handle time zones and communication?',
    content:
      'Our teams guarantee several hours of daily overlap with your working hours, communicate in fluent English, and join your Slack, standups, and planning sessions.',
  },
  {
    id: 'item-7',
    title: "What if an engineer isn't the right fit?",
    content:
      'Every engagement starts with a risk-free trial period. If someone is not the right fit at any point, we replace them quickly at no extra cost.',
  },
]
