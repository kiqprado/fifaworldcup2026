'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

import { formationPositions } from '@/data/squads'
import { Player } from '@/app/components/card-squad-lineup'
import { TransformFieldPosition, type OnFieldOrientation } from '@/app/utils/field-position'
import { useMediaQuery } from '@/app/hook/media-query'

interface ISoccerFieldLineUp {
  players: Player[]
  formation: string
}

export function SoccerFieldLineup({ players, formation }: ISoccerFieldLineUp) {
  const isLandscapeView = useMediaQuery('(min-width: 768px)')
  const orientation: OnFieldOrientation = isLandscapeView ? 'landscape' : 'portrait'

  const positions = formationPositions[formation]
  const playersRef = useRef<HTMLDivElement[]>([])

  function getPositionColor(position: string) {
    if (position === 'GOL') return 'bg-yellow-400 shadow-yellow-400/30'
    if (position === 'ZAG') return 'bg-blue-500 shadow-blue-500/30'
    if (position === 'LAT') return 'bg-cyan-400 shadow-cyan-400/30'
    if (position === 'VOL') return 'bg-purple-500 shadow-purple-500/30'
    if (position === 'MEI') return 'bg-green-400 shadow-green-400/30'
    if (position === 'ATA') return 'bg-red-500 shadow-red-500/30'

    return 'bg-zinc-400'
  }

  useEffect(() => {
    gsap.fromTo(
      playersRef.current,
      { opacity: 0, scale: 0.7, y: 10 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.04,
        ease: 'power2.out',
      }
    )
  }, [formation])

  return (
    <div className='h-svh w-[88%]'>
      <div
        className='h-full px-8 py-6 border border-amber-700 rounded-lg
        bg-[radial-gradient(circle_at_center,_#166534,_#14532d)]
        transition-all duration-300
        hover:scale-[1.01] hover:shadow-2xl hover:shadow-black/40'
      >
        <div className='relative h-full w-full rounded-sm border border-white/20 overflow-hidden'>

          {/* Área esquerda */}
          <div className='absolute left-0 top-1/2 -translate-y-1/2 h-[75%] w-44 border border-white/20 flex items-center'>
            <div className='h-[60%] w-[50%] border border-white/20' />
          </div>

          {/* Meio campo */}
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 border border-white/20 rounded-full flex items-center justify-center'>
            <div className='w-2 h-2 bg-white/50 rounded-full' />
          </div>

          <div className='absolute left-1/2 top-0 h-full w-[1px] bg-white/20 -translate-x-1/2' />

          {/* Área direita */}
          <div className='absolute right-0 top-1/2 -translate-y-1/2 h-[75%] w-44 border border-white/20 flex items-center justify-end'>
            <div className='h-[60%] w-[50%] border border-white/20' />
          </div>

          {/* Jogadores */}
          {positions.map((pos, index) => {
            const player = players[index]
            if (!player) return null

            const { x, y } = TransformFieldPosition(pos, orientation)

            return (
              <div
                key={player.number}
                ref={(el) => {
                  if (el) playersRef.current[index] = el
                }}
                className='absolute flex flex-col items-center justify-center gap-1.5 group cursor-pointer'
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div
                  className={`
                    w-10 h-10 flex items-center justify-center rounded-full 
                    text-xs font-bold text-white
                    transition-all duration-200
                    group-hover:scale-110 group-hover:shadow-[0_0_10px]
                    ${getPositionColor(player.position)}
                  `}
                >
                  {player.number}
                </div>

                <span
                  className='text-xs text-white/70 tracking-wider
                  opacity-0 translate-y-1
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-200'
                >
                  {player.name}
                </span>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}