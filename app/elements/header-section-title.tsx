'use client'

import { tv, VariantProps } from 'tailwind-variants'

import { useBreakpoint } from '../hook/use-media-query'

const headerVariants = tv({
  slots: {
    prefix: [
      'text-xs tracking-[0.3em] uppercase',
      'text-amber-400/80',
      'font-medium'
    ],

    title: [
      'text-4xl md:text-5xl',
      'uppercase leading-tight',
      'text-amber-300'
    ],

    highlight: [
      'text-zinc-100',
      'font-bold',
      'block'
    ],

    description: [
      'text-zinc-400',
      'leading-relaxed'
    ]
  },

  variants: {
    align: {
      left: 'items-start text-left',
      center: 'items-center text-center',
      mixed: 'items-center text-justify'
    }
  },

  defaultVariants: {
    align: 'left'
  }
})

interface IHeaderSectionTitle
  extends VariantProps<typeof headerVariants> {
  title: string
  highlight?: string
  description: string
  prefix?: string
}

export function HeaderSectionTitle({
  title,
  highlight,
  description,
  prefix,
  align
}: IHeaderSectionTitle) {
  const styles = headerVariants({ align })

  // BREAKPOINTS INDIVIDUAIS

  const isMobileXS = useBreakpoint('mobileXS')
  const isMobileSM = useBreakpoint('mobileSM')
  const isMobileMD = useBreakpoint('mobileMD')
  const isMobileLG = useBreakpoint('mobileLG')
  const isMobileXL = useBreakpoint('mobileXL')

  const isTabletSM = useBreakpoint('tabletSM')
  const isTabletMD = useBreakpoint('tabletMD')

  const isDesktopSM = useBreakpoint('desktopSM')
  const isDesktopMD = useBreakpoint('desktopMD')
  const isDesktopLG = useBreakpoint('desktopLG')
  const isDesktopXL = useBreakpoint('desktopXL')
  const isDesktop2XL = useBreakpoint('desktop2XL')

  // GRUPOS DE BREAKPOINTS

  const mobileRangeFull =
    isMobileXS ||
    isMobileSM ||
    isMobileMD ||
    isMobileLG ||
    isMobileXL

  const tabletRangeFull =
    isTabletSM ||
    isTabletMD

  const desktopRangeFull =
    isDesktopSM ||
    isDesktopMD ||
    isDesktopLG ||
    isDesktopXL ||
    isDesktop2XL

  return (
    <div
      className={`flex flex-col gap-4 justify-center
        ${align === 'center' ? 'items-center text-center' : ''}`}
    >

      {prefix && (
        <span
          className={`${styles.prefix()}`}
        >
          {prefix}
        </span>
      )}

      <h2
        className={`
          ${styles.title()}

          
        `}
      >
        {title}

        {highlight && (
          <span className={styles.highlight()}>
            {highlight}
          </span>
        )}
      </h2>

      <p
        className={`
          ${styles.description()}
          ${align === 'center' ? 'text-center' : 'text-justify'}
          ${
            mobileRangeFull
              ? 'max-w-full text-sm w-full'
              : tabletRangeFull
                ? 'max-w-[88%] text-sm'
                : align === 'center'
                  ? 'max-w-[786px] text-base'
                  : 'max-w-[33%] text-base'
          }
        `}
      >
        {description}
      </p>
    </div>
  )
}