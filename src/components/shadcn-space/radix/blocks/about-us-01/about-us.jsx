import { cn } from '@/lib/utils'
import { useEffect, useRef } from 'react'
import { motion, useSpring, useTransform, useInView } from 'motion/react'

const AnimatedCounter = ({ value, isInView }) => {
  const springValue = useSpring(0, {
    bounce: 0,
    duration: 2000,
  })

  const displayValue = useTransform(springValue, (current) => Math.round(current))

  useEffect(() => {
    if (isInView) {
      springValue.set(value)
    }
  }, [isInView, value, springValue])

  return <motion.span>{displayValue}</motion.span>
}

const AboutUs = ({ aboutusData, statisticsCounter }) => {
  const statsRef = useRef(null)
  const isInView = useInView(statsRef, { once: true, margin: '-100px' })

  return (
    <section className="px-4 py-16 md:py-24" id="about">
      <div className="flex flex-col items-center justify-center gap-8 md:gap-16">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="flex flex-col items-center justify-center gap-6"
        >
          <h2 className="text-foreground max-w-3xl text-center text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
            An engineering partner, not a vendor. Every engagement is built on
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4">
            {aboutusData.map((item) => (
              <div
                key={item.title}
                className={cn('flex items-center gap-3 rounded-full px-6 py-2', item.color)}
              >
                <item.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                <span className="font-serif text-3xl font-normal italic sm:text-4xl">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
        <div ref={statsRef} className="grid w-full grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-0">
          {statisticsCounter?.map((value, index) => {
            return (
              <div
                key={value.title}
                className="relative flex flex-col items-center justify-center gap-3 px-6 py-5 sm:py-10"
              >
                {index !== 0 && (
                  <div className="bg-border absolute top-1/2 left-0 hidden h-32 w-px -translate-y-1/2 sm:block" />
                )}
                <div className="flex items-start text-6xl font-medium tracking-tight sm:text-7xl lg:text-8xl">
                  <AnimatedCounter value={value.count} isInView={isInView} />
                  <span className="text-highlight">{value.suffix}</span>
                </div>
                <p className="text-muted-foreground text-center text-base font-normal">
                  {value.title}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AboutUs
