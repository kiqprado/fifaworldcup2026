'use client'

import { useState, useMemo, useEffect, useRef, useCallback } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { teams } from '@/data/teams'
import { CardTeam } from '@/app/components/card-team'

import { HeaderPageTitle } from '@/app/elements/header-page-title'
import { Input } from '../components/input'
import { LinkToBack } from '../components/link-to-back'

import { NormalizeText } from '../utils/normalize-input-search'
import { useBreakpoint } from '../hook/use-media-query'

import { ArrowUp } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function TeamsClientPage() {
  const [ searchValue, setSearchValue ] = useState('')
  const [ showScrollTop, setShowScrollTop ] = useState(false)

  const gridRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<gsap.Context | null>(null)

  const normalizedSearch = NormalizeText(searchValue)

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
        
  const mobileRangeFull = isMobileXS || isMobileSM || isMobileMD || isMobileLG || isMobileXL
  const tabletRangeFull = isTabletSM || isTabletMD
  const desktopRangeFull = isDesktopSM || isDesktopMD || isDesktopLG || isDesktopXL || isDesktop2XL

  const animateCards = useCallback(() => {
    if (!gridRef.current) return

    if (animationRef.current) {
      animationRef.current.revert()
    }

    animationRef.current = gsap.context(() => {
      gsap.fromTo(
        '.team-card',
        {
          opacity: 0,
          y: 70,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          ease: 'power3.out',
          stagger: {
            each: 0.07, // um pouco mais rápido que lineup pois são mais cards
            from: 'start',
          },
        }
      )
    }, gridRef)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      animateCards()
    }, 50)

    return () => {
      clearTimeout(timeout)
      animationRef.current?.revert()
    }
  }, [])

  useEffect(() => {
    if (!normalizedSearch && normalizedSearch !== '') return

    const timeout = setTimeout(() => {
      animateCards()
    }, 50)

    return () => clearTimeout(timeout)
  }, [normalizedSearch, animateCards])

  function HandleScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const orderedTeams = useMemo(() => {
    if (!normalizedSearch) return teams

    return [...teams].sort((a, b) => {
      const aName = NormalizeText(a.name)
      const aCode = NormalizeText(a.code)
      const bName = NormalizeText(b.name)
      const bCode = NormalizeText(b.code)

      const aMatches = aName.includes(normalizedSearch) || aCode.includes(normalizedSearch)
      const bMatches = bName.includes(normalizedSearch) || bCode.includes(normalizedSearch)

      if (aMatches && !bMatches) return -1
      if (!aMatches && bMatches) return 1

      const aStartsWith = aName.startsWith(normalizedSearch)
      const bStartsWith = bName.startsWith(normalizedSearch)

      if (aStartsWith && !bStartsWith) return -1
      if (!aStartsWith && bStartsWith) return 1

      return 0
    })
  }, [normalizedSearch])

  const highlightedCode =
    normalizedSearch && orderedTeams.length > 0 ? orderedTeams[0].code : null

  useEffect(() => {
    function HandleScroll() {
      setShowScrollTop(window.scrollY > window.innerHeight * 4)
    }
    window.addEventListener('scroll', HandleScroll)
    return () => window.removeEventListener('scroll', HandleScroll)
  }, [])

  return (
    <div className='min-h-svh relative'>
      <LinkToBack href={'/'} />

      <HeaderPageTitle
        title='Seleções'
        description='48 seleções classificadas para a Copa do Mundo 2026. Conheça a história de cada uma nas Copas.'
      />

      <div className={`absolute z-30 
        ${mobileRangeFull ? 'top-50 left-1/2 -translate-x-1/2 w-[86%]' : 'right-6 top-26 w-[25%]'}`}>
        <Input
          placeholder='Busque por sua seleção'
          value={searchValue}
          onChange={setSearchValue}
          hasAnyResult={orderedTeams.length > 0}
        />
      </div>

      <div
        ref={gridRef}
        className='flex flex-wrap gap-6 justify-center space-y-4 py-12'
      >
        {orderedTeams.map(team => (
          <div key={team.code} className='team-card'>
            <CardTeam
              name={team.name}
              code={team.code}
              flag={team.flag}
              history={team.history}
              highlighted={team.code === highlightedCode}
            />
          </div>
        ))}
      </div>

      {showScrollTop && (
        <button
          onClick={HandleScrollToTop}
          className={`fixed bottom-4 right-4 z-50
          flex items-center justify-center
          px-3 py-3 rounded-xl outline-none
          transition-all duration-300 ease-in-out
          will-change-transform hover:scale-[1.03] active:scale-[0.98]
          font-medium tracking-wide text-black
          bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400
          border border-yellow-300/20
          shadow-[0_0_15px_rgba(255,215,0,0.5)]
          hover:shadow-[0_0_25px_rgba(255,215,0,0.8)]`}
          title='Voltar ao topo da página.'
        >
          <ArrowUp size={22} />
        </button>
      )}
    </div>
  )
}