'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { matches } from '@/data/matches'
import { CardMatch } from '@/app/components/card-match'
import { HeaderPageTitle } from '@/app/elements/header-page-title'

gsap.registerPlugin(ScrollTrigger)

export default function MatchesPage() {
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const cards = cardsRef.current

    cards.forEach((card, index) => {
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
  }, [])

  return (
    <div>
      <Link href={'/'}>Voltar</Link>

      <HeaderPageTitle
        title='Partidas'
        description='72 partidas da fase de grupos. Filtre por grupo para encontrar os jogos.'
      />

      <div className='flex flex-wrap gap-6 justify-center'>
        {matches.map((match, index) => (
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
            />
          </div>
        ))}
      </div>
    </div>
  )
}