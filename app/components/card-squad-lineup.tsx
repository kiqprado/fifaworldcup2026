'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Tilt from 'react-parallax-tilt'

export interface Player {
  name: string
  number: number
  position: 'GOL' | 'ZAG' | 'LAT' | 'VOL' | 'MEI' | 'ATA'
}

type Position = Player['position']

const positionLabels: Record<Position, string> = {
  GOL: 'Goleiro',
  ZAG: 'Zagueiro',
  LAT: 'Lateral',
  VOL: 'Volante',
  MEI: 'Meia',
  ATA: 'Atacante',
}

export interface ICardSquadLineUp {
  title: string
  players: Player[]
  variant: 'starter' | 'reserve'
}

export function CardSquadLineUp({ title, players }: ICardSquadLineUp) {
  const itemsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    gsap.fromTo(
      itemsRef.current,
      { opacity: 0, x: -10 },
      {
        opacity: 1,
        x: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power2.out',
      }
    )
  }, [])

  return (
    <Tilt
      tiltMaxAngleX={4}
      tiltMaxAngleY={4}
      scale={1.01}
      transitionSpeed={1200}
      className='w-80'
    >
      <div
        className='relative rounded-2xl p-[1px]
        bg-gradient-to-br from-amber-400 via-emerald-400 to-purple-500
        transition-all duration-500
        hover:shadow-[0_0_30px_rgba(0,0,0,0.6)]'
      >
        {/* Inner */}
        <div
          className='rounded-2xl bg-zinc-900/95 backdrop-blur-0
          border border-zinc-800'
        >
          {/* Header */}
          <div
            className='px-4 py-3 border-b border-zinc-800
            flex items-center justify-between'
          >
            <h3 className='text-xl tracking-widest font-semibold text-white'>
              {title}
            </h3>

            <span className='text-xs text-zinc-400 tracking-wider'>
              {players.length} jogadores
            </span>
          </div>

          {/* Lista */}
          <div className='divide-y divide-zinc-800'>
            {players.map((player, index) => (
              <div
                key={player.number}
                ref={(el) => {
                  if (el) itemsRef.current[index] = el
                }}
                className='group px-4 py-3 flex items-center gap-4
                transition-all duration-200 hover:bg-zinc-800/40'
              >
                {/* Número */}
                <div
                  className='w-9 h-9 flex items-center justify-center
                  rounded-full text-sm font-bold
                  bg-gradient-to-br from-amber-400 to-yellow-500
                  text-black
                  transition-all duration-300
                  group-hover:scale-110 group-hover:shadow-md'
                >
                  {player.number}
                </div>

                {/* Info */}
                <div className='flex flex-col leading-tight'>
                  <span className='text-sm font-medium tracking-wide text-white'>
                    {player.name}
                  </span>

                  <span className='text-[11px] tracking-widest text-zinc-400'>
                    {positionLabels[player.position]}
                  </span>
                </div>

                {/* Accent lateral */}
                <div
                  className='ml-auto h-6 w-[2px]
                  bg-gradient-to-b from-transparent via-zinc-600 to-transparent
                  opacity-0 group-hover:opacity-100 transition-all duration-300'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Tilt>
  )
}