import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { Accent } from '@/components/sections/section-heading'
import {
  HeroColorPanelsActions,
  HeroColorPanelsContainer,
  HeroColorPanelsContent,
  HeroColorPanelsDescription,
  HeroColorPanelsHeading,
  HeroColorPanelsMobileVisual,
  HeroColorPanelsRoot,
  HeroColorPanelsVisual,
} from '@/components/ui/hero-color-panel'
import { ArrowRightIcon, PhoneCallIcon } from 'lucide-react'

// Shader tuned to the Cartier-inspired palette: lime, khaki, stone, olive.
const shaderColors = { colors: ['#d0ff71', '#bfbda8', '#d8d7cb', '#8fae2c'] }

export function HeroSection() {
  return (
    <div className="dark band">
      <HeroColorPanelsRoot
        className="isolate"
        desktopShaderProps={shaderColors}
        mobileShaderProps={shaderColors}
      >
        <HeroColorPanelsContainer className="mx-auto px-4 pt-10 sm:pt-14 lg:pt-16">
          <HeroColorPanelsContent className="md:px-4 lg:pl-0 xl:pl-0">
            {/* Same styling as the component's default heading, but as the page's h1. */}
            <HeroColorPanelsHeading>
              <h1 className="3xl:text-8xl relative mb-0 text-3xl font-medium tracking-[-0.04em] text-balance sm:text-4xl md:text-5xl lg:tracking-[-0.06em] xl:text-6xl 2xl:text-7xl">
                Senior engineering teams, <br />
                <Accent>ready when you are</Accent>
              </h1>
            </HeroColorPanelsHeading>
            <HeroColorPanelsDescription description="Altavel builds and embeds dedicated software and customer support teams for startups, product companies, and enterprises. Vetted engineers, transparent delivery, and teams onboarded in weeks, not months." />
            <HeroColorPanelsActions className="flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  <PhoneCallIcon data-icon="inline-start" /> Book a call
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services">
                  Explore services <ArrowRightIcon data-icon="inline-end" />
                </Link>
              </Button>
            </HeroColorPanelsActions>
          </HeroColorPanelsContent>
          <HeroColorPanelsVisual className="3xl:h-[680px] 2xl:h-[560px]" />
        </HeroColorPanelsContainer>
        <HeroColorPanelsMobileVisual />
      </HeroColorPanelsRoot>
    </div>
  )
}
