'use client'

import { useRef, useEffect } from "react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Image from "next/image"
import trophy from '@/public/trophy.png'

import { useBreakpoint } from "../hook/use-media-query"

import { HeaderSectionTitle } from '@/app/elements/header-section-title'
import { CardButton } from '@/app/components/card-button'

import { ShieldUser, Swords, Sheet, Trophy } from 'lucide-react'


gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const trophyRef = useRef<HTMLDivElement>(null)

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
      className='py-6 px-6 space-y-12
      min-h-svh relative overflow-hidden
      bg-zinc-900'
    >
      <div className={`flex justify-between relative ${ desktopRangeFull ? 'pl-6' : ''}`}>
        
        <div ref={headerRef}>
          <HeaderSectionTitle
            prefix="Junho — Julho 2026"
            title="FIFA World Cup"
            highlight="2026™"
            description="A edição de 2026 será a maior Copa do Mundo já realizada, com 48 seleções disputando em 16 cidades dos Estados Unidos, México e Canadá. Serão 104 partidas ao longo de um mês de competição."
            align="left"
          />
        </div>

        <div ref={trophyRef} className={`${mobileRangeFull ? 'absolute opacity-15' : 'visible'}`}>
          <Image
            src={trophy}
            alt='Trophy World Cup 2026'
            height={356}
          />
        </div>
      </div>

      <div 
        className={`
          flex ${mobileRangeFull || tabletRangeFull ? 'flex-col gap-6 justify-center' : 'flex-wrap gap-8 justify-center'}`
        }
      >
        
        <div className='about-card'>
          <CardButton
            href={'/teams'}
            title="Seleções"
            about="48 Seleções e a maior Copa da história"
            icon={ShieldUser}
            iconProps={{ className: 'text-lime-500' }}
            desktopRangeFull={desktopRangeFull}
          />
        </div>

        <div className='about-card'>
          <CardButton
            href={'/matches'}
            title="Partidas"
            about="Calendário completo de jogos e resultados"
            icon={Swords}
            iconProps={{ className: 'text-red-500' }}
            desktopRangeFull={desktopRangeFull}
          />
        </div>

         <div className='about-card'>
          <CardButton
            href={'/groups'}
            title="Fase de Grupos"
            about="Reveja todo o histórico das seleções"
            icon={Sheet}
            iconProps={{ className: 'text-blue-500' }}
            desktopRangeFull={desktopRangeFull}
          />
        </div>

        <div className='about-card'>
          <CardButton
            href={'/deathmatch'}
            title="Fase Eliminatória"
            about="Confira todo o histórico do Mata Mata"
            icon={Trophy}
            iconProps={{ className: 'text-amber-500' }}
            desktopRangeFull={desktopRangeFull}
          />
        </div>

      </div>
    </div>
  )
}