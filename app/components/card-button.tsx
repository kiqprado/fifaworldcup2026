'use client'

import Link from 'next/link'
import { ComponentProps, ElementType } from 'react'
import { LucideProps } from 'lucide-react'
import Tilt from 'react-parallax-tilt'

interface ICardButton extends ComponentProps<typeof Link> {
  icon: ElementType<LucideProps>
  iconProps?: LucideProps
  title: string
  about: string
}

export function CardButton({
  icon: Icon,
  title,
  about,
  iconProps,
  ...props
}: ICardButton) {
  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      scale={1.02}
      transitionSpeed={1200}
      glareEnable
      glareMaxOpacity={0.08}
      glareColor="#fbbf24"
      className="rounded-xl"
    >
      <Link
        {...props}
        className="
          group relative flex flex-col gap-3
          px-6 py-5 rounded-xl
          bg-gradient-to-b from-zinc-900 to-zinc-950
          border border-zinc-700
          overflow-hidden
          transition-all duration-500 ease-out
          hover:border-amber-300/60
        "
        style={{ perspective: '1000px' }}
      >
        <div
          className="
            absolute inset-0 opacity-0 blur-lg
            bg-amber-400/10
            group-hover:opacity-60
            transition duration-500
          "
        />
        <div
          className="
            absolute inset-0 rounded-xl
            border border-transparent
            group-hover:shadow-[0_0_12px_rgba(251,191,36,0.25)]
            transition-all duration-500
          "
        />
        <div
          className="
            transition-all duration-500
            group-hover:translate-y-[-2px]
          "
          style={{ transform: 'translateZ(40px)' }}
        >
          <Icon
            size={46}
            strokeWidth={1.6}
            className="
              transition-all duration-500
              group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.15)]
            "
            {...iconProps}
          />
        </div>
        <h3
          className="
            text-3xl font-bold tracking-widest
            text-zinc-200
            transition-all duration-300
            group-hover:text-amber-100
            group-hover:[text-shadow:
              0_0_6px_rgba(251,191,36,0.6),
              0_0_12px_rgba(251,191,36,0.35)
            ]
          "
          style={{ transform: 'translateZ(30px)' }}
        >
          {title}
        </h3>

        {/* Descrição */}
        <span
          className="
            text-sm tracking-wider text-zinc-400
            transition-colors duration-300
            group-hover:text-zinc-300
          "
        >
          {about}
        </span>
      </Link>
    </Tilt>
  )
}