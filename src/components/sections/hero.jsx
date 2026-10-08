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
import { ArrowRightIcon } from 'lucide-react'

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
              <h1 className="3xl:text-7xl relative mb-0 text-3xl font-medium tracking-[-0.04em] text-balance sm:text-4xl md:text-5xl lg:text-4xl lg:tracking-[-0.06em] xl:text-5xl 2xl:text-6xl">
                Custom software and AI, <br />
                <Accent>built around your business</Accent>
              </h1>
            </HeroColorPanelsHeading>
            <HeroColorPanelsDescription description="Altavel is a software engineering company. We design, build, and support web, mobile, and AI products for growing businesses, with clear milestones and code you own from day one." />
            <HeroColorPanelsActions className="flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  Start a project <ArrowRightIcon data-icon="inline-end" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services">Explore services</Link>
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
