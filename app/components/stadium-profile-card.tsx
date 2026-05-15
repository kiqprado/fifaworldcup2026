'use client'

import { useState } from 'react'
import { MapPin, X } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'

import Tilt from 'react-parallax-tilt'

import { IMatch } from '@/app/components/card-match'

export interface IStadium {
  name: string
  city: string
  country: string
  image: string
  capacity: string
  curiosity: string
  mapsQuery: string
}

interface IStadiumCardProps extends IStadium {
  matches: IMatch[]
}

export function StadiumCard({
  image,
  name,
  capacity,
  mapsQuery,
  city,
  country,
  curiosity,
  matches,
}: IStadiumCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function HandleToggleModal() {
    setIsModalOpen(prev => !prev)
  }

  return (
    <Tilt
      glareEnable
      glareMaxOpacity={0.08}
      scale={1.01}
      transitionSpeed={2000}
      tiltMaxAngleX={2}
      tiltMaxAngleY={2}
      className="w-full max-w-[300px]"
    >
      <div
        className="
          relative group w-full
          p-[1px] rounded-xl
          bg-gradient-to-br from-amber-400 via-yellow-500 to-emerald-800
          transition-all duration-500
          hover:shadow-[0_0_25px_rgba(251,191,36,0.25),0_0_40px_rgba(16,185,129,0.15)]
        "
      >
        <div
          className="
            relative overflow-hidden
            flex flex-col items-center
            rounded-xl bg-zinc-950
          "
        >
          {/* SHINE */}
          <div
            className="
              absolute inset-0 z-10 pointer-events-none
              bg-gradient-to-r from-transparent via-white/10 to-transparent
              opacity-0 group-hover:opacity-100
              translate-x-[-120%] group-hover:translate-x-[120%]
              transition-all duration-700
            "
          />

          {/* IMAGE */}
          <div className="relative overflow-hidden">
            <Image
              src={image}
              alt={name}
              width={300}
              height={160}
              className="
                aspect-video object-cover
                group-hover:scale-110
                transition-transform duration-700 ease-out
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <span
              className="
                absolute top-2 right-2
                px-2 py-0.5
                bg-black/60 backdrop-blur-sm
                border border-amber-400/40
                rounded-md
                text-xs font-bold tracking-widest
                text-amber-300
                shadow-md
              "
            >
              {capacity}
            </span>
          </div>

          <div className="px-4 pt-3 flex flex-col gap-2">
            <div>
              <h3
                className="
                  text-lg font-bold
                  text-white
                  truncate
                  group-hover:text-amber-300
                  transition-colors
                "
              >
                {name}
              </h3>

              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                target="_blank"
                className="
                  flex items-center gap-1.5
                  text-sm text-amber-400
                  hover:text-amber-200
                  transition-colors
                "
              >
                <MapPin size={12} />
                {city}, {country}
              </Link>
            </div>

            <p
              className="
                w-fit
                text-justify
                text-sm text-zinc-400
                leading-relaxed
                min-h-[120px]
                overflow-y-auto
                group-hover:text-zinc-300
                transition-colors
              "
            >
              {curiosity}
            </p>
          </div>

          {/* BUTTON */}
          <button
            onClick={HandleToggleModal}
            className="
              w-full mt-4 px-4 py-3
              border-t border-white/10
              text-sm font-semibold
              text-amber-300
              hover:bg-white/5
              hover:text-amber-200
              transition-all duration-300
            "
          >
            Conheça os jogos nesse local
          </button>

          {isModalOpen && (
            <div
              className="
                absolute inset-0 z-50
                bg-zinc-950/95 backdrop-blur-xl
                p-4
                flex flex-col
              "
            >
              {/* CLOSE */}
              <button
                onClick={HandleToggleModal}
                className="
                  absolute top-3 right-3
                  text-zinc-400
                  hover:text-amber-300 hover:scale-105
                  transition-all duration-150 ease-in-out
                "
              >
                <X size={18} />
              </button>

              <h4 className="text-lg text-center font-bold text-white mb-4">
                Jogos em {name}
              </h4>

              <div className="flex-1 space-y-3 overflow-y-auto pr-1">
                {matches.length > 0 ? (
                  matches.slice(0, 5).map(function (match) {
                    return (
                      <div
                        key={match.id}
                        className="w-full px-3 py-1 rounded-lg
                          border border-white/5 bg-white/5
                          hover:border-amber-300
                          transition-all duration-300 ease-in-out
                        "
                      >
                        <div className=" flex items-center justify-center gap-4">
                          <div className="flex items-center gap-2 font-medium text-white">
                            <Image
                              src={match.home.flag}
                              alt={match.home.code}
                              width={26}
                              height={26}
                            />

                            <span>{match.home.code}</span>

                            <span className="text-zinc-500">x</span>

                            <span>{match.away.code}</span>

                            <Image
                              src={match.away.flag}
                              alt={match.away.code}
                              width={26}
                              height={26}
                            />
                          </div>
                        </div>

                        <p className="mt-1 text-center text-xs text-zinc-400">
                          {match.date} • {match.time}
                        </p>
                      </div>
                    )
                  })
                ) : (
                  <p className="text-sm text-zinc-500">
                    Nenhuma partida cadastrada para este estádio.
                  </p>
                )}
              </div>

              <Link
                href="/matches"
                className="
                  mt-4
                  rounded-xl
                  bg-gradient-to-r from-amber-400 to-yellow-500
                  px-4 py-3
                  text-center
                  text-sm font-bold
                  text-black
                  hover:brightness-110
                  transition-all duration-300
                "
              >
                Ver todas as partidas
              </Link>
            </div>
          )}
        </div>
      </div>
    </Tilt>
  )
}