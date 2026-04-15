import Link from 'next/link'
import { ComponentProps, ElementType } from 'react'
import { LucideProps } from 'lucide-react'

interface ICardButton extends ComponentProps<typeof Link> {
  icon: ElementType<LucideProps>
  iconProps?: LucideProps
  title: string
  about: string
}

export function CardButton({
  icon: Icon, title, about, iconProps, ...props
}: ICardButton) {
  return(
    <Link
      {...props}
      className='px-6 py-3 rounded-xl
        border border-zinc-500 bg-zinc-800
        hover:border-amber-300 transition-all duration-300 ease-in-out'
    >
      <Icon
        size={50}
        strokeWidth={1.5}
        color="currentColor"
        {...iconProps}
      />
      <h3
        className='text-3xl font-bold tracking-widest'
      >{title}</h3>
      <span
        className='text-sm tracking-wider text-zinc-400'
      >{about}</span>
    </Link>
  )
}