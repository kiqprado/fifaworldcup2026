'use client'

import { useMemo, useState, useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'

import { groups } from '@/data/groups'

import { CardGroup, CardGroupQualifier, IGroup} from '@/app/components/card-group'
import { ButtonFilterElement } from '@/app/elements/button-matches-filter'
import { HeaderPageTitle } from '@/app/elements/header-page-title'
import { Input } from '../components/input'
import { LinkToBack } from '../components/link-to-back'

import { NormalizeText } from '../utils/normalize-input-search'
import { useBreakpoint } from '../hook/use-media-query'

import { LayoutGrid, TableOfContents } from 'lucide-react'

interface IGroupsClientPageProps {
  teamCode?: string
}

export default function GroupsClientPage({ teamCode }: IGroupsClientPageProps) {
  const [view, setView] = useState<'card' | 'table'>('card')
  const [searchValue, setSearchValue] = useState('')

  const gridRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<gsap.Context | null>(null)

  // BREAKPOINTS INDIVIDUAIS
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

  const mobileRangeFull = isMobileXS || isMobileSM || isMobileMD || isMobileLG || isMobileXL
  const tabletRangeFull = isTabletSM || isTabletMD
  const desktopRangeFull = isDesktopSM || isDesktopMD || isDesktopLG || isDesktopXL || isDesktop2XL

  const animateCards = useCallback(() => {
    if (!gridRef.current) return

    if (animationRef.current) {
      animationRef.current.revert()
    }

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
  }, [searchValue, view, animateCards])

  function IsTeamSelectedOnGroup(group: IGroup) {
    if (!teamCode) return false
    return group.teams.some(team => team.code === teamCode)
  }

  function DoesGroupMatchSearch(group: IGroup, search: string) {
    const normalizedSearch = NormalizeText(search)
    if (!normalizedSearch) return false

    const normalizedGroupKey = NormalizeText(group.keyGroup)
    const normalizedGroupLabel = NormalizeText(`Grupo ${group.keyGroup}`)

    const matchesGroup =
      normalizedGroupKey === normalizedSearch ||
      normalizedGroupLabel.includes(normalizedSearch)

    const matchesTeam = group.teams.some(team => {
      const normalizedName = NormalizeText(team.name)
      const normalizedCode = NormalizeText(team.code ?? '')
      return normalizedName.includes(normalizedSearch) || normalizedCode.includes(normalizedSearch)
    })

    return matchesGroup || matchesTeam
  }

  const orderedGroups = useMemo(() => {
    const normalizedSearch = NormalizeText(searchValue)
    if (!normalizedSearch) return groups

    return [...groups].sort((a, b) => {
      const aMatches = DoesGroupMatchSearch(a, normalizedSearch)
      const bMatches = DoesGroupMatchSearch(b, normalizedSearch)
      if (aMatches && !bMatches) return -1
      if (!aMatches && bMatches) return 1
      return 0
    })
  }, [searchValue])

  const highlightedGroupKey =
    searchValue.trim()
      ? orderedGroups.find(group => DoesGroupMatchSearch(group, searchValue))?.keyGroup ?? null
      : null

  const hasAnyResult = !searchValue.trim() || highlightedGroupKey !== null

  return (
    <div className="min-h-svh relative flex flex-col items-center">
      <LinkToBack href={'/'} />

      <HeaderPageTitle
        title="Grupos"
        description="12 grupos com 4 seleções cada. A fase de grupos define os classificados para o mata-mata."
      />

      <div className={`${mobileRangeFull ? 'w-full' : 'w-[80%]'}`}>
        <div className={`
          overflow-hidden relative
          ${mobileRangeFull ? 'rounded-b-3xl' : 'rounded-3xl'}
          border border-amber-400/15
          bg-zinc-950/75 backdrop-blur-2xl
          shadow-[0_0_60px_rgba(0,0,0,0.65)]
        `}>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.10),transparent_35%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_30%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.06),transparent_35%)]" />

          <div className="relative z-10 p-3">
            <div className="flex flex-col xl:flex-row xl:items-center gap-3">
              <div className="flex-1 grid grid-cols-2 gap-4 rounded-2xl border border-white/8 bg-gradient-to-r from-zinc-900/95 via-zinc-900/85 to-zinc-900/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] xl:min-w-[520px] xl:flex-shrink-0">
                <ButtonFilterElement
                  onClick={() => setView('card')}
                  icon={<LayoutGrid size={16} />}
                  title="Cards"
                  active={view === 'card'}
                  accent="amber"
                  showPulse={view === 'card'}
                />
                <ButtonFilterElement
                  onClick={() => setView('table')}
                  icon={<TableOfContents size={16} />}
                  title="Classificação"
                  active={view === 'table'}
                  accent="cyan"
                  showPulse={view === 'table'}
                />
              </div>

              <div className="relative min-w-fit">
                <div className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-amber-400/20 via-cyan-400/10 to-amber-400/20 blur-sm opacity-70" />
                <div className="relative rounded-2xl border border-white/10 bg-zinc-950/90 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <Input
                    value={searchValue}
                    onChange={setSearchValue}
                    hasAnyResult={hasAnyResult}
                    placeholder="Procure sua seleção"
                    variant="min"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={gridRef}
        className={`flex flex-wrap justify-center gap-8 py-8 ${mobileRangeFull ? 'px-6' : ''}`}
      >
        {orderedGroups.map(group => {
          const highlight =
            IsTeamSelectedOnGroup(group) ||
            group.keyGroup === highlightedGroupKey

          return (
            <div key={group.keyGroup} className='group-card'>
              {view === 'card' ? (
                <CardGroup
                  keyGroup={group.keyGroup}
                  teams={group.teams}
                  highlight={highlight}
                />
              ) : (
                <CardGroupQualifier
                  keyGroup={group.keyGroup}
                  teams={group.teams}
                  highlight={highlight}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}