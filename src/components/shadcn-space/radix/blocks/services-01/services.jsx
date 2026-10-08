import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/sections/section-heading'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  History,
  LifeBuoy,
  MonitorSmartphone,
  PenTool,
  ShieldCheck,
} from 'lucide-react'

// The seven practices. Each card links to its section on the Services page.
const serviceData = [
  {
    id: 'custom-software',
    service_icon: Code2,
    service_title: 'Custom Software',
    service_description:
      'Platforms, internal tools, and integrations designed around how your business actually works.',
    service_bg_color: 'bg-ink',
    service_text_color: 'text-white',
  },
  {
    id: 'web-mobile',
    service_icon: MonitorSmartphone,
    service_title: 'Web & Mobile Apps',
    service_description:
      'Fast web apps and native or cross-platform iOS and Android apps your users enjoy.',
    service_bg_color: 'bg-stone',
    service_text_color: 'text-ink',
  },
  {
    id: 'ui-ux-design',
    service_icon: PenTool,
    service_title: 'UI/UX Design',
    service_description:
      'Research, prototypes, and design systems that make complex products feel simple.',
    service_bg_color: 'bg-stone',
    service_text_color: 'text-ink',
  },
  {
    id: 'ai-data',
    service_icon: BrainCircuit,
    service_title: 'AI & Data',
    service_description:
      'LLM features, AI agents, data pipelines, and analytics built for production.',
    service_bg_color: 'bg-stone',
    service_text_color: 'text-ink',
  },
  {
    id: 'legacy-modernization',
    service_icon: History,
    service_title: 'Legacy Modernization',
    service_description:
      'Move aging systems to a modern stack in safe, staged steps, without stopping the business.',
    service_bg_color: 'bg-stone',
    service_text_color: 'text-ink',
  },
  {
    id: 'it-consulting',
    service_icon: ShieldCheck,
    service_title: 'IT Audit & Consulting',
    service_description:
      'Independent reviews of your infrastructure, security, and code, with a clear roadmap.',
    service_bg_color: 'bg-stone',
    service_text_color: 'text-ink',
  },
  {
    id: 'maintenance-support',
    service_icon: LifeBuoy,
    service_title: 'Maintenance & Support',
    service_description:
      'Monitoring, fixes, cloud and DevOps, and helpdesk support for your users after launch.',
    service_bg_color: 'bg-stone',
    service_text_color: 'text-ink',
  },
]

const Services = () => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: (index % 4) * 0.12,
        duration: 0.6,
        ease: 'easeInOut',
      },
    }),
  }

  return (
    <section className="bg-background px-4 py-16 md:py-24" id="services">
      <div className="flex w-full flex-col items-center justify-center gap-10 sm:gap-16">
        <SectionHeading
          eyebrow="Services"
          title="From first idea to production, and beyond"
          description="Start with a single build, audit, or redesign. Most clients keep us on to support and grow what we ship together."
        />
        {/* 7 practices + a "where to start" card = an even 4x2 grid (2 columns on tablets). */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceData.map((service, index) => (
            <motion.div
              key={service.service_title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="h-full"
            >
              <Link className="group block h-full" to={`/services#${service.id}`}>
                <Card
                  className={cn(
                    'h-full p-8 ring-0 transition-transform duration-300 group-hover:-translate-y-1',
                    service.service_bg_color,
                  )}
                >
                  <CardContent className="flex h-full flex-col items-start justify-start gap-10 p-0">
                    <service.service_icon size={32} className={cn(service.service_text_color)} />
                    <div className="flex flex-col gap-2">
                      <p
                        className={cn(
                          'text-2xl font-medium lg:text-xl xl:text-2xl',
                          service.service_text_color,
                        )}
                      >
                        {service.service_title}
                      </p>
                      <p
                        className={cn(
                          'text-sm leading-relaxed opacity-75',
                          service.service_text_color,
                        )}
                      >
                        {service.service_description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={serviceData.length}
            className="h-full"
          >
            <Card className="bg-lime h-full p-8 ring-0">
              <CardContent className="flex h-full flex-col items-start justify-between gap-10 p-0">
                <p className="text-ink text-2xl font-medium lg:text-xl xl:text-2xl">
                  Not sure where to start?
                </p>
                <div className="flex flex-col items-start gap-4">
                  <p className="text-ink/75 text-sm leading-relaxed">
                    Tell us the problem. We will suggest the right first step on a free discovery
                    call.
                  </p>
                  <Button asChild className="bg-ink hover:bg-ink/85 text-white">
                    <Link to="/contact">
                      Book a call <ArrowUpRight data-icon="inline-end" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
