import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/sections/section-heading'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { ArrowUpRight, BrainCircuit, Cloud, Code2, Headset, UserPlus, Users } from 'lucide-react'

const serviceData = [
  {
    service_icon: Users,
    service_title: 'Dedicated Teams',
    service_description:
      'A cross-functional squad that works only on your product: engineers, QA, and a delivery lead, all managed by us.',
    service_bg_color: 'bg-ink',
    service_text_color: 'text-white',
  },
  {
    service_icon: UserPlus,
    service_title: 'Staff Augmentation',
    service_description:
      'Add vetted senior engineers to your in-house team. They join your standups, your tools, and your roadmap.',
    service_bg_color: 'bg-stone',
    service_text_color: 'text-ink',
  },
  {
    service_icon: Code2,
    service_title: 'Custom Software',
    service_description:
      'End-to-end delivery of web and mobile products, from discovery and architecture through launch and support.',
    service_bg_color: 'bg-stone',
    service_text_color: 'text-ink',
  },
  {
    service_icon: BrainCircuit,
    service_title: 'AI & Data',
    service_description:
      'LLM-powered features, data pipelines, and analytics built on production-grade engineering foundations.',
    service_bg_color: 'bg-stone',
    service_text_color: 'text-ink',
  },
  {
    service_icon: Cloud,
    service_title: 'Cloud & DevOps',
    service_description:
      'Cloud migrations, CI/CD pipelines, infrastructure as code, and monitoring that keeps every release boring.',
    service_bg_color: 'bg-stone',
    service_text_color: 'text-ink',
  },
  {
    service_icon: Headset,
    service_title: 'Customer Support',
    service_description:
      'Trained, fluent support agents who answer your customers over chat, email, and phone, in your helpdesk and your voice.',
    service_bg_color: 'bg-lime',
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
        delay: (index % 3) * 0.15,
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
          title="Everything you need to build, scale, and support your product"
          description="Pick a single specialist or a full team. Everyone we place is experienced, vetted, and ready to contribute from week one."
        />
        <div className="flex w-full flex-col items-center justify-center gap-8 sm:gap-12">
          {/* services */}
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                <Card className={cn('h-full p-8 ring-0', service.service_bg_color)}>
                  <CardContent className="flex h-full flex-col items-start justify-between gap-10 p-0">
                    <service.service_icon size={32} className={cn(service.service_text_color)} />
                    <div className="flex flex-col gap-2">
                      <p className={cn('text-2xl font-medium', service.service_text_color)}>
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
              </motion.div>
            ))}
          </div>
          {/* cta */}
          <div className="dark bg-background text-foreground flex w-full flex-col items-center justify-between gap-8 rounded-2xl border p-8 lg:flex-row">
            <div className="text-center lg:text-start">
              <p className="text-2xl font-medium">Not sure which model fits?</p>
              <p className="text-muted-foreground text-2xl font-medium">
                Get a free team-composition plan in 48 hours.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 md:flex-row">
              <Button asChild size="lg">
                <Link to="/contact">
                  Book a call <ArrowUpRight data-icon="inline-end" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/how-we-work">Compare models</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
