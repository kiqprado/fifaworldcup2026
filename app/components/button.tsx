import { tv, VariantProps } from 'tailwind-variants'
import { ReactNode, ComponentProps } from 'react'
import Link from 'next/link'

const ButtonVariants = tv({
  base: [
    'inline-flex items-center justify-center',
    'px-10 py-3',
    'font-medium tracking-wide',
    'rounded-xl',
    'transition-all duration-300 ease-in-out',
    'will-change-transform',
    'hover:scale-[1.03]',
    'active:scale-[0.98]'
  ],
  variants: {
    variant: {
      absolute: 'absolute left-1/2 -translate-x-1/2',
      default: ''
    },
    size: {
      sm: 'w-52',
      md: 'w-86',
      lg: 'w-106',
      xl: 'w-[66%]'
    },
    color: {
      gold: [
        'text-black',
        'bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400',
        'border border-yellow-300/20',
        'shadow-[0_0_15px_rgba(255,215,0,0.5)]',
        'hover:shadow-[0_0_25px_rgba(255,215,0,0.8)]',
      ],
      purple: [
        'text-purple-200',
        'bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500',
        'border border-purple-300/20',
        'shadow-[0_0_15px_rgba(168,85,247,0.5)]',
        'hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]',
      ],
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'sm',
    color: 'gold'
  }
})

interface IButton
extends ComponentProps<typeof Link>,
VariantProps<typeof ButtonVariants> {
  children: ReactNode
}

export function Button({ children, variant, color, size,  ...props }: IButton) {
  return (
    <Link
      {...props}
      className={ButtonVariants({ variant, size, color })}
    >
      {children}
    </Link>
  )
}