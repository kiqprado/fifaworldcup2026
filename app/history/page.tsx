'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { editions } from '@/data/history-editions'
import { HistoryEditionCard } from '@/app/components/card-history-edition'
import { HeaderPageTitle } from '@/app/elements/header-page-title'
import { LinkToBack } from '../components/link-to-back'

import { useBreakpoint } from '@/app/hook/use-media-query'

gsap.registerPlugin(ScrollTrigger)

export default function HistoryPage() {
  const cardsRef = useRef<HTMLDivElement[]>([])

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
      <LinkToBack
        href={'/#history-section'}
      />

      <HeaderPageTitle
        title='História das Copas'
        description='De 1930 a 2026 — cada edição deixou sua marca. Reviva os momentos que definiram o futebol mundial.'
      />

      <div className='flex flex-col gap-10 items-center py-12 px-6'>
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