'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import { HeaderSectionTitle } from '@/app/elements/header-section-title'
import { CupSummaryTimeLine } from '@/app/elements/cup-summary-timeline'
import { VerticalDivider } from '@/app/elements/divider-vertical'
import { Button } from '@/app/components/button'
import { DetailsEditionSummary } from '@/app/elements/details-edition-summary'

import { useBreakpoint } from '../hook/use-media-query'

export function HistorySection() {
  const sectionRef = useRef<HTMLDivElement>(null)

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
          start: 'top 70%',
          once: true,
        }
      })

      // HEADER
      tl.from('.history-header', {
        opacity: 0,
        y: 40,
        duration: 0.7,
      })

      // STATS
      tl.from('.history-stat', {
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.15,
      }, '-=0.3')

      //ITEMS
      tl.from('.timeline-item', {
        opacity: 0,
        y: 35,
        duration: 0.5,
        stagger: 0.18,
      }, '-=0.2')

      // DIVIDERS
      tl.from('.timeline-divider', {
        opacity: 0,
        scaleY: 0,
        transformOrigin: 'top',
        duration: 0.4,
        stagger: 0.18,
      }, '-=1')

      // CTA
      tl.from('.history-cta', {
        opacity: 0,
        y: 20,
        duration: 0.5,
      }, '-=0.3')

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // HistorySection.tsx
return (
  <div
    id='history-section'
    ref={sectionRef}
    className='relative flex flex-col gap-10 bg-zinc-800 py-10 md:gap-14'
  >
    <div className='history-header'>
      <HeaderSectionTitle
        title='A História do Futebol Mundial'
        description='Mais de 90 anos de emoção, glória e tradição nos gramados do mundo.'
        align='center'
      />
    </div>

    <div
      className='
        grid grid-cols-2 gap-4 px-4
        sm:gap-6 sm:px-8
        md:grid-cols-4 md:gap-8 md:px-8
        lg:gap-12 lg:px-12
      '
    >
      <div className='history-stat'>
        <DetailsEditionSummary
          detail='22'
          data='Edições realizadas'
        />
      </div>

      <div className='history-stat'>
        <DetailsEditionSummary
          detail='8'
          data='Países campeões'
        />
      </div>

      <div className='history-stat'>
        <DetailsEditionSummary
          detail='5'
          data='Títulos do Brasil'
        />
      </div>

      <div className='history-stat'>
        <DetailsEditionSummary
          detail='900+'
          data='Gols em finais'
        />
      </div>
    </div>

    {/* Timeline */}
    <div
      className='
        flex flex-col gap-3
        px-4
        sm:px-6
        md:px-10
        lg:px-20
        xl:px-32
        desk:px-40
      '
    >
      <div className='timeline-item'>
        <CupSummaryTimeLine
          date='1930'
          preview='Primeira Copa no Uruguai — 13 seleções disputaram o torneio inaugural.'
        />
      </div>

      <div className='timeline-divider'>
        <VerticalDivider />
      </div>

      <div className='timeline-item'>
        <CupSummaryTimeLine
          date='1958'
          preview='O Brasil de Pelé conquista seu primeiro título na Suécia, aos 17 anos.'
        />
      </div>

      <div className='timeline-divider'>
        <VerticalDivider />
      </div>

      <div className='timeline-item'>
        <CupSummaryTimeLine
          date='1970'
          preview='Brasil se torna tricampeão no México com o time considerado o maior da história.'
        />
      </div>

      <div className='timeline-divider'>
        <VerticalDivider />
      </div>

      <div className='timeline-item'>
        <CupSummaryTimeLine
          date='2002'
          preview='Pentacampeonato brasileiro na Copa Japão-Coreia com Ronaldo e Rivaldo.'
        />
      </div>

      <div className='timeline-divider'>
        <VerticalDivider />
      </div>

      <div className='timeline-item'>
        <CupSummaryTimeLine
          date='2022'
          preview='Argentina vence a França nos pênaltis em final épica no Catar.'
        />
      </div>
    </div>

    <div className={`history-cta self-center ${mobileRangeFull ? 'px-8' : 'px-4'}`}>
      <Button
        href='/history'
        variant='default'
        size={`${mobileRangeFull ? 'md' : 'lg'}`}
        color='gold'
      >
        Conheça a história das Copas
      </Button>
    </div>
  </div>
)
}