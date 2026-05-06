'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import bg from '@/public/stadium-hero.jpg'
import Image from 'next/image'

import { Button } from '@/app/components/button'

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const dividerRef = useRef<HTMLDivElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' }
      })

      tl.from(bgRef.current, {
        scale: 1.2,
        opacity: 0,
        duration: 1.2,
      })

      tl.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.5,
      }, '-=0.8')

      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.7,
      }, '-=0.4')

      tl.from(dividerRef.current, {
        width: 0,
        opacity: 0,
        duration: 0.5,
      }, '-=0.3')

      tl.from(descRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.5,
      }, '-=0.2')

      tl.from(buttonRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.4,
      }, '-=0.2')

      // PARALLAX SUAVE NO SCROLL
      gsap.to(bgRef.current, {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      className='h-svh relative overflow-hidden'
    >
      <Image
        ref={bgRef}
        src={bg}
        alt='Imagem de um estádio com público cheio torcendo por seu time.'
        className='h-full w-full object-cover absolute inset-0 -z-50'
        priority
      />

      <div className='absolute inset-0 bg-black/50 -z-40' />

      <div
        className='h-full flex flex-col gap-4 
        items-center justify-center text-center px-6'
      >
        <h3
          ref={subtitleRef}
          className='uppercase tracking-[0.4em] text-sm text-zinc-300'
        >
          A maior competição do planeta
        </h3>

        <h1
          ref={titleRef}
          className='text-6xl md:text-7xl uppercase leading-tight'
        >
          <span className='block text-amber-300 text-8xl md:text-9xl font-semibold tracking-wider'>
            FIFA
          </span>
          Copa do <br /> Mundo
        </h1>

        <div
          ref={dividerRef}
          className='h-[2px] w-[220px] bg-amber-300 rounded-full'
        />

        <p
          ref={descRef}
          className='max-w-[600px] text-zinc-300 text-sm md:text-base leading-relaxed'
        >
          Desde 1930, a Copa do Mundo une nações em torno da paixão pelo futebol.
          22 edições, bilhões de torcedores e momentos que marcaram a história
          para sempre.
        </p>
      </div>

      <div
        ref={buttonRef}
        className='absolute w-full bottom-8 left-1/2 -translate-x-1/2 
        flex items-center justify-center'
      >
        <Button href={'/about'}>
          Explorar
        </Button>
      </div>
    </div>
  )
}