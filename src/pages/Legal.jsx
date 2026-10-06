import { Band } from '@/components/band'
import { Seo } from '@/components/seo'
import { PageHero } from '@/components/sections/page-hero'

// Placeholder legal pages: replace every section with text reviewed by legal counsel.
const pages = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
      'Information we collect',
      'How we use your information',
      'How we share information',
      'Data retention',
      'Your rights',
      'Contact us',
    ],
  },
  terms: {
    title: 'Terms of Service',
    sections: [
      'Acceptance of terms',
      'Our services',
      'Intellectual property',
      'Confidentiality',
      'Limitation of liability',
      'Governing law',
      'Contact us',
    ],
  },
}

function Legal({ page }) {
  const { title, sections } = pages[page]

  return (
    <>
      <Seo path={`/${page}`} />
      <Band tone="dark">
        <PageHero eyebrow="Legal" title={title} description="Last updated: placeholder date" />
      </Band>
      <Band>
        <article className="mx-auto flex max-w-3xl flex-col gap-10 px-4 py-16 md:py-24">
          <p className="bg-muted text-muted-foreground rounded-md border border-dashed p-4 text-sm">
            This page is a placeholder. Replace each section below with Altavel&apos;s actual{' '}
            {title.toLowerCase()} before publishing.
          </p>
          {sections.map((section, index) => (
            <section className="flex flex-col gap-3" key={section}>
              <h2 className="text-xl font-medium">
                {index + 1}. {section}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Placeholder text for the &ldquo;{section.toLowerCase()}&rdquo; section.
              </p>
            </section>
          ))}
        </article>
      </Band>
    </>
  )
}

export default Legal
