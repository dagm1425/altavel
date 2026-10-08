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
    title: 'What kind of software do you build?',
    content:
      'Web applications, iOS and Android apps, internal tools and portals, integrations between systems, and AI features like assistants and document processing. We also modernize legacy software and audit existing systems.',
  },
  {
    id: 'item-2',
    title: 'How much does a custom software project cost?',
    content:
      'It depends on scope, so we start with a short discovery phase. After that you get a written proposal with a fixed price for each milestone. Any change to scope is priced and approved by you before we build it.',
  },
  {
    id: 'item-3',
    title: 'How long does it take to build?',
    content:
      'A focused first version usually takes a few months, and larger platforms are planned in phases. You see a working release every two weeks, so progress is never a mystery.',
  },
  {
    id: 'item-4',
    title: 'Who owns the code and the product?',
    content:
      'You do, from day one. Repositories, cloud accounts, designs, and documentation are set up in your accounts, and full IP ownership is written into our contract.',
  },
  {
    id: 'item-5',
    title: 'Can you work with our existing systems?',
    content:
      'Yes. We regularly integrate with existing platforms, extend software other teams started, and modernize legacy systems step by step without interrupting the business.',
  },
  {
    id: 'item-6',
    title: 'What happens after launch?',
    content:
      'Most clients choose a support plan: monitoring, security updates, bug fixes with response times in writing, helpdesk support for your users, and monthly hours for new features.',
  },
  {
    id: 'item-7',
    title: 'How will we stay updated during the project?',
    content:
      'A named delivery lead is your single point of contact. You get a shared project board, a demo every two weeks, and a short written update each week.',
  },
]
