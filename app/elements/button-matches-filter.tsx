'use client'

import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const ButtonFilterElementVariants = tv({
  base: `
    group relative h-12 rounded-xl
    px-4
    text-sm md:text-base font-semibold tracking-wide
    transition-all duration-500 ease-out
    overflow-hidden
  `,

  variants: {
    active: {
      true: '',
      false: `
        text-zinc-400
        hover:text-zinc-100
        hover:bg-white/5
      `,
    },

    accent: {
      amber: '',
      cyan: '',
      purple: '',
    },
  },

  compoundVariants: [
    {
      active: true,
      accent: 'amber',
      className: `
        text-amber-200
        bg-gradient-to-r
        from-amber-400/18
        via-yellow-300/12
        to-amber-500/18
        border border-amber-300/30
        shadow-[0_0_25px_rgba(251,191,36,0.18),inset_0_0_20px_rgba(251,191,36,0.06)]
      `,
    },
    {
      active: true,
      accent: 'cyan',
      className: `
        text-amber-100
        bg-gradient-to-r
        from-amber-400/20
        via-cyan-400/10
        to-amber-500/20
        border border-amber-300/35
        shadow-[0_0_30px_rgba(251,191,36,0.22),0_0_18px_rgba(34,211,238,0.10),inset_0_0_25px_rgba(251,191,36,0.07)]
      `,
    },
    {
      active: true,
      accent: 'purple',
      className: `
        text-amber-200
        bg-gradient-to-r
        from-amber-400/18
        via-purple-400/10
        to-amber-500/18
        border border-amber-300/30
        shadow-[0_0_25px_rgba(251,191,36,0.18),inset_0_0_20px_rgba(251,191,36,0.06)]
      `,
    },
  ],

  defaultVariants: {
    active: false,
    accent: 'amber',
  },
})

interface IButtonFilterElement
  extends ComponentProps<'button'>,
    VariantProps<typeof ButtonFilterElementVariants> {
  title: string
  icon?: ReactNode
  showPulse?: boolean
}

export function ButtonFilterElement({
  title,
  icon,
  active,
  accent,
  showPulse = false,
  className,
  ...props
}: IButtonFilterElement) {
  return (
    <button
      {...props}
      className={ButtonFilterElementVariants({
        active,
        accent,
        className,
      })}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {icon && (
          <span className="flex items-center justify-center shrink-0">
            {icon}
          </span>
        )}

        <span>{title}</span>

        {showPulse && active && (
          <span
            className="
              inline-block h-2.5 w-2.5 rounded-full
              bg-cyan-300
              shadow-[0_0_10px_rgba(34,211,238,0.9)]
              animate-pulse
            "
          />
        )}
      </span>

      {active && (
        <div
          className="
            absolute bottom-1 left-1/2 -translate-x-1/2
            h-[3px] w-20 rounded-full
            bg-gradient-to-r
            from-transparent
            via-amber-300
            to-transparent
            shadow-[0_0_14px_rgba(251,191,36,0.9)]
          "
        />
      )}
    </button>
  )
}