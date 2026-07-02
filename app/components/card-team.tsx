'use client'

import Link from 'next/link'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'

import { useBreakpoint } from '../hook/use-media-query'

export interface ITeam {
  name: string
  code: string
  flag: string
  history: string
  highlighted?: boolean
}

export function CardTeam({
  name,
  code,
  flag,
  history,
  highlighted = false
}: ITeam) {

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

    function getCardWidth() {
      if (mobileRangeFull) return "w-[80vw] max-w-[20rem]"
      if (tabletRangeFull) return "w-[18rem]"
      return "w-[16.5rem]" 
    }

  return(
    <Tilt
      glareEnable={false}
      scale={1.01}
      tiltMaxAngleX={3}
      tiltMaxAngleY={3}
      perspective={1200}
      transitionSpeed={2500}
      gyroscope={false}
      className="rounded-xl"
    >
      <span
          className="absolute -top-5 left-0 z-20
            text-4xl font-extrabold tracking-widest
            [-webkit-text-stroke:1px_rgb(34,211,238)]
            opacity-80
            drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]
            transition group-hover:opacity-100
          "
        >
          {code}
        </span>
      <div
        className={`${getCardWidth()}
          relative overflow-hidden
          border group rounded-xl border-zinc-500bg-zinc-900
          hover:border-cyan-400
          hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
          ${
            highlighted
              ? "border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.25)]"
              : ""
          }
          transition-all duration-300 ease-in-out
        `}
      >
        <div
          className="pointer-events-none
            absolute inset-0 z-30
            bg-gradient-to-r from-transparent via-white/10 to-transparent
            -translate-x-[150%]
            group-hover:translate-x-[150%]
            transition-transform duration-1000
          "
        />

        <div
          className={`
            relative
            w-full
            overflow-hidden
            ${mobileRangeFull ? "h-56" : "h-46"}
          `}
        >
          <Image
            src={flag}
            alt={code}
            fill
            className="
              object-cover
              scale-110
              transition-all
              duration-300
              group-hover:scale-125
            "
          />
        </div>

        <div className="relative px-5 py-5">

          <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-300" />

          <h3
            className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1.5
              whitespace-nowrap rounded-xl border
              border-cyan-300 bg-zinc-900
              font-bold tracking-wider transition-colors duration-300
              group-hover:border-cyan-200
              group-hover:text-cyan-300
            "
          >
            {name}
          </h3>

          <p
            className="mt-6 h-36 overflow-y-auto px-2
              text-justify text-sm tracking-wide
              scrollbar-dark
            "
          >
            {history}
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              href="/groups"
              title="Fique por dentro dos grupos da Copa"
              className="group/button relative flex-1 px-4 py-2.5
                overflow-hidden rounded-lg
                border border-cyan-400/70 bg-zinc-950
                text-center text-sm font-medium tracking-[0.08em] text-cyan-300
                transition-all duration-300
                hover:border-cyan-200 hover:bg-cyan-400/10 hover:text-cyan-100
                hover:shadow-[0_0_12px_rgba(34,211,238,.35),inset_0_0_8px_rgba(34,211,238,.15)]"
            >
              <span
                  className="absolute inset-0 
                    bg-gradient-to-r from-transparent via-cyan-200/10 to-transparent
                    -translate-x-full group-hover/button:translate-x-full
                    transition-transform duration-700"
              />
              <span className="relative">
                Grupo
              </span>
            </Link>

            <Link
              href={`/lineup/${code}`}
              title={`Veja os detalhes da escalação de ${name}`}
              className="group/button relative flex-1 px-4 py-2.5
                overflow-hidden rounded-lg
                border border-cyan-400/70 bg-zinc-950
                text-center text-sm font-medium tracking-[0.08em] text-cyan-300
                transition-all duration-300
                hover:border-cyan-200 hover:bg-cyan-400/10 hover:text-cyan-100
                hover:shadow-[0_0_12px_rgba(34,211,238,.35),inset_0_0_8px_rgba(34,211,238,.15)]"
            >
              <span
                  className="absolute inset-0 
                    bg-gradient-to-r from-transparent via-cyan-200/10 to-transparent
                    -translate-x-full group-hover/button:translate-x-full
                    transition-transform duration-700"
              />
              <span className="relative">
                Escalação
              </span>
            </Link>
          </div>

        </div>
      </div>
    </Tilt>
  )
}