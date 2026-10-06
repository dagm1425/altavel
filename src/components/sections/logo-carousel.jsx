import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ClientLogo, clients } from '@/components/sections/client-logos'

// Adapted from Efferd's logo-cloud-3 block (infinite scrolling logos).
export function LogoCarousel() {
  return (
    <section className="flex flex-col gap-6 py-12 md:py-16">
      <p className="text-muted-foreground px-4 text-center font-mono text-xs tracking-widest uppercase">
        Trusted by engineering teams at
      </p>
      <div className="overflow-hidden mask-[linear-gradient(to_right,transparent,black,transparent)] py-4">
        <InfiniteSlider gap={64} reverse speed={60} speedOnHover={20}>
          {clients.map((client) => (
            <ClientLogo client={client} key={client.name} />
          ))}
        </InfiniteSlider>
      </div>
    </section>
  )
}
