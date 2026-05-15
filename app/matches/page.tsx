'use client'

import { useEffect, useRef, useState, useMemo } from 'react'
import Link from 'next/link'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { matches } from '@/data/matches'
import { CardMatch } from '@/app/components/card-match'
import { HeaderPageTitle } from '@/app/elements/header-page-title'
import { Input } from '../components/input'
import { ButtonFilterElement} from '@/app/elements/button-matches-filter'

import { NormalizeText } from '../utils/normalize-input-search'
import { NormalizeDate, CreateMatchDate, IsSameDate, AddDays } from '@/app/utils/nomalize-date'

gsap.registerPlugin(ScrollTrigger)

type TDateFilter = 'upcoming' | 'yesterday' | 'today' | 'tomorrow'

export default function MatchesPage() {
  const cardsRef = useRef<HTMLDivElement[]>([])
  const [ searchValue, setSearchValue ] = useState('')
  const [dateFilter, setDateFilter] = useState<TDateFilter>('upcoming')

  function DoesMatchSearch(match: typeof matches[number], search: string) {
    const normalizedSearch = NormalizeText(search)

    if (!normalizedSearch) {
      return false
    }

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
      match.city,
    ]

    return fields.some(field =>
      NormalizeText(field).includes(normalizedSearch)
    )
  }

  function DoesMatchDateFilter(match: typeof matches[number]) {
    const mockedToday = new Date(2026, 5, 13)
    // const today = NormalizeDate(new Date())
    const today = NormalizeDate(mockedToday)
    const yesterday = AddDays(today, -1)
    const tomorrow = AddDays(today, 1)

    const matchDate = CreateMatchDate(match.date)

    if (dateFilter === 'yesterday') {
      return IsSameDate(matchDate, yesterday)
    }

    if (dateFilter === 'today') {
      return IsSameDate(matchDate, today)
    }

    if (dateFilter === 'tomorrow') {
      return IsSameDate(matchDate, tomorrow)
    }

    return matchDate >= today
  }

  function HandleClearFilters() {
    setSearchValue('')
    setDateFilter('upcoming')
  }

  const hasActiveFilters =
  searchValue.trim().length > 0 ||
  dateFilter !== 'upcoming'

  const orderedMatches = useMemo(() => {
    const normalizedSearch = NormalizeText(searchValue)

    if (normalizedSearch) {
      return [...matches].sort((a, b) => {
        const aMatches = DoesMatchSearch(a, normalizedSearch)
        const bMatches = DoesMatchSearch(b, normalizedSearch)

        if (aMatches && !bMatches) {
          return -1
        }

        if (!aMatches && bMatches) {
          return 1
        }

        return 0
      })
    }

    return matches.filter(DoesMatchDateFilter)
  }, [searchValue, dateFilter])

  const highlightedMatchId = searchValue.trim()
    ? orderedMatches.find(match =>
        DoesMatchSearch(match, searchValue)
      )?.id ?? null
    : null

  useEffect(() => {
    const cards = cardsRef.current

    cards.forEach((card, index) => {
      if (!card) return

      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 24,
          filter: 'blur(8px)',
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
            start: 'top 90%',
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [orderedMatches])

  const hasAnyResult =
    !searchValue.trim() || highlightedMatchId !== null

  cardsRef.current = []

  return (
    <div className='min-h-svh relative'>
      <Link href={'/'} className='absolute top-4 left-4'>Voltar</Link>

      <HeaderPageTitle
        title='Partidas'
        description='72 partidas da fase de grupos. Filtre por grupo para encontrar os jogos.'
      />
      
    <div className="w-full">
      <div
        className="
          relative  rounded-3xl
          border border-amber-400/15
          bg-zinc-950/75 backdrop-blur-2xl
          shadow-[0_0_60px_rgba(0,0,0,0.65)]
        "
      >
        {/* Glow decorativo */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.10),transparent_35%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_30%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.06),transparent_35%)]"
        />
        
        {hasActiveFilters && (
          <button
            onClick={HandleClearFilters}
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

            <span className="hidden sm:inline">Limpar filtros</span>
          </button>
        )}

        <div className="relative z-10 p-3 ">
          <div
            className="
              flex flex-col xl:flex-row
              xl:items-center
              gap-3
            "
          >
            {/* MENU DE FILTROS */}
            <div
              className=" flex-1
                grid grid-cols-3 gap-4
                rounded-2xl
                border border-white/8
                bg-gradient-to-r
                from-zinc-900/95
                via-zinc-900/85
                to-zinc-900/95
                shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
                xl:min-w-[680px]
                xl:flex-shrink-0
              "
            >

              <ButtonFilterElement
                title="O que rolou ontem"
                active={dateFilter === 'yesterday'}
                accent="amber"
                onClick={() => setDateFilter('yesterday')}
              />

              <ButtonFilterElement
                title="Jogos do dia"
                active={dateFilter === 'today'}
                accent="cyan"
                showPulse
                onClick={() => setDateFilter('today')}
              />

              <ButtonFilterElement
                title="O que vem amanhã?"
                active={dateFilter === 'tomorrow'}
                accent="purple"
                onClick={() => setDateFilter('tomorrow')}
              />
            </div>

            <div className="relative min-w-fit">
              <div
                className="
                  pointer-events-none absolute -inset-[1px]
                  rounded-2xl
                  bg-gradient-to-r
                  from-amber-400/20
                  via-cyan-400/10
                  to-amber-400/20
                  blur-sm
                  opacity-70
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
          </div>
        </div>
      </div>
    </div>
      

      <div className='flex flex-wrap gap-6 py-12 justify-center'>
        {orderedMatches.map((match, index) => (
          <div
            key={match.id}
            ref={(el) => {
              if (el) cardsRef.current[index] = el
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
              stadiumView={match.stadiumView}
              city={match.city}
              highlighted={match.id === highlightedMatchId}
            />
          </div>
        ))}
      </div>
    </div>
  )
}