'use client'

import { useEffect, useRef, useState, useMemo } from 'react'
import Link from 'next/link'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { matches } from '@/data/matches'
import { CardMatch } from '@/app/components/card-match'
import { HeaderPageTitle } from '@/app/elements/header-page-title'
import { Input } from '../components/input'

import { NormalizeText } from '../utils/normalize-input-search'

gsap.registerPlugin(ScrollTrigger)

export default function MatchesPage() {
  const cardsRef = useRef<HTMLDivElement[]>([])
  const [ searchValue, setSearchValue ] = useState('')

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

  const orderedMatches = useMemo(() => {
    const normalizedSearch = NormalizeText(searchValue)

    if (!normalizedSearch) {
      return matches
    }

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
  }, [searchValue])

  const highlightedMatchId =
  searchValue.trim()
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
    <div>
      <Link href={'/'}>Voltar</Link>

      <HeaderPageTitle
        title='Partidas'
        description='72 partidas da fase de grupos. Filtre por grupo para encontrar os jogos.'
      />

      <Input
        value={searchValue}
        onChange={setSearchValue}
        hasAnyResult={hasAnyResult}
      />

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