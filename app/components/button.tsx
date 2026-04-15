import { tv, VariantProps} from 'tailwind-variants'
import { ReactNode, ComponentProps } from 'react'

import Link from 'next/link'

const ButtonVariants = tv({
  base: [
    'px-12 py-2',
    'hover:brightness-150',
    'transition-all duration-300 ease-in-out'
  ],
  variants: {
    variant: {
      absolute: 'absolute left-1/2 bottom-6'
    }
  },
  defaultVariants: {
    variant: 'absolute'
  }
})

interface IButton extends ComponentProps<typeof Link>,
VariantProps<typeof ButtonVariants> {
  children: ReactNode
}

export function Button({ children, variant, ...props}: IButton) {
  return(
    <Link
      {...props}
      className={ButtonVariants({variant})}
    >
      {children}
    </Link>
  )
}