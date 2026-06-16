'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { matches } from '@/data/matches'

import { CardMatch } from '@/app/components/card-match'
import { HeaderPageTitle } from '@/app/elements/header-page-title'
import { ButtonFilterElement } from '@/app/elements/button-matches-filter'
import { Input } from '../components/input'
import { LinkToBack } from '../components/link-to-back'

import {
  NormalizeDate,
  CreateMatchDate,
  IsSameDate,
  AddDays
} from '@/app/utils/nomalize-date'

import { NormalizeText } from '../utils/normalize-input-search'
import { useBreakpoint } from '@/app/hook/use-media-query'

import { ArrowUp, ArrowDownAZ } from 'lucide-react'

import { toast } from 'sonner'

gsap.registerPlugin(ScrollTrigger)

type TDateFilter = | 'upcoming' | 'yesterday' | 'today' | 'tomorrow'

type TSortMode = | 'group' | 'team' | 'favorites'

export default function MatchesClientPage() {
  const cardsRef = useRef<HTMLDivElement[]>([])

  const [searchValue, setSearchValue] = useState('')
  const [dateFilter, setDateFilter] = useState<TDateFilter>('upcoming')

  const [sortMode, setSortMode] = useState<TSortMode>('group')
  const [favorites, setFavorites] = useState<number[]>(() => {
    if ( typeof window === 'undefined') {
      return []
    }

    const storedFavorites = localStorage.getItem('favorites')

    if (!storedFavorites) { return []}

    try {
      return JSON.parse(
        storedFavorites
      )
    } catch {
      return []
    }
  })

  const [showScrollTop, setShowScrollTop] = useState(false)

  function HandleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  function DoesMatchSearch(match: typeof matches[number], search: string) {
    const normalizedSearch = NormalizeText(search)

    if (!normalizedSearch) { return false }

    const fields = [
      match.group,
      `Grupo ${match.group}`,
      match.date,
      match.time,
      match.home.name,
      match.home.code,
      match.away.name,
      match.away.code,
      match.stadium,
      match.city
    ]

    return fields.some(field =>
      NormalizeText(field).includes(
        normalizedSearch
      )
    )
  }

  function DoesMatchDateFilter( match: typeof matches[number], filter: TDateFilter) {
    const today = NormalizeDate(new Date())
    const yesterday = AddDays(today, -1)
    const tomorrow = AddDays(today, 1)
    const matchDate = CreateMatchDate(match.date)

    if (filter === 'yesterday') {
      return IsSameDate(
        matchDate,
        yesterday
      )
    }

    if (filter === 'today') {
      return IsSameDate(
        matchDate,
        today
      )
    }

    if (filter === 'tomorrow') {
      return IsSameDate(
        matchDate,
        tomorrow
      )
    }

    return matchDate >= today
  }

  function HandleFavorite(matchId: number) {
    setFavorites(prev => {
      const alreadyFavorite =
        prev.includes(matchId)

      const updatedFavorites =
        alreadyFavorite
          ? prev.filter(id => id !== matchId)
          : [...prev, matchId]

      localStorage.setItem(
        'favorites',
        JSON.stringify(updatedFavorites)
      )

      if (alreadyFavorite) {
        toast.info(
          'Partida removida dos favoritos'
        )
      }

      if (!alreadyFavorite) {
        toast.success(
          'Partida adicionada aos favoritos'
        )
      }

      return updatedFavorites
    })
  }

  function HandleClearFilters() {
    setSearchValue('')
    setDateFilter('upcoming')
  }


  function IsOldMatch( match: typeof matches[number]) {
    const today = NormalizeDate(new Date())
    const yesterday = AddDays(today, -1)

    const matchDate =
      CreateMatchDate(match.date)

    return matchDate < yesterday
  }

  const hasActiveFilters =
    searchValue.trim().length > 0 ||
    dateFilter !== 'upcoming'
  
  const filteredMatches = useMemo(() => {
    return matches.filter(match => {

      const isSearching =
        searchValue.trim().length > 0

      const hideOldMatches =
        dateFilter === 'upcoming' &&
        !isSearching

      if (
        hideOldMatches &&
        IsOldMatch(match)
      ) {
        return false
      }

      const matchesSearch =
        isSearching
          ? DoesMatchSearch(
              match,
              searchValue
            )
          : true

      const matchesDate =
        DoesMatchDateFilter(
          match,
          dateFilter
        )

      return (
        matchesSearch &&
        matchesDate
      )
    })
  }, [ searchValue, dateFilter ])

  const sortedMatches = useMemo(() => {
    const copiedMatches = [...filteredMatches]

    if (sortMode === 'group') {
      return copiedMatches.sort(
        (a, b) =>
          a.group.localeCompare(b.group)
      )
    }

    if (sortMode === 'team') {
      return copiedMatches.sort(
        (a, b) =>
          a.home.name.localeCompare(b.home.name)
      )
    }

    if (sortMode === 'favorites') {
      return copiedMatches.sort(
        (a, b) => {
          const aFavorite =
            favorites.includes(a.id)

          const bFavorite =
            favorites.includes(b.id)

          return Number(bFavorite) - Number(aFavorite)
        }
      )
    }

    return copiedMatches
  }, [ filteredMatches, sortMode, favorites])

 const highlightedMatchId =
  sortedMatches[0]?.id ?? null

  // BREAKPOINTS
  const isMobileXS =
    useBreakpoint('mobileXS')
  const isMobileSM =
    useBreakpoint('mobileSM')
  const isMobileMD =
    useBreakpoint('mobileMD')
  const isMobileLG =
    useBreakpoint('mobileLG')
  const isMobileXL =
    useBreakpoint('mobileXL')
  const isTabletSM =
    useBreakpoint('tabletSM')
  const isTabletMD =
    useBreakpoint('tabletMD')

  const mobileRangeFull =
    isMobileXS ||
    isMobileSM ||
    isMobileMD ||
    isMobileLG ||
    isMobileXL

  const tabletRangeFull =
    isTabletSM ||
    isTabletMD

  useEffect(() => {
    const cards = cardsRef.current

    cards.forEach((card, index) => {
      if (!card) {
        return
      }

      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 24,
          filter: 'blur(8px)'
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.7,
          ease: 'power2.out',
          delay: index * 0.04,
          scrollTrigger: {
            trigger: card,
            start: 'top 90%'
          }
        }
      )
    })

    return () => {
      ScrollTrigger
        .getAll()
        .forEach(trigger =>
          trigger.kill()
        )
    }
  }, [sortedMatches])

  useEffect(() => {
    function HandleScroll() {
      setShowScrollTop(
        window.scrollY >
          window.innerHeight * 4
      )
    }

    window.addEventListener(
      'scroll',
      HandleScroll
    )

    return () =>
      window.removeEventListener(
        'scroll',
        HandleScroll
      )
  }, [])

  const hasAnyResult =
    !searchValue.trim() ||
    highlightedMatchId !== null

  return (
    <div className="min-h-svh relative">
      <LinkToBack href="/" />

      <HeaderPageTitle
        title="Partidas"
        description="72 partidas da fase de grupos. Utilize os filtros para encontrar os jogos."
      />

      <div className="w-full">
        <div
          className="
            relative rounded-3xl
            border border-amber-400/15
            bg-zinc-950/75 backdrop-blur-2xl
            shadow-[0_0_60px_rgba(0,0,0,0.65)]
          "
        >
          <div
            className="
              pointer-events-none absolute inset-0
              bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.10),transparent_35%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_30%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.06),transparent_35%)]
            "
          />

          {hasActiveFilters && (
            <button
              onClick={
                HandleClearFilters
              }
              title="Limpar filtros"
              className="
                absolute -bottom-8 right-4 z-30
                group inline-flex items-center gap-2
                px-6 py-1.5 rounded-xl
                text-xs md:text-sm font-semibold tracking-wide
                text-amber-300
                border border-amber-400/20
                bg-amber-400/5 backdrop-blur-md
                hover:bg-amber-400/10
                hover:border-amber-300/35
                hover:text-amber-200
                transition-all duration-300
              "
            >
              <span
                className="
                  flex items-center justify-center
                  w-4 h-4 rounded-full
                  bg-amber-400/10
                  group-hover:rotate-90
                  transition-transform duration-500
                "
              >
                ✕
              </span>

              <span className="hidden sm:inline">
                Limpar filtros
              </span>
            </button>
          )}

          <div className="relative z-10 p-3">
            <div className="flex flex-col xl:flex-row xl:items-center gap-3">

              <div
                className="
                  xl:w-1/2
                  grid grid-cols-3 gap-4
                  rounded-2xl
                  border border-white/8
                  bg-gradient-to-r from-zinc-900/95 via-zinc-900/85 to-zinc-900/95
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
                "
              >
                <ButtonFilterElement
                  title={mobileRangeFull || tabletRangeFull ? 'Ontem' : 'O que rolou ontem'}
                  active={dateFilter === 'yesterday'}
                  accent="amber"
                  onClick={() => setDateFilter('yesterday')}
                />
                <ButtonFilterElement
                  title={mobileRangeFull || tabletRangeFull ? 'Hoje' : 'Jogos do dia'}
                  active={dateFilter === 'today'}
                  accent="cyan"
                  showPulse
                  onClick={() => setDateFilter('today')}
                />
                <ButtonFilterElement
                  title={mobileRangeFull || tabletRangeFull ? 'Amanhã' : 'O que vem amanhã?'}
                  active={dateFilter === 'tomorrow'}
                  accent="purple"
                  onClick={() => setDateFilter('tomorrow')}
                />
              </div>
              <div className="xl:w-1/2 flex flex-row gap-3">
                <div className="relative flex-1">
                  <div
                    className="
                      pointer-events-none absolute -inset-[1px]
                      rounded-2xl
                      bg-gradient-to-r from-amber-400/20 via-cyan-400/10 to-amber-400/20
                      blur-sm opacity-70
                    "
                  />
                  <div
                    className="
                      relative rounded-2xl
                      border border-white/10
                      bg-zinc-950/90 backdrop-blur-xl
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
                    "
                  >
                    <Input
                      value={searchValue}
                      onChange={setSearchValue}
                      hasAnyResult={hasAnyResult}
                      placeholder="Procure sua seleção"
                    />
                  </div>
                </div>
                
                <div
                  className="
                    min-w-fit flex items-center px-4
                    rounded-2xl border border-zinc-700
                    bg-zinc-900/90 backdrop-blur-xl
                  "
                >
                  <div className="flex items-center gap-3">
                    <ArrowDownAZ size={18} className="text-zinc-400" />
                    <select
                      value={sortMode}
                      onChange={e => setSortMode(e.target.value as TSortMode)}
                      className="appearance-none bg-transparent text-sm text-zinc-200 outline-none cursor-pointer"
                    >
                      <option value="group">Grupo A-Z</option>
                      <option value="team">Seleção A-Z</option>
                      <option value="favorites">Favoritos</option>
                    </select>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`
          flex flex-wrap gap-6 py-12
          ${
            mobileRangeFull
              ? 'px-6'
              : ''
          }
          justify-center
        `}
      >
        {sortedMatches.map(
          (match, index) => (
            <div
              key={match.id}
              ref={el => {
                if (el) {
                  cardsRef.current[
                    index
                  ] = el
                }
              }}
            >
              <CardMatch
                id={match.id}
                group={match.group}
                date={match.date}
                time={match.time}
                home={match.home}
                away={match.away}
                stadium={match.stadium}
                stadiumView={
                  match.stadiumView
                }
                result={match.result}
                city={match.city}
                broadcasts={match.broadcasts}
                highlighted={
                  match.id ===
                  highlightedMatchId
                }
                isFavorite={favorites.includes(
                  match.id
                )}
                onFavorite={
                  HandleFavorite
                }
              />
            </div>
          )
        )}
      </div>

      {showScrollTop && (
        <button
          onClick={
            HandleScrollToTop
          }
          className="
            fixed bottom-4 right-4 z-50
            flex items-center justify-center
            px-3 py-3 rounded-xl outline-none
            transition-all duration-300 ease-in-out
            will-change-transform
            hover:scale-[1.03]
            active:scale-[0.98]
            font-medium tracking-wide
            text-black
            bg-gradient-to-r
            from-yellow-600
            via-yellow-500
            to-yellow-400
            border border-yellow-300/20
            shadow-[0_0_15px_rgba(255,215,0,0.5)]
            hover:shadow-[0_0_25px_rgba(255,215,0,0.8)]
          "
          title="Voltar ao início."
        >
          <ArrowUp size={22} />
        </button>
      )}
    </div>
  )
}