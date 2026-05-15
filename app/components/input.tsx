'use client'

import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

import {
  Search,
  SearchCheck,
  SearchX,
} from 'lucide-react'

const InputVariants = tv({
  slots: {
    wrapper: `
      relative
      flex items-center gap-3
      rounded-2xl
      border
      backdrop-blur-xl
      transition-all duration-500 ease-out
      overflow-hidden
      group
    `,

    glow: `
      pointer-events-none
      absolute -inset-[1px]
      rounded-2xl
      blur-sm
      opacity-0
      transition-opacity duration-500
    `,

    icon: `
      relative z-10
      shrink-0
      transition-all duration-300
    `,

    input: `
      relative z-10
      w-full min-w-0
      bg-transparent
      outline-none
      border-none

      text-sm md:text-base
      tracking-wide
      text-zinc-100

      placeholder:text-zinc-500
      placeholder:tracking-wide

      [&::-webkit-search-cancel-button]:appearance-none
      [&::-ms-clear]:hidden
    `,
  },

  variants: {
    variant: {
      flex: {
        wrapper: `
          flex-1
          min-w-0
          px-4 py-3

          bg-zinc-900
          border-white/10
          shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]

          hover:border-amber-400/25
          focus-within:border-amber-300/35
          focus-within:shadow-[0_0_30px_rgba(251,191,36,0.10),0_0_18px_rgba(34,211,238,0.06),inset_0_1px_0_rgba(255,255,255,0.05)]
        `,

        glow: `
          bg-gradient-to-r
          from-amber-400/20
          via-cyan-400/10
          to-amber-400/20
          group-hover:opacity-70
          group-focus-within:opacity-100
        `,
      },
      min: {
        wrapper: `
          min-w-36
          px-4 py-3

          bg-zinc-950/90
          border-white/8

          hover:border-amber-400/20
          focus-within:border-amber-300/30
        `,

        glow: `
          bg-gradient-to-r
          from-amber-400/15
          via-cyan-400/8
          to-amber-400/15
          group-hover:opacity-60
          group-focus-within:opacity-100
        `,

        input: `
          text-sm
        `,
      },
    },

    state: {
      idle: {
        icon: 'text-zinc-400',
      },

      success: {
        wrapper: `
          border-emerald-400/20
          shadow-[0_0_24px_rgba(16,185,129,0.08)]
        `,

        icon: `
          text-emerald-400
          drop-shadow-[0_0_6px_rgba(16,185,129,0.5)]
        `,
      },

      error: {
        wrapper: `
          border-red-400/20
          shadow-[0_0_24px_rgba(248,113,113,0.08)]
        `,

        icon: `
          text-red-400
          drop-shadow-[0_0_6px_rgba(248,113,113,0.5)]
        `,
      },
    },
  },

  defaultVariants: {
    variant: 'flex',
    state: 'idle',
  },
})

interface IInput
  extends Omit<ComponentProps<'input'>, 'value' | 'onChange'>,
    VariantProps<typeof InputVariants> {
  value: string
  onChange: (value: string) => void
  hasAnyResult: boolean
  placeholder: string
}

export function Input({
  value,
  onChange,
  hasAnyResult,
  placeholder,
  variant,
  ...props
}: IInput) {
  function HandleChangeInputValue(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    onChange(e.target.value)
  }

  function GetInputState(): 'idle' | 'success' | 'error' {
    if (!value.trim()) {
      return 'idle'
    }

    if (hasAnyResult) {
      return 'success'
    }

    return 'error'
  }

  function RenderIcon() {
    if (!value.trim()) {
      return <Search size={18} />
    }

    if (hasAnyResult) {
      return <SearchCheck size={18} />
    }

    return <SearchX size={18} />
  }

  const state = GetInputState()

  const {
    wrapper,
    glow,
    icon,
    input,
  } = InputVariants({
    variant,
    state,
  })

  return (
    <div className={wrapper()}>
      <div className={glow()} />
      <div className={icon()}>
        {RenderIcon()}
      </div>

      <input
        {...props}
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={HandleChangeInputValue}
        className={input()}
      />
    </div>
  )
}