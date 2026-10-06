import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'
import { DecorIcon } from '@/components/decor-icon'
import { ClientLogo, clients } from '@/components/sections/client-logos'

// Adapted from Efferd's logo-cloud-2 block, with logos that flip to the next company in turn.

const FLIP_INTERVAL_MS = 3500

// Cell styling from the original block: alternating shading and corner decorations.
const cells = [
  {
    className: 'relative border-r border-b bg-secondary dark:bg-secondary/30',
    decor: [{ position: 'bottom-right' }],
  },
  { className: 'border-b md:border-r' },
  {
    className: 'relative border-r border-b md:bg-secondary dark:md:bg-secondary/30',
    decor: [
      { position: 'bottom-right' },
      { position: 'bottom-left', className: 'hidden md:block' },
    ],
  },
  {
    className:
      'relative border-b bg-secondary md:bg-background dark:bg-secondary/30 md:dark:bg-background',
  },
  {
    className:
      'relative border-r border-b bg-secondary md:border-b-0 md:bg-background dark:bg-secondary/30 md:dark:bg-background',
    decor: [{ position: 'bottom-right', className: 'md:hidden' }],
  },
  {
    className:
      'border-b bg-background md:border-r md:border-b-0 md:bg-secondary dark:md:bg-secondary/30',
  },
  { className: 'border-r' },
  { className: 'bg-secondary dark:bg-secondary/30' },
]

export function LogoGrid() {
  const [tick, setTick] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return
    const id = setInterval(() => setTick((t) => t + 1), FLIP_INTERVAL_MS)
    return () => clearInterval(id)
  }, [reduceMotion])

  return (
    <div className="grid grid-cols-2 border md:grid-cols-4">
      {cells.map((cell, index) => {
        // Each tick shifts every cell by a full grid's worth, so no logo repeats on screen.
        const client = clients[(index + tick * cells.length) % clients.length]

        return (
          <div
            className={cn(
              'bg-background flex min-h-24 items-center justify-center px-4 py-8 perspective-midrange md:min-h-28 md:p-8',
              cell.className,
            )}
            key={index}
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                animate={{
                  rotateX: 0,
                  opacity: 1,
                  transition: { duration: 0.35, ease: 'easeOut' },
                }}
                exit={{
                  rotateX: 90,
                  opacity: 0,
                  transition: { duration: 0.3, ease: 'easeIn', delay: index * 0.08 },
                }}
                initial={{ rotateX: -90, opacity: 0 }}
                key={client.name}
              >
                <ClientLogo
                  className="text-center text-base text-balance whitespace-normal md:text-lg"
                  client={client}
                />
              </motion.div>
            </AnimatePresence>
            {cell.decor?.map((decor) => (
              <DecorIcon
                className={cn('z-10', decor.className)}
                key={decor.position}
                position={decor.position}
              />
            ))}
          </div>
        )
      })}
    </div>
  )
}
