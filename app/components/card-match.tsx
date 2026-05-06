'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { CalendarCheck, MapPinCheck } from 'lucide-react'
import gsap from 'gsap'
import Tilt from 'react-parallax-tilt'

export interface IMatch {
  id: number;
  group: string;
  date: string;
  time: string;
  home: { name: string; code: string; flag: string };
  away: { name: string; code: string; flag: string };
  stadium: string;
  stadiumView: string;
  city: string;
}

export function CardMatch({
  id,
  group,
  date,
  time,
  home,
  away,
  stadium,
  stadiumView,
  city
}: IMatch) {
  const ref = useRef<HTMLDivElement>(null)

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
      <div
        ref={ref}
        className="
          group relative overflow-hidden
          w-96 min-h-66 rounded-2xl
          bg-zinc-900/70 backdrop-blur-lg
          p-4 flex flex-col gap-8

          border border-white/10
          transition-all duration-300
          hover:shadow-[0_0_35px_rgba(0,255,255,0.15)]
        "
      >
        {/* BG */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={stadiumView}
            alt={stadium}
            fill
            className="
              object-cover
              opacity-50
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
          <div className="flex items-center gap-2">
            <CalendarCheck size={14} />
            <span>{time} • {date}</span>
          </div>

          <span className="
            px-2 py-0.5 rounded-md
            bg-white/5
            border border-white/10
            group-hover:border-cyan-400/50
            transition-all duration-300 ease-in-out
          ">
            Grupo {group}
          </span>
        </div>

        {/* MATCH */}
        <div className="flex items-center justify-evenly">

          <div className="flex flex-col items-center gap-2 w-24">
            <div className="
              p-1.5 rounded-md
              bg-white/5
              border border-white/10
              shadow-inner
            ">
              <Image
                src={home.flag}
                alt={home.name}
                width={96}
                height={96}
                className="rounded-sm"
              />
            </div>

            <span className="text-sm text-center leading-tight text-nowrap">
              {home.name}
            </span>
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

          <div className="flex flex-col items-center gap-2 w-24">
            <div className="
              p-1.5 rounded-md
              bg-white/5
              border border-white/10
              shadow-inner
            ">
              <Image
                src={away.flag}
                alt={away.name}
                width={96}
                height={96}
                className="rounded-sm"
              />
            </div>

            <span className="text-sm text-center leading-tight text-nowrap">
              {away.name}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <MapPinCheck size={14} />
          <span className="truncate tracking-wider">
            {stadium}, {city}
          </span>
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