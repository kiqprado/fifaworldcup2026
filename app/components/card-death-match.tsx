'use client'

import Image from 'next/image'
import Link from 'next/link'

import Tilt from 'react-parallax-tilt'

import { NormalizeText } from '../utils/normalize-input-search'

interface ITeamQualified {
  name: string
  flag: string
  code: string
}

export interface ICardTeamsOnDeathMatch {
  teams: ITeamQualified[]
  searchValue?: string
}

export function CardTeamsDeathMatchList({ teams, searchValue,}: ICardTeamsOnDeathMatch) {
  const normalizedSearch = NormalizeText(searchValue ?? '')

  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      perspective={1000}
      scale={1.03}
      transitionSpeed={1200}
      gyroscope
      className="w-fit"
    >
      <div
        className="
          relative w-86 rounded-xl overflow-hidden p-[1px]
          transition-all duration-300 ease-out
        "
      >
        <div
          className="
            relative flex flex-col rounded-xl bg-zinc-950 overflow-hidden
            transition-all duration-300
          "
        >
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black opacity-95" />

          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-amber-400/10 via-transparent to-emerald-400/10" />

          <h2 className="relative z-10 py-3 px-4 text-3xl font-bold tracking-wide text-amber-300">
            Mata Mata
          </h2>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />

          <div className="relative z-10 flex flex-col">
            {teams.map(team => {
              const highlighted =
                normalizedSearch &&
                (
                  NormalizeText(team.name).includes(normalizedSearch) ||
                  NormalizeText(team.code).includes(normalizedSearch)
                )

              return (
                <div
                  key={team.code}
                  className={`
                    flex items-center gap-3 px-4 py-2 rounded-lg
                    transition-all duration-300
                    hover:bg-white/5
                    ${
                      highlighted
                        ? 'scale-[1.04] bg-amber-400/10 ring-1 ring-amber-400/40 shadow-lg shadow-amber-400/10'
                        : ''
                    }
                  `}
                >
                  <div
                    className={`
                      transition-transform duration-300
                      ${highlighted ? 'scale-110' : ''}
                    `}
                  >
                    <Image
                      src={team.flag}
                      alt={team.name}
                      width={34}
                      height={34}
                      className="rounded-sm"
                    />
                  </div>

                  <Link
                    href={`/lineup/${team.code}`}
                    className={`
                      text-lg tracking-wide transition-colors
                      ${
                        highlighted
                          ? 'text-amber-300 font-semibold'
                          : 'text-zinc-200'
                      }
                    `}
                  >
                    {team.name}
                  </Link>
                </div>
              )
            })}
          </div>

          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-80" />
        </div>
      </div>
    </Tilt>
  )
}

export function CardTeamsOnDeathMatchBracket() {
  return(
    <Tilt
  tiltMaxAngleX={5}
  tiltMaxAngleY={5}
  scale={1.015}
  transitionSpeed={1000}
>
  <div className="relative w-[540px] rounded-xl group">

    <div
      className="
        absolute inset-0
        rounded-xl
        p-[1px]
        bg-gradient-to-br
        from-amber-400
        via-yellow-300
        to-amber-600
        opacity-80
        group-hover:opacity-100
        transition-all
        duration-500
      "
    />

    <div
      className="
        relative
        rounded-xl
        overflow-hidden
        bg-zinc-900
        border
        border-zinc-800
      "
    >

      <h2
        className="
          py-3
          px-4
          text-2xl
          font-bold
          tracking-wide
          text-amber-300
          bg-zinc-900
        "
      >
        16 avos • Jogo 01
      </h2>

      <div className="border-t border-zinc-800">

        {/* Time 1 */}

        <div
          className="
            flex
            items-center
            justify-between
            px-4
            py-4

            bg-emerald-700/30
            border-l-4
            border-emerald-400

            shadow-[inset_0_0_18px_rgba(16,185,129,.15)]
          "
        >

          <div className="flex items-center gap-3">

            <Image
              src="/flags/br.png"
              alt=""
              width={36}
              height={36}
            />

            <span className="font-semibold tracking-wide">
              Brasil
            </span>

          </div>

          <span className="text-emerald-300 font-bold">
            Classificado
          </span>

        </div>

        {/* Time 2 */}

        <div
          className="
            flex
            items-center
            justify-between
            px-4
            py-4

            bg-red-950/40
            border-l-4
            border-red-500

            opacity-70

            shadow-[inset_0_0_18px_rgba(239,68,68,.15)]
          "
        >

          <div className="flex items-center gap-3">

            <Image
              src="/flags/ar.png"
              alt=""
              width={36}
              height={36}
              className="grayscale brightness-75"
            />

            <span className="tracking-wide text-zinc-500">
              Argentina
            </span>

          </div>

          <span className="text-red-400">
            Eliminado
          </span>

        </div>

      </div>

    </div>

  </div>
</Tilt>
  )
}