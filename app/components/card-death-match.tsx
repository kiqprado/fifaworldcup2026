'use client'

import Image from 'next/image'
import Link from 'next/link'

import Tilt from 'react-parallax-tilt'

import { IMatch } from '@/app/components/card-match'

import { useBreakpoint } from '../hook/use-media-query'
import { NormalizeText } from '../utils/normalize-input-search'

interface ITeamQualified {
  name: string
  flag: string
  code: string
  position: string
}

interface ICardTeamsOnDeathMatchBracket {
  match: IMatch
}

export interface ICardTeamsOnDeathMatch {
  teams: ITeamQualified[]
  searchValue?: string
}

export function CardTeamsDeathMatchList({ teams, searchValue }: ICardTeamsOnDeathMatch) {
  const normalizedSearch = NormalizeText(searchValue ?? '')

  const isMobileXS = useBreakpoint('mobileXS')
  const isMobileSM = useBreakpoint('mobileSM')
  const isMobileMD = useBreakpoint('mobileMD')
  const isMobileLG = useBreakpoint('mobileLG')
  const isMobileXL = useBreakpoint('mobileXL')

  const mobileRangeFull =
    isMobileXS ||
    isMobileSM ||
    isMobileMD ||
    isMobileLG ||
    isMobileXL

  return (
    <div
      className="group
        relative rounded-xl overflow-hidden p-[1px]
        bg-gradient-to-br from-zinc-700 via-zinc-600 to-zinc-700
        hover:from-amber-300 hover:via-lime-400 hover:to-emerald-400
        transition-all duration-300 ease-out hover:scale-[1.02]
      "
    >
      <div
        className="relative overflow-hidden rounded-xl
          bg-zinc-950 transition-all duration-300
          shadow-[0_6px_14px_rgba(0,0,0,0.65)]
          group-hover:shadow-[0_10px_28px_rgba(16,185,129,0.22),0_4px_16px_rgba(251,191,36,0.18)]
        "
      >
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black opacity-95" />

        <div
          className="
            absolute inset-0
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-500
            bg-gradient-to-br from-amber-400/10 via-transparent to-emerald-400/10
          "
        />

        <h2
          className="
            relative z-10
            py-3 px-4
            text-3xl
            font-bold
            tracking-wide
            text-amber-300
            text-center
          "
        >
          Classificados
        </h2>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />

        <div
          className={`
            relative z-10
            flex
            gap-2
            p-3
            ${
              mobileRangeFull
                ? 'flex-col'
                : 'flex-wrap'
            }
          `}
        >
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
                  flex
                  items-center
                  gap-3
                  px-4
                  py-2
                  rounded-lg
                  transition-all duration-300

                  ${
                    mobileRangeFull
                      ? 'w-full'
                      : 'w-[calc(50%-0.25rem)]'
                  }

                  ${
                    highlighted
                      ? `
                        scale-[1.05]
                        bg-gradient-to-r from-amber-400/15 via-emerald-400/10 to-transparent
                        ring-1 ring-amber-400/40
                        shadow-[0_0_18px_rgba(251,191,36,0.18)]
                      `
                      : `
                        hover:bg-white/5
                      `
                  }
                `}
              >
                <Image
                  src={team.flag}
                  alt={team.name}
                  width={34}
                  height={34}
                  className={`
                    rounded-sm
                    transition-transform duration-300
                    ${highlighted ? 'scale-110' : ''}
                  `}
                />

                <Link
                  href={`/lineup/${team.code}`}
                  className={`
                    flex-1
                    text-lg
                    tracking-wide
                    transition-colors
                    ${
                      highlighted
                        ? 'text-amber-300 font-semibold'
                        : 'text-zinc-200'
                    }
                  `}
                >
                  {team.name}
                </Link>

                <span
                  className="
                    text-xs
                    tracking-widest
                    text-zinc-400
                  "
                >
                  {team.position}
                </span>
              </div>
            )
          })}
        </div>

        <div
          className="
            h-[2px]
            w-full
            bg-gradient-to-r
            from-transparent
            via-emerald-400/50
            to-transparent
            opacity-80
          "
        />
      </div>
    </div>
  )
}


export function CardTeamsOnDeathMatchBracket({ match }: ICardTeamsOnDeathMatchBracket) {
  const finished = !!match.result

  const homeWinner = finished && match.result!.home > match.result!.away
  const awayWinner = finished && match.result!.away > match.result!.home

   // BREAKPOINTS INDIVIDUALS
    const isMobileXS = useBreakpoint('mobileXS')
    const isMobileSM = useBreakpoint('mobileSM')
    const isMobileMD = useBreakpoint('mobileMD')
    const isMobileLG = useBreakpoint('mobileLG')
    const isMobileXL = useBreakpoint('mobileXL')
  
    const isTabletSM = useBreakpoint('tabletSM')
    const isTabletMD = useBreakpoint('tabletMD')
  
    const isDesktopSM = useBreakpoint('desktopSM')
    const isDesktopMD = useBreakpoint('desktopMD')
    const isDesktopLG = useBreakpoint('desktopLG')
    const isDesktopXL = useBreakpoint('desktopXL')
    const isDesktop2XL = useBreakpoint('desktop2XL')
  
    // GROUPS DE BREAKPOINTS
  
    const mobileRangeFull =
      isMobileXS ||
      isMobileSM ||
      isMobileMD ||
      isMobileLG ||
      isMobileXL
  
    const tabletRangeFull =
      isTabletSM ||
      isTabletMD
  
    const desktopRangeFull =
      isDesktopSM ||
      isDesktopMD ||
      isDesktopLG ||
      isDesktopXL ||
      isDesktop2XL


  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      scale={1.015}
      transitionSpeed={1000}
    >
      <div 
        className={`relative
        ${
          mobileRangeFull
            ? 'w-[400px]'
            : tabletRangeFull
              ? 'w-[480px]'
              : 'w-[540px]'
        }
        rounded-xl group`}
      >

        <div
          className=" absolute inset-0
            rounded-xl
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

          <Link
            href={`/matches`}
            target='_blank'
            className="px-6 py-2 block
              text-lg text-center
              tracking-wider
              text-amber-300
              bg-zinc-900
            "
          >
            Exibir detalhes da partida
          </Link>

          <div className="border-t border-zinc-800">

            {/* Home */}

            <div
              className={`flex items-center justify-between px-4 py-2
                transition-all duration-300
                ${
                  !finished
                    ? `
                      bg-zinc-900
                    `
                    : homeWinner
                      ? `
                        bg-emerald-700/30
                        border-l-4
                        border-emerald-400
                        shadow-[inset_0_0_18px_rgba(16,185,129,.15)]
                      `
                      : `
                        bg-red-950/40
                        border-l-4
                        border-red-500
                        opacity-70
                        shadow-[inset_0_0_18px_rgba(239,68,68,.15)]
                      `
                }
              `}
            >

              <div className="flex items-center gap-3">

                <Image
                  src={match.home.flag}
                  alt={match.home.name}
                  width={46}
                  height={46}
                  className={
                    finished && !homeWinner
                      ? 'grayscale brightness-75'
                      : ''
                  }
                />

                <span
                  className={
                    finished && !homeWinner
                      ? 'tracking-wide text-zinc-500'
                      : 'font-semibold tracking-wide'
                  }
                >
                  {match.home.name}
                </span>

              </div>

              {finished && (
                <span
                  className={
                    homeWinner
                      ? 'text-emerald-300 font-bold'
                      : 'text-red-400'
                  }
                >
                  {homeWinner ? 'Classificado' : 'Eliminado'}
                </span>
              )}

            </div>

            {/* Away */}

            <div
              className={`flex items-center justify-between px-4 py-2
                transition-all duration-300
                ${
                  !finished
                    ? `
                      bg-zinc-900
                    `
                    : awayWinner
                      ? `
                        bg-emerald-700/30
                        border-l-4
                        border-emerald-400
                        shadow-[inset_0_0_18px_rgba(16,185,129,.15)]
                      `
                      : `
                        bg-red-950/40
                        border-l-4
                        border-red-500
                        opacity-70
                        shadow-[inset_0_0_18px_rgba(239,68,68,.15)]
                      `
                }
              `}
            >

              <div className="flex items-center gap-3">

                <Image
                  src={match.away.flag}
                  alt={match.away.name}
                  width={46}
                  height={46}
                  className={
                    finished && !awayWinner
                      ? 'grayscale brightness-75'
                      : ''
                  }
                />

                <span
                  className={
                    finished && !awayWinner
                      ? 'tracking-wide text-zinc-500'
                      : 'font-semibold tracking-wide'
                  }
                >
                  {match.away.name}
                </span>

              </div>

              {finished && (
                <span
                  className={
                    awayWinner
                      ? 'text-emerald-300 font-bold'
                      : 'text-red-400'
                  }
                >
                  {awayWinner ? 'Classificado' : 'Eliminado'}
                </span>
              )}

            </div>
          </div>
        </div>
      </div>
    </Tilt>
  )
}