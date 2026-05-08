'use client'

import Link from 'next/link'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'

export interface ITeam {
  name: string
  code: string
  flag: string
  history: string
}

export function CardTeam({
  name,
  code,
  flag,
  history
}: ITeam) {

  return(
    <Tilt
      glareEnable={false}
      scale={1.01}
      tiltMaxAngleX={3}
      tiltMaxAngleY={3}
      perspective={1200}
      transitionSpeed={2500}
      gyroscope={false}
      className='rounded-xl'
    >
      <div 
        className=' relative group rounded-xl
        border border-zinc-500
        transition-all duration-300 ease-in-out
        hover:border-cyan-400
        hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]'
      >
        <span 
          className='absolute -top-5 left-0 z-20
            text-4xl font-extrabold tracking-widest
            [-webkit-text-stroke:1px_rgb(34,211,238)]
            opacity-80
            drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]
            transition
            group-hover:opacity-100'
        >
          {code}
        </span>

        <div className="relative overflow-hidden rounded-xl bg-zinc-900">
          <div
            className='pointer-events-none absolute inset-0 z-30
            bg-gradient-to-r from-transparent via-white/10 to-transparent
            -translate-x-[150%] group-hover:translate-x-[150%]
            transition-transform duration-1000'
          />

          <div className='relative h-46 overflow-hidden'>
            <Image
              src={flag}
              alt={code}
              fill
              className='object-cover scale-115
              group-hover:scale-120 transition-all duration-300 ease-in-out'
            />
          </div>

          <div
            className='relative px-4 py-4 space-y-6'
          >
            <div className=''>
              <div className='absolute h-1 bg-cyan-300 right-0 left-0 top-0'/>
              <h3 
                className='absolute z-20 -top-5 left-1/2 -translate-x-1/2
                px-4 py-1.5 rounded-xl
                text-nowrap text-center font-bold tracking-wider 
                group-hover:text-cyan-300 group-hover:border-cyan-200 
                border border-cyan-300 bg-zinc-900 drop-shadow-md
                transition-colors duration-300 ease-in-out'
              >
                {name}
              </h3>
            </div>
            <p className='w-56 h-36 overflow-y-auto
              text-justify text-sm tracking-wide mt-4
              scrollbar-dark'
            >
              {history}
            </p>

            <div
              className='flex items-center justify-center gap-3'
            >
              <Link
                href="/groups"
                title={`Fique por dentro dos grupos da Copa`}
                className="px-4 py-2 min-w-[50%]
                  rounded-md border border-cyan-400
                  text-cyan-400 text-sm text-center tracking-wider
                  transition-all duration-300
                  hover:bg-cyan-400 hover:text-black
                  hover:shadow-[0_0_20px_rgba(34,211,238,0.7)]"
              >
                Grupo
              </Link>

              <Link
                href={`/lineup/${code}`}
                title={`Veja os detalhes da escalação de ${name}`}
                className="px-4 py-2 min-w-[50%]
                rounded-md border border-cyan-400
                text-cyan-400 text-sm text-center tracking-wider
                transition-all duration-300
                hover:bg-cyan-400 hover:text-black
                hover:shadow-[0_0_20px_rgba(34,211,238,0.7)]"
              >
                Escalação
              </Link>
            </div>
          </div>

        </div>
      </div>
    </Tilt> 
  )
}