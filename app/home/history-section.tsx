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

export function HistorySection() {
  const sectionRef = useRef<HTMLDivElement>(null)

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

  return(
    <div
      ref={sectionRef}
      className='py-10 relative flex flex-col gap-14 bg-zinc-800'
    >

      <div className='history-header'>
        <HeaderSectionTitle
          title='A História do Futebol Mundial'
          description='Mais de 90 anos de emoção, glória e tradição nos gramados do mundo.'
          align='center'
        />
      </div>

      <div className='px-12 flex gap-12 justify-evenly'>
        <div className='history-stat'>
          <DetailsEditionSummary detail={'22'} data='Edições realizadas' />
        </div>
        <div className='history-stat'>
          <DetailsEditionSummary detail={'8'} data='Países campeões' />
        </div>
        <div className='history-stat'>
          <DetailsEditionSummary detail={'5'} data='Títulos do Brasil' />
        </div>
        <div className='history-stat'>
          <DetailsEditionSummary detail={'900+'} data='Gols em finais' />
        </div>
      </div>

      <div className='px-40 flex flex-col gap-3'>
        <div className='timeline-item'>
          <CupSummaryTimeLine
            date='1930'
            preview='Primeira Copa no Uruguai — 13 seleções disputaram o torneio inaugural.'
          />
        </div>

        <div className='timeline-divider'>
          <VerticalDivider/>
        </div>

        <div className='timeline-item'>
          <CupSummaryTimeLine
            date='1958'
            preview='O Brasil de Pelé conquista seu primeiro título na Suécia, aos 17 anos.'
          />
        </div>

        <div className='timeline-divider'>
          <VerticalDivider/>
        </div>

        <div className='timeline-item'>
          <CupSummaryTimeLine
            date='1970'
            preview='Brasil se torna tricampeão no México com o time considerado o maior da história.'
          />
        </div>

        <div className='timeline-divider'>
          <VerticalDivider/>
        </div>

        <div className='timeline-item'>
          <CupSummaryTimeLine
            date='2002'
            preview='Pentacampeonato brasileiro na Copa Japão-Coreia com Ronaldo e Rivaldo.'
          />
        </div>

        <div className='timeline-divider'>
          <VerticalDivider/>
        </div>

        <div className='timeline-item'>
          <CupSummaryTimeLine
            date='2022'
            preview='Argentina vence a França nos pênaltis em final épica no Catar.'
          />
        </div>

      </div>

      <div className='self-center history-cta'>
        <Button
          href={'/history'}
          variant='default'
          size='lg'
          color='gold'
        >
          Conheça mais da história nas Copas
        </Button>
      </div>
    </div>
  )
}