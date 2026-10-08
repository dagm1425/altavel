import { Band } from '@/components/band'
import { Seo } from '@/components/seo'
import { PageHero } from '@/components/sections/page-hero'
import { Accent } from '@/components/sections/section-heading'
import { ContactSection } from '@/components/sections/contact'
import { FaqsSection } from '@/components/sections/faqs'

function Contact() {
  return (
    <>
      <Seo path="/contact" />
      <Band tone="dark">
        <PageHero
          eyebrow="Contact"
          title={
            <>
              Let&apos;s talk about <Accent>your project</Accent>
            </>
          }
          description="Tell us what you want to build, fix, or modernize. We will suggest the right first step and give you a clear estimate, with no obligation."
        />
      </Band>
      <Band>
        <ContactSection />
      </Band>
      <Band tone="stone">
        <FaqsSection />
      </Band>
    </>
  )
}

export default Contact
