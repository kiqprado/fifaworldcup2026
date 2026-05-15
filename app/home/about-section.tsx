'use client'

import { useRef, useEffect } from "react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Image from "next/image"
import Trophy from '@/public/trophy.png'

import { HeaderSectionTitle } from '@/app/elements/header-section-title'
import { ShieldUser, Swords, Sheet } from 'lucide-react'
import { CardButton } from '@/app/components/card-button'

gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const trophyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true
      }
    })

    tl.from(headerRef.current, {
      opacity: 0,
      y: 60,
      duration: 1.1,
    })

    tl.from(trophyRef.current, {
      opacity: 0,
      x: 40,
      scale: 0.95,
      duration: 1,
    }, '-=0.7')

    // CARDS
    tl.from('.about-card', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.3,
    }, '-=0.5')

  }, sectionRef)

  return () => ctx.revert()
}, [])

  return (
    <div
      id="about-section"
      ref={sectionRef}
      className='py-6 px-12 space-y-12
      min-h-svh relative overflow-hidden
      bg-zinc-900'
    >
      <div className='flex justify-between pl-6'>
        
        <div ref={headerRef}>
          <HeaderSectionTitle
            prefix="Junho — Julho 2026"
            title="FIFA World Cup"
            highlight="2026™"
            description="A edição de 2026 será a maior Copa do Mundo já realizada, com 48 seleções disputando em 16 cidades dos Estados Unidos, México e Canadá. Serão 104 partidas ao longo de um mês de competição."
            align="left"
          />
        </div>

        <div ref={trophyRef}>
          <Image
            src={Trophy}
            alt='Trophy World Cup 2026'
            height={356}
          />
        </div>
      </div>

      <div className='flex justify-evenly'>
        
        <div className='about-card'>
          <CardButton
            href={'/teams'}
            title="Seleções"
            about="48 Seleções classificadas para a maior Copa da história"
            icon={ShieldUser}
            iconProps={{ className: 'text-lime-500' }}
          />
        </div>

        <div className='about-card'>
          <CardButton
            href={'/groups'}
            title="Grupos"
            about="12 grupos com 4 seleções cada na fase inicial"
            icon={Sheet}
            iconProps={{ className: 'text-sky-500' }}
          />
        </div>

        <div className='about-card'>
          <CardButton
            href={'/matches'}
            title="Partidas"
            about="Calendário completo de jogos e resultados"
            icon={Swords}
            iconProps={{ className: 'text-amber-500' }}
          />
        </div>

      </div>
    </div>
  )
}