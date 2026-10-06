import { Band } from '@/components/band'
import { Seo } from '@/components/seo'
import { HeroSection } from '@/components/sections/hero'
import { LogoCarousel } from '@/components/sections/logo-carousel'
import Services from '@/components/shadcn-space/radix/blocks/services-01/services'
import { WhyAltavelSection } from '@/components/sections/why-altavel'
import AboutAndStats from '@/components/shadcn-space/radix/blocks/about-us-01'
import { EngagementModelsSection } from '@/components/sections/engagement-models'
import { AudienceSection } from '@/components/sections/audience'
import { ProcessSection } from '@/components/sections/process'
import { ExpertiseSection } from '@/components/sections/expertise'
import { FaqsSection } from '@/components/sections/faqs'
import { CallToAction } from '@/components/sections/cta'

function Home() {
  return (
    <>
      <Seo path="/" />
      <HeroSection />
      <Band tone="dark">
        <LogoCarousel />
      </Band>
      <Band>
        <Services />
      </Band>
      <Band tone="stone">
        <WhyAltavelSection />
      </Band>
      <Band>
        <AboutAndStats />
      </Band>
      <Band tone="dark">
        <EngagementModelsSection />
      </Band>
      <Band>
        <AudienceSection />
      </Band>
      <Band tone="stone">
        <ProcessSection />
      </Band>
      <Band>
        <ExpertiseSection />
      </Band>
      <Band tone="stone">
        <FaqsSection />
      </Band>
      <Band tone="dark">
        <CallToAction />
      </Band>
    </>
  )
}

export default Home
