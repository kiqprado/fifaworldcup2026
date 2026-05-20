'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { stars } from '@/data/stars'
import { StarPlayerCard } from '@/app/components/player-profile-card'

import { useBreakpoint } from '../hook/use-media-query'

gsap.registerPlugin(ScrollTrigger)

export function LineUpSection() {
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
          start: 'top 75%',
          once: true,
        }
      })

      // HEADER
      tl.from('.lineup-title', {
        opacity: 0,
        y: 60,
        duration: 1,
      })

      // SUBTEXT + LINE
      tl.from('.lineup-sub', {
        opacity: 0,
        y: 30,
        duration: 0.8,
      }, '-=0.6')

      tl.from('.lineup-line', {
        width: 0,
        duration: 0.8,
      }, '-=0.6')

      // CARDS
      tl.from('.lineup-card', {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 0.8,
        stagger: {
          each: 0.18,
          from: 'center',
        }
      }, '-=0.4')

      // PARALLAX
      gsap.to('.lineup-card', {
        y: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return(
    <div
      ref={sectionRef}
      className='min-h-svh py-16 px-6 space-y-16 bg-zinc-900'
    >

      <div className='space-y-3'>
        <h2 className={`lineup-title  
          ${mobileRangeFull ? 'text-4xl' : 'text-6xl'}
          tracking-wide leading-tight`}
        >
          Quem estará em <span className='text-amber-300'>campo</span>?
        </h2>

        <div className={`flex gap-4 
          ${mobileRangeFull ? 'flex-col justify-center' : 'flex-row items-center justify-center'}`}>
          <span 
            className={`lineup-sub 
            ${desktopRangeFull ? 'ml-10 whitespace-nowrap tracking-wide' : 'text-sm tracking-widest'} 
            text-zinc-400`}>
            — conheça abaixo um pequeno giro das estrelas desta edição
          </span>

          <div className={`${mobileRangeFull ? 'hidden' : 'lineup-line h-[2px] flex-1 bg-amber-300/70 rounded-full'}`} />
        </div>
      </div>

      <div
        className={`flex flex-wrap  justify-center space-y-16  ${desktopRangeFull || tabletRangeFull ? 'gap-8' : ''}`}
      >
        {stars.map((star) => (
          <div
            key={star.name}
            className='lineup-card'
          >
            <StarPlayerCard
              image={star.image}
              badge={star.badge}
              name={star.name}
              country={star.country}
              countryCode={star.countryCode}
              position={star.position}
              club={star.club}
              age={star.age}
              debutDate={star.debutDate}
              goals={star.goals}
            />
          </div>
        ))}
      </div>
    </div>
  )
}