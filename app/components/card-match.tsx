'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, } from 'react'

import { useNow } from '@/app/hook/use-match-status'
import { MatchStatus } from '../elements/match-status'
import { getMatchStatus } from '../utils/get-match-status'

import { CalendarCheck, MapPinCheck, Star } from 'lucide-react'
import gsap from 'gsap'
import Tilt from 'react-parallax-tilt'

interface IBroadcast {
  name: string
  logo: string
  url: string
}

export interface IMatch {
  id: number;
  isFavorite?: boolean
  onFavorite?: (id: number) => void
  group: string;
  date: string;
  time: string;
  home: { name: string; code: string; flag: string };
  away: { name: string; code: string; flag: string };
  stadium: string;
  stadiumView: string;
  city: string;
  broadcasts: IBroadcast[],
  highlighted?: boolean
}

export function CardMatch({
  id,
  isFavorite = false,
  onFavorite,
  group,
  date,
  time,
  home,
  away,
  stadium,
  stadiumView,
  broadcasts,
  city,
  highlighted = false
}: IMatch) {
  const ref = useRef<HTMLDivElement>(null)

  const now = useNow()
  const matchStatus = getMatchStatus(date, time, now)

  useEffect(() => {
    if (!ref.current) return

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
    )
  }, [])

  return (
    <Tilt
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      scale={1.02}
      perspective={1200}
      transitionSpeed={400}
      glareEnable
      glareMaxOpacity={0.08}
    >
      { matchStatus && (
          <MatchStatus
            status={matchStatus.status}
            variant={matchStatus.variant}
          />
      )}
      
      <div
        ref={ref}
        className={`
          group relative overflow-hidden
          min-w-88 min-h-66 rounded-2xl
          bg-zinc-900/70 backdrop-blur-lg
          p-4 flex flex-col gap-8
          border transition-all duration-300
          hover:shadow-[0_0_35px_rgba(0,255,255,0.15)]
          ${
            highlighted
              ? 'border-cyan-400 shadow-[0_0_35px_rgba(0,255,255,0.15)]'
              : 'border-white/10'
          }
        `}
      >

        {/* BG */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={stadiumView}
            alt={stadium}
            fill
            className="
              object-cover
              opacity-60
              scale-105
              transition duration-700
              group-hover:scale-110
            "
          />

          <div className="
            absolute inset-0
            bg-gradient-to-b
            from-black/70 via-black/40 to-black/85
          " />
        </div>

        <div className="flex items-center justify-between text-xs text-zinc-300">

          <div className="flex items-center gap-2 min-w-fit">
            <CalendarCheck size={14} />
            <span>{time} • {date}</span>
          </div>

          <Link
            href={'/groups'}
            className="
              px-2 py-0.5 rounded-md
              bg-white/5
              border border-white/10
              group-hover:border-cyan-400/50
              transition-all duration-300 ease-in-out
            "
          >
            Grupo {group}
          </Link>

          <button
            onClick={() => onFavorite?.(id)}
            className="
              flex items-center justify-center
              transition-all duration-300
              hover:scale-110
            "
          >
            <Star
              size={18}
              className={`
                transition-all duration-300
                ${
                  isFavorite
                    ? 'fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.7)]'
                    : 'text-zinc-400 hover:text-yellow-400'
                }
              `}
            />
          </button>
        </div>

        <div className="flex items-center justify-evenly">

          <div className="flex flex-col items-center gap-2">
            <div className="
              p-1.5 rounded-md
              bg-white/5
              border border-white/10
              shadow-inner
            ">
              <Link
                href={`/lineup/${home.code}`}
              >
                <Image
                  src={home.flag}
                  alt={home.name}
                  width={106}
                  height={106}
                  className="rounded-sm"
                />
              </Link>
              
            </div>

            <Link 
              href={`/lineup/${home.code}`}
              className="text-sm text-center leading-tight text-nowrap">
              {home.name}
            </Link>
          </div>

          <div className="
            text-2xl font-extrabold tracking-widest
            text-transparent bg-clip-text
            bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400

            transition duration-300
            group-hover:scale-110
          ">
            VS
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="
              p-1.5 rounded-md
              bg-white/5
              border border-white/10
              shadow-inner
            ">
              <Link
                href={`/lineup/${away.code}`}
              >
                <Image
                  src={away.flag}
                  alt={away.name}
                  width={106}
                  height={106}
                  className="rounded-sm"
                />
              </Link>
              
            </div>

            <Link
              href={`/lineup/${away.code}`} 
              className="text-sm text-center leading-tight text-nowrap">
              {away.name}
            </Link>
          </div>
        </div>

        <div 
          className="flex items-center gap-2 text-sm text-zinc-400
            group-hover:text-zinc-100 transition-all duration-300 ease-in-out">
          <MapPinCheck size={14} />
          <span className="truncate tracking-wider">
            {stadium}, {city}
          </span>
        </div>

        <div className='space-y-2'>
          <h4 className='text-zinc-300 tracking-widest text-sm'>Assista ao vivo em:</h4>
          <div className='grid grid-cols-2 gap-2'>
          {broadcasts.map((broadcast) => (
            <Link
              key={broadcast.name}
              href={broadcast.url}
              target='_blank'
              className='px-2 py-1 rounded-lg border border-zinc-950 bg-red-700 flex items-center justify-center'
            >
              <Image src={broadcast.logo} alt={broadcast.name} width={56} height={52} className='object-fill' />
            </Link>
          ))}
          </div>
        </div>

        <div className="
          pointer-events-none absolute inset-0
          opacity-0 group-hover:opacity-100
          transition duration-500

          before:absolute before:inset-0
          before:bg-gradient-to-r
          before:from-transparent
          before:via-white/10
          before:to-transparent
          before:translate-x-[-100%]
          group-hover:before:translate-x-[100%]
          before:transition-transform before:duration-1000
        " />
      </div>
    </Tilt>
  )
}