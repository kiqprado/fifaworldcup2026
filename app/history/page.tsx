'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Link from 'next/link'
import { editions } from '@/data/history-editions'
import { HistoryEditionCard } from '@/app/components/card-history-edition'
import { HeaderPageTitle } from '@/app/elements/header-page-title'

gsap.registerPlugin(ScrollTrigger)

export default function HistoryPage() {
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        }
      )
    })
  }, [])

  return (
    <div className='min-h-svh relative'>
      <Link href={'/#history-section'} className='absolute top-4 left-4 text-zinc-400 hover:text-white'>
        voltar
      </Link>

      <HeaderPageTitle
        title='História das Copas'
        description='De 1930 a 2022 — cada edição deixou sua marca. Reviva os momentos que definiram o futebol mundial.'
      />

      <div className='flex flex-col gap-10 items-center py-12'>
        {editions.map((edition, index) => (
          <div
            key={edition.year}
            ref={(el) => {
              if (el) cardsRef.current[index] = el
            }}
          >
            <HistoryEditionCard {...edition} />
          </div>
        ))}
      </div>
    </div>
  )
}