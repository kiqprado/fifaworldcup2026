'use client'

import { useMemo, useState, useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'

import { deathMatch } from '@/data/death-match'
import { matches } from '@/data/matches'

import { CardTeamsDeathMatchList, CardTeamsOnDeathMatchBracket } from '@/app/components/card-death-match'
import { HeaderPageTitle } from '@/app/elements/header-page-title'
import { Input } from '../components/input'
import { LinkToBack } from '../components/link-to-back'
import { ButtonFilterElement } from '../elements/button-matches-filter'

import { NormalizeText } from '../utils/normalize-input-search'
import { useBreakpoint } from '../hook/use-media-query'

import { LayoutGrid, GitBranch } from 'lucide-react'

interface IDeathMatchClientPageProps {
  teamCode?: string
}

export default function DeathMatchClientPage({ teamCode }: IDeathMatchClientPageProps) {
  const [view, setView] = useState<'list' | 'bracket'>('list')
  const [searchValue, setSearchValue] = useState('')

  const gridRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<gsap.Context | null>(null)

  // BREAKPOINTS
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

  const mobileRangeFull =
    isMobileXS ||
    isMobileSM ||
    isMobileMD ||
    isMobileLG ||
    isMobileXL

  const tabletRangeFull = isTabletSM || isTabletMD

  const desktopRangeFull =
    isDesktopSM ||
    isDesktopMD ||
    isDesktopLG ||
    isDesktopXL ||
    isDesktop2XL

  const animateCards = useCallback(() => {
    if (!gridRef.current) return

    animationRef.current?.revert()

    animationRef.current = gsap.context(() => {
      gsap.fromTo(
        '.group-card',
        {
          opacity: 0,
          y: 70,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          ease: 'power3.out',
          stagger: {
            each: 0.08,
            from: 'start',
          },
        }
      )
    }, gridRef)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => animateCards(), 50)

    return () => {
      clearTimeout(timeout)
      animationRef.current?.revert()
    }
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => animateCards(), 50)

    return () => clearTimeout(timeout)
  }, [searchValue, animateCards])

  const matchedTeams = useMemo(() => {
    const normalizedSearch = NormalizeText(searchValue)

    if (!normalizedSearch) {
      return deathMatch.teams
    }

    return deathMatch.teams.filter(team => {
      const normalizedName = NormalizeText(team.name)
      const normalizedCode = NormalizeText(team.code)

      return (
        normalizedName.includes(normalizedSearch) ||
        normalizedCode.includes(normalizedSearch)
      )
    })
  }, [searchValue])

  const hasAnyResult =
    searchValue.trim() === '' || matchedTeams.length > 0

  return (
  <div className="min-h-svh relative flex flex-col items-center">
    <LinkToBack href="/" />

    <HeaderPageTitle
      title="Semifinais"
      description="Quatro vagas preenchidas. É sangue, suor e vaga na decisão, quem vai resistir?"
    />
    {/*A glória está logo ali. Oito gigantes em campo, quatro vagas na história. Quem vai resistir?*/}

    <div className={`${mobileRangeFull ? 'w-full' : 'w-[80%]'}`}>
      <div
        className={`
          overflow-hidden relative
          ${mobileRangeFull ? 'rounded-b-3xl' : 'rounded-3xl'}
          border border-amber-400/15
          bg-zinc-950/75 backdrop-blur-2xl
          shadow-[0_0_60px_rgba(0,0,0,0.65)]
        `}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.10),transparent_35%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_30%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.06),transparent_35%)]" />

        <div className="relative z-10 p-3">
          <div className="flex flex-col xl:flex-row xl:items-center gap-3">

            <div
              className="
                flex-1
                grid grid-cols-2 gap-4
                rounded-2xl
                border border-white/8
                bg-gradient-to-r
                from-zinc-900/95
                via-zinc-900/85
                to-zinc-900/95
                shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
                xl:min-w-[520px]
                xl:flex-shrink-0
              "
            >
              <ButtonFilterElement
                onClick={() => setView('list')}
                icon={<LayoutGrid size={16} />}
                title="Lista"
                active={view === 'list'}
                accent="amber"
                showPulse={view === 'list'}
              />

              <ButtonFilterElement
                onClick={() => setView('bracket')}
                icon={<GitBranch size={16} />}
                title="Chave"
                active={view === 'bracket'}
                accent="cyan"
                showPulse={view === 'bracket'}
              />
            </div>

            <div className="relative min-w-fit">
              <div className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-amber-400/20 via-cyan-400/10 to-amber-400/20 blur-sm opacity-70" />

              <div className="relative rounded-2xl border border-white/10 bg-zinc-950/90 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <Input
                  value={searchValue}
                  onChange={setSearchValue}
                  hasAnyResult={hasAnyResult}
                  placeholder="Procure uma seleção"
                  variant="min"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    {hasAnyResult ? (
      <div
        ref={gridRef}
        className={`w-full flex gap-8 py-8 justify-center items-center 
          ${mobileRangeFull ? 'flex-col px-4' : 'flex-wrap'}
          ${view !== 'list' && desktopRangeFull ? 'px-26' : ''}
        `}
      >
        {view === 'list' ? (
          <div
            className={`
              group-card
              ${mobileRangeFull ? 'w-full' : 'w-[80%]'}
            `}
          >
            <CardTeamsDeathMatchList
              teams={deathMatch.teams}
              searchValue={searchValue}
            />
          </div>
        ) : (
          matches
            .filter(match => match.stage === 'Quartas')
            .map(match => (
              <div
                key={match.id}
                className={`
                  group-card
                  ${
                    mobileRangeFull
                      ? 'w-full'
                      : tabletRangeFull
                        ? 'w-[40%]'
                        : 'w-[48%]'
                  }
                `}
              >
                <CardTeamsOnDeathMatchBracket
                  match={match}
                />
              </div>
            ))
        )}
      </div>
    ) : (
      <div className="mt-12 rounded-xl border border-zinc-800 bg-zinc-950/70 px-8 py-6">
        <span className="text-zinc-400 text-lg">
          Seleção não encontrada nesta fase, possivelmente desclassificada.
        </span>
      </div>
    )}
  </div>
)
}