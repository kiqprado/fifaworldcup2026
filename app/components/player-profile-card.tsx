'use client'

import Image from 'next/image'
import { Shield, Star, CalendarDays, Crosshair } from 'lucide-react'
import Tilt from 'react-parallax-tilt'

export interface StarPlayer {
  name: string;
  country: string;
  countryCode: string;
  club: string;
  age: number;
  debutDate: string;
  goals: number;
  position: string;
  image: string;
  badge: string;
}

export function StarPlayerCard({
  image,
  name,
  country,
  countryCode,
  position,
  club,
  age,
  debutDate,
  goals,
  badge
}: StarPlayer) {

  return (
    <Tilt
      glareEnable
      glareMaxOpacity={0.25}
      scale={1.04}
      transitionSpeed={1200}
      className="rounded-xl"
    >
      <div
        className="
        relative group
        p-[1px] rounded-xl
        bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600
        hover:shadow-[0_0_40px_rgba(34,211,238,0.7)]
        transition-all duration-300
      "
      >

        {/* ================= CARD BASE (CLIPADO) ================= */}
        <div className="relative bg-zinc-900 rounded-xl overflow-hidden">

          {/* SHINE (AGORA CONTROLADO) */}
          <div
            className="
            absolute inset-0 z-10 pointer-events-none
            bg-gradient-to-r from-transparent via-white/10 to-transparent
            translate-x-[-120%] group-hover:translate-x-[120%]
            transition-transform duration-700
          "
          />

          {/* PLAYER IMAGE */}
          <div className="relative w-[252px] h-[272px] overflow-hidden rounded-t-xl">
            <Image
              src={image}
              alt={name}
              fill
              className="
                object-cover
                group-hover:scale-105
                transition-transform duration-500
              "
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>

          {/* PLAYER NAME */}
          <div className="w-full relative z-20">
            <div
              className="
              w-[88%] absolute -top-5 left-1/2 -translate-x-1/2
              px-3 py-1.5 z-30
              border border-cyan-400 rounded-lg
              bg-zinc-900
              group-hover:border-cyan-300
              transition-all
            "
            >
              <h3
                className="
                text-xl font-bold text-center tracking-wide
                text-white
                group-hover:text-cyan-300
                drop-shadow-md
              "
              >
                {name}
              </h3>
            </div>

            <div className="h-[2px] w-full bg-cyan-400/70 blur-[1px]" />
          </div>

          {/* INFO */}
          <div className="mt-5 flex flex-col gap-2 px-3 py-3 text-sm">

            <span className="text-amber-300 text-xs">
              {country} - {position}
            </span>

            <span className="flex gap-3 items-center group-hover:text-cyan-300 transition-colors">
              <Shield size={16} /> {club}
            </span>

            <span className="flex gap-3 items-center group-hover:text-cyan-300 transition-colors">
              <Star size={16} /> {age}
            </span>

            <span className="flex gap-3 items-center group-hover:text-cyan-300 transition-colors">
              <CalendarDays size={16} /> {debutDate}
            </span>

            <span className="flex gap-3 items-center group-hover:text-cyan-300 transition-colors">
              <Crosshair size={16} /> {goals}
            </span>

            {/* BUTTON */}
            <button
              className="
              mt-2 py-2 rounded-md
              border border-cyan-400
              text-cyan-400
              bg-transparent
              hover:bg-cyan-400 hover:text-black
              hover:shadow-[0_0_20px_rgba(34,211,238,0.7)]
              transition-all duration-300
            "
            >
              Ver Escalação {country}
            </button>

          </div>

        </div>

        {/* ================= LAYER SUPERIOR (SEM CLIP) ================= */}

        {/* COUNTRY CODE (BRA vazado) */}
        <h2
          className="
            absolute z-30 left-0 -top-5
            text-4xl font-extrabold tracking-widest
            [-webkit-text-stroke:1px_rgb(34,211,238)]
            opacity-80
            drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]
            group-hover:opacity-100
            transition
          "
        >
          {countryCode}
        </h2>

        {/* BADGE 3D */}
        <div className="absolute -top-14 -right-4 z-40 pointer-events-none">
          <div
            className="
            relative w-[95px] h-[95px]
            drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]
            group-hover:scale-110
            transition-transform duration-300
          "
          >
            <Image
              src={badge}
              alt={countryCode}
              fill
              className="object-contain"
            />

            {/* glow */}
            <div
              className="
              absolute inset-0
              bg-cyan-400/20 blur-2xl
              opacity-0 group-hover:opacity-100
              transition
            "
            />
          </div>
        </div>

      </div>
    </Tilt>
  )
}