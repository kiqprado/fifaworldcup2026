'use client'

import { ReactNode } from 'react'

import Tilt from 'react-parallax-tilt'

interface IDetailsEditionSummary {
  detail: ReactNode
  data: string
}

export function DetailsEditionSummary({ data, detail }: IDetailsEditionSummary) {
  return (
     <Tilt
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      scale={1.015}
      transitionSpeed={1200}
      glareEnable
      glareMaxOpacity={0.12}
      glareColor="#fbbf24"
      glarePosition="all"
      className="w-full rounded-xl"
    >
      <div
        className="
          group relative w-full px-6 py-5 rounded-xl
          bg-gradient-to-b from-zinc-900 to-zinc-950
          border border-amber-400/20
          overflow-hidden
          transition-all duration-500 ease-out"
        style={{ perspective: '1000px' }}
      >
        <div
          className="
            absolute inset-0 opacity-30 blur-lg
            bg-amber-400/10
            group-hover:opacity-30
            transition duration-500
          "
        />
        <div
          className="
            absolute inset-0 rounded-xl
            border border-transparent
            group-hover:border-amber-400/60
            group-hover:shadow-[0_0_10px_rgba(251,191,36,0.35)]
            transition-all duration-500
          "
        />

        <div className="relative flex flex-col items-center gap-3">
          <h3
            className="
              text-5xl font-bold tracking-wide
              text-amber-300
              transition-all duration-300 ease-in-out

              group-hover:text-amber-100

              group-hover:[text-shadow:
                0_0_6px_rgba(251,191,36,0.7),
                0_0_12px_rgba(251,191,36,0.45)
              ]
            "
            style={{
              transform: 'translateZ(40px)',
              textShadow: `
                0 1px 1px rgba(0,0,0,0.9),
                0 2px 3px rgba(0,0,0,0.7),
                0 6px 10px rgba(0,0,0,0.5)
              `
            }}
          >
            {detail}
          </h3>

          <span
            className="
              tracking-widest text-sm text-zinc-400
              transition-colors duration-300
              group-hover:text-zinc-200
            "
          >
            {data}
          </span>
        </div>
      </div>
    </Tilt>
  )
}