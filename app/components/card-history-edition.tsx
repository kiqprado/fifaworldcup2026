'use client'

import Image from 'next/image'
import Tilt from 'react-parallax-tilt'

export interface IHistoryEdition {
  year: string
  host: string
  flag: string
  champion: string
  fact: string
}

export function HistoryEditionCard({
  year,
  flag,
  host,
  champion,
  fact,
}: IHistoryEdition) {
  return (
    <div
      className='group w-fit relative rounded-2xl p-[1px]
      bg-gradient-to-br from-amber-400/80 via-amber-700/40 to-zinc-900
      transition-all duration-500'
    >
      <div
        className='w-fit relative rounded-2xl bg-zinc-900
        px-8 py-4 flex gap-6 items-center
        border border-zinc-800
        transition-all duration-500
        group-hover:border-amber-400/60
        group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.95),0_10px_30px_rgba(120,72,20,0.35),0_0_20px_rgba(251,191,36,0.12)]'
      >
        <div className='flex flex-col items-center justify-center min-w-[110px]'>
          <h2
            className='text-5xl font-bold tracking-widest
            bg-gradient-to-b from-amber-300 to-yellow-500
            bg-clip-text text-transparent'
          >
            {year}
          </h2>

          <span
            className='text-[11px] uppercase tracking-[0.3em]
            text-center text-zinc-500 mt-1'
          >
            {host}
          </span>
        </div>

        {/* DIVIDER */}
        <div className='h-16 w-[1px] bg-gradient-to-b from-transparent via-zinc-700 to-transparent' />

        <div className='flex flex-col gap-2 flex-1'>
          <div className='flex items-center gap-4'>
            {/* FLAG 3D */}
            <Tilt
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              perspective={800}
              scale={1.06}
              transitionSpeed={1200}
              glareEnable
              glareMaxOpacity={0.15}
              glareColor='#fbbf24'
              className='rounded-md'
            >
              <div
                className='relative w-[44px] h-[44px]
                flex items-center justify-center
                rounded-md overflow-hidden
                bg-zinc-800
                shadow-[0_8px_20px_rgba(0,0,0,0.6)]'
              >
                <Image
                  src={flag}
                  alt={champion}
                  fill
                  className='object-cover'
                />

                <div
                  className='absolute inset-0
                  bg-gradient-to-br from-white/10 via-transparent to-amber-400/20
                  opacity-0 group-hover:opacity-100
                  transition-all duration-500'
                />
              </div>
            </Tilt>

            <h3 className='text-lg tracking-widest font-semibold text-white uppercase'>
              Campeão
              <span className='text-amber-400 ml-2'>
                {champion}
              </span>
            </h3>
          </div>

          <p
            className='text-sm leading-relaxed text-zinc-400
            w-186'
          >
            {fact}
          </p>
        </div>

        <div
          className='absolute right-0 top-0 h-full w-[3px]
          bg-gradient-to-b from-transparent via-amber-400/70 to-transparent
          opacity-0 group-hover:opacity-100 transition-all duration-500'
        />
      </div>
    </div>
  )
}