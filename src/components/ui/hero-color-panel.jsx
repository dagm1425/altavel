// Cult UI "Hero Color Panels" (https://www.cult-ui.com/docs/components/hero-color-panels),
// converted from the registry's TSX to JSX. Demo-specific icons and default copy removed.
import * as React from 'react'

import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// The WebGL shader is decorative, so it loads lazily: page content renders first, and the
// shader library stays out of the initial bundle and the prerendered HTML.
const LazyColorPanels = React.lazy(() =>
  import('@paper-design/shaders-react').then((module) => ({ default: module.ColorPanels })),
)

const MemoizedColorPanels = React.memo(function ColorPanelsShader(props) {
  return (
    <React.Suspense fallback={null}>
      <LazyColorPanels {...props} />
    </React.Suspense>
  )
})

const defaultDesktopShaderProps = {
  width: 1280,
  height: 720,
  colors: ['#ed40b3', '#6ef7cc', '#adfa1e', '#b054de'],
  colorBack: '#ffffff00',
  density: 5.03,
  angle1: 0.68,
  angle2: 0.28,
  length: 1.13,
  edges: true,
  blur: 0.25,
  fadeIn: 0.85,
  fadeOut: 0.3,
  gradient: 0.56,
  speed: 4,
  scale: 0.96,
  rotation: 180,
}

const defaultMobileShaderProps = {
  colors: ['#ed40b3', '#6ef7cc', '#adfa1e', '#b054de'],
  colorBack: '#ffffff00',
  density: 5.03,
  angle1: 0.68,
  angle2: 0.28,
  length: 1.13,
  edges: true,
  blur: 0.25,
  fadeIn: 0.85,
  fadeOut: 0.3,
  gradient: 0.56,
  speed: 4,
  scale: 0.96,
  rotation: 180,
  style: { height: '100%', width: '100%' },
}

const defaultCtaProps = {
  label: 'Get started',
  href: '#',
}

const HeroColorPanelsContext = React.createContext(undefined)

function useHeroColorPanelsContext() {
  const context = React.useContext(HeroColorPanelsContext)
  if (!context) {
    throw new Error('HeroColorPanels components must be used within HeroColorPanelsRoot')
  }
  return context
}

export const HeroColorPanelsRoot = React.forwardRef(
  (
    {
      className,
      children,
      srTitle = '',
      title,
      subtitle,
      description,
      showCta = true,
      ctaProps,
      renderCta,
      showBadges = true,
      techStack = [],
      renderBadge,
      desktopShaderProps,
      mobileShaderProps,
      ...props
    },
    ref,
  ) => {
    const mergedCtaProps = React.useMemo(() => ({ ...defaultCtaProps, ...ctaProps }), [ctaProps])

    const mergedDesktopShaderProps = React.useMemo(
      () => ({ ...defaultDesktopShaderProps, ...desktopShaderProps }),
      [desktopShaderProps],
    )

    const mergedMobileShaderProps = React.useMemo(
      () => ({
        ...defaultMobileShaderProps,
        ...mobileShaderProps,
        style: { ...defaultMobileShaderProps.style, ...mobileShaderProps?.style },
      }),
      [mobileShaderProps],
    )

    const contextValue = React.useMemo(
      () => ({
        srTitle,
        title,
        subtitle,
        description,
        showCta,
        mergedCtaProps,
        renderCta,
        showBadges,
        techStack,
        renderBadge,
        mergedDesktopShaderProps,
        mergedMobileShaderProps,
      }),
      [
        srTitle,
        title,
        subtitle,
        description,
        showCta,
        mergedCtaProps,
        renderCta,
        showBadges,
        techStack,
        renderBadge,
        mergedDesktopShaderProps,
        mergedMobileShaderProps,
      ],
    )

    return (
      <HeroColorPanelsContext.Provider value={contextValue}>
        <section
          className={cn('relative h-full w-full overflow-hidden', className)}
          data-slot="hero-colorpanels-root"
          ref={ref}
          {...props}
        >
          {srTitle && <h1 className="sr-only">{srTitle}</h1>}
          {children}
        </section>
      </HeroColorPanelsContext.Provider>
    )
  },
)
HeroColorPanelsRoot.displayName = 'HeroColorPanelsRoot'

export function HeroColorPanelsContainer({ className, ...props }) {
  return (
    <div
      className={cn(
        'relative z-10 container grid gap-6 pb-16 sm:gap-8 sm:pb-20 lg:grid-cols-[1fr_minmax(300px,500px)] lg:items-center lg:gap-12 lg:pb-24 xl:grid-cols-[1fr_1fr]',
        className,
      )}
      data-slot="hero-colorpanels-container"
      {...props}
    />
  )
}

export function HeroColorPanelsContent({ className, ...props }) {
  return (
    <div
      className={cn(
        'flex flex-col justify-center gap-4 text-balance sm:gap-5 sm:px-4 md:px-8 lg:gap-6 lg:pr-0 lg:pl-4 xl:pl-8 2xl:pl-0',
        className,
      )}
      data-slot="hero-colorpanels-content"
      {...props}
    />
  )
}

export function HeroColorPanelsHeading({
  className,
  title,
  subtitle,
  headingClassName,
  children,
  ...props
}) {
  const context = useHeroColorPanelsContext()
  const resolvedTitle = title ?? context.title
  const resolvedSubtitle = subtitle ?? context.subtitle

  return (
    <div
      className={cn('pt-4 text-center sm:pt-6 lg:pt-0 lg:text-left', className)}
      data-slot="hero-colorpanels-heading-wrap"
      {...props}
    >
      {children ?? (
        <div className="relative">
          <h2
            className={cn(
              'relative mb-0 text-3xl font-medium tracking-[-0.04em] text-balance sm:text-4xl md:text-5xl lg:tracking-[-0.06em] xl:text-6xl 2xl:text-7xl',
              headingClassName,
            )}
            data-slot="hero-colorpanels-heading"
          >
            {resolvedTitle} <br />
            {resolvedSubtitle}
          </h2>
        </div>
      )}
    </div>
  )
}

export function HeroColorPanelsDescription({
  className,
  description,
  descriptionClassName,
  children,
  ...props
}) {
  const context = useHeroColorPanelsContext()
  const resolvedDescription = description ?? context.description

  return (
    <div
      className={cn(
        'mx-auto max-w-xl pb-2 text-center sm:pb-4 lg:mx-0 lg:max-w-none lg:pb-0 lg:text-left',
        className,
      )}
      data-slot="hero-colorpanels-description-wrap"
      {...props}
    >
      {children ?? (
        <p
          className={cn(
            'text-foreground/70 md:text-foreground/80 mt-0 mb-0 font-sans text-sm sm:text-base lg:text-lg xl:text-xl',
            descriptionClassName,
          )}
          data-slot="hero-colorpanels-description"
        >
          {resolvedDescription}
        </p>
      )}
    </div>
  )
}

export function HeroColorPanelsActions({
  className,
  showCta,
  ctaProps,
  renderCta,
  children,
  ...props
}) {
  const context = useHeroColorPanelsContext()
  const shouldShowCta = showCta ?? context.showCta
  const resolvedCtaProps = { ...context.mergedCtaProps, ...ctaProps }
  const resolvedRenderCta = renderCta ?? context.renderCta

  if (!shouldShowCta) {
    return null
  }

  const defaultCta = <HeroColorPanelsCTA {...resolvedCtaProps} />

  return (
    <div
      className={cn('flex justify-center lg:justify-start', className)}
      data-slot="hero-colorpanels-cta-wrap"
      {...props}
    >
      {children ?? (resolvedRenderCta ? resolvedRenderCta(defaultCta) : defaultCta)}
    </div>
  )
}

export function HeroColorPanelsCTA({
  label,
  href,
  target,
  rel,
  onClick,
  className,
  buttonClassName,
}) {
  return (
    <div
      className={cn('flex items-center justify-center gap-4 pb-4 md:pb-0', className)}
      data-slot="hero-colorpanels-cta"
    >
      <Button asChild className={cn(buttonClassName)} size="lg">
        <a href={href} onClick={onClick} rel={rel} target={target}>
          {label}
        </a>
      </Button>
    </div>
  )
}

export function HeroColorPanelsBadges({ className, showBadges, techStack, renderBadge, ...props }) {
  const context = useHeroColorPanelsContext()
  const shouldShowBadges = showBadges ?? context.showBadges
  const resolvedTechStack = techStack ?? context.techStack
  const resolvedRenderBadge = renderBadge ?? context.renderBadge

  if (!shouldShowBadges) {
    return null
  }

  return (
    <div
      className={cn('flex flex-wrap items-center justify-center gap-2.5', className)}
      data-slot="hero-colorpanels-badges"
      {...props}
    >
      {resolvedTechStack.map((tech, index) => {
        const Icon = tech.icon
        const defaultBadge = (
          <Badge
            className={cn(
              'group relative px-3.5 py-1.5 font-medium transition-all duration-150',
              'border-border/50 bg-card text-card-foreground border',
              'shadow-[0_1px_3px_rgba(0,0,0,0.08)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.3)]',
              'hover:-translate-y-px hover:shadow-[0_2px_8px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_2px_8px_rgba(0,0,0,0.4)]',
            )}
            data-slot="hero-colorpanels-badge"
            key={tech.name}
            variant="outline"
          >
            {Icon ? <Icon className="mr-1 size-3.5 opacity-80" /> : null}
            <span className="font-semibold tracking-tight">{tech.name}</span>
            {tech.version ? (
              <span className="font-mono text-xs opacity-50">{tech.version}</span>
            ) : null}
          </Badge>
        )

        if (resolvedRenderBadge) {
          return (
            <React.Fragment key={tech.name}>
              {resolvedRenderBadge(tech, index, defaultBadge)}
            </React.Fragment>
          )
        }

        return defaultBadge
      })}
    </div>
  )
}

export function HeroColorPanelsVisual({
  className,
  desktopClassName,
  desktopShaderProps,
  ...props
}) {
  const context = useHeroColorPanelsContext()
  const resolvedDesktopShaderProps = {
    ...context.mergedDesktopShaderProps,
    ...desktopShaderProps,
  }

  return (
    <div
      className={cn('relative hidden h-[350px] lg:block lg:h-[400px] xl:h-[500px]', className)}
      data-slot="hero-colorpanels-visual"
      {...props}
    >
      <div
        className={cn(
          'absolute inset-0 flex items-center justify-center overflow-hidden rounded-full',
          desktopClassName,
        )}
        data-slot="hero-colorpanels-desktop"
      >
        <MemoizedColorPanels {...resolvedDesktopShaderProps} />
      </div>
    </div>
  )
}

export function HeroColorPanelsMobileVisual({ className, mobileShaderProps, ...props }) {
  const context = useHeroColorPanelsContext()
  const resolvedMobileShaderProps = {
    ...context.mergedMobileShaderProps,
    ...mobileShaderProps,
    style: { ...context.mergedMobileShaderProps.style, ...mobileShaderProps?.style },
  }

  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-x-0 -bottom-20 -z-10 h-[380px] overflow-hidden lg:hidden',
        className,
      )}
      data-slot="hero-colorpanels-mobile"
      {...props}
    >
      <div className="from-background via-background/90 absolute inset-x-0 top-0 z-10 h-44 bg-gradient-to-b to-transparent" />
      <MemoizedColorPanels {...resolvedMobileShaderProps} />
    </div>
  )
}
