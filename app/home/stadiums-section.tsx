'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { HeaderSectionTitle } from '@/app/elements/header-section-title'
import { stadiums } from '@/data/stadiums'
import { StadiumCard } from '@/app/components/stadium-profile-card'

gsap.registerPlugin(ScrollTrigger)

export function StadiumsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

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
      tl.from('.stadium-header', {
        opacity: 0,
        y: 40,
        duration: 1,
      })

      // CARDS
      tl.from('.stadium-card', {
        opacity: 0,
        x: -60,
        y: 20,
        scale: 0.97,
        duration: 0.9,
        stagger: 0.18,
      }, '-=0.4')

      gsap.to('.stadium-card', {
        y: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.3,
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return(
    <div
      ref={sectionRef}
      className='min-h-svh py-16 space-y-16 bg-zinc-950'
    >
      {/* HEADER */}
      <div className='stadium-header text-center px-6'>
        <HeaderSectionTitle
          title='Estádios da Copa 2026'
          description='16 arenas espetaculares espalhadas pelos EUA, México e Canadá receberão os jogos da maior Copa da história.'
          align='center'
        />
      </div>

      <div className='flex flex-wrap justify-center gap-6 px-8'>
        {stadiums.map(stadium =>(
          <div
            key={stadium.name}
            className='stadium-card'
          >
            <StadiumCard
              image={stadium.image}
              name={stadium.name}
              city={stadium.city}
              country={stadium.country}
              capacity={stadium.capacity}
              curiosity={stadium.curiosity}
              mapsQuery={stadium.mapsQuery}
            />
          </div>
        ))}
      </div>
    </div>
  )
}