'use client'

import { useState, useMemo } from 'react'

import Link from 'next/link'

import { teams } from '@/data/teams'
import { CardTeam } from '@/app/components/card-team'

import { HeaderPageTitle } from '@/app/elements/header-page-title'
import { Input } from '../components/input'
import { NormalizeText } from '../utils/normalize-input-search'

import { useBreakpoint } from '../hook/use-media-query'

export default function TeamsPage() {
  const [ searchValue, setSearchValue ] = useState('')

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

  const orderedTeams = useMemo(() => {
    if (!normalizedSearch) {
      return teams
    }

    return [...teams].sort((a, b) => {
      const aName = NormalizeText(a.name)
      const aCode = NormalizeText(a.code)

      const bName = NormalizeText(b.name)
      const bCode = NormalizeText(b.code)

      const aMatches =
        aName.includes(normalizedSearch) ||
        aCode.includes(normalizedSearch)

      const bMatches =
        bName.includes(normalizedSearch) ||
        bCode.includes(normalizedSearch)

      if (aMatches && !bMatches) {
        return -1
      }

      if (!aMatches && bMatches) {
        return 1
      }

      const aStartsWith = aName.startsWith(normalizedSearch)
      const bStartsWith = bName.startsWith(normalizedSearch)

      if (aStartsWith && !bStartsWith) {
        return -1
      }

      if (!aStartsWith && bStartsWith) {
        return 1
      }

      return 0
    })
  }, [normalizedSearch])

  const highlightedCode =
    normalizedSearch && orderedTeams.length > 0
      ? orderedTeams[0].code
      : null

  return(
    <div
      className='min-h-svh relative'
    >
      <Link
        href={'/'}
        className='absolute top-4 left-4'
      >
        Voltar
      </Link>

      <HeaderPageTitle
        title='Seleções'
        description='48 seleções classificadas para a Copa do Mundo 2026. Conheça a história de cada uma nas Copas.'
      />

      <div className={`absolute z-30 
        ${mobileRangeFull ? 'top-50 left-1/2 -translate-x-1/2 w-[86%]' : 'right-6 top-26 w-[25%]'}  `}>
        <Input
          placeholder='Busque por sua seleção'
          value={searchValue}
          onChange={setSearchValue}
          hasAnyResult={orderedTeams.length > 0}
        />
      </div>
      

      <div
        className='flex flex-wrap gap-6 justify-center space-y-4 py-12'
      >
        {orderedTeams.map(team => (
          <CardTeam
            key={team.code}
            name={team.name}
            code={team.code}
            flag={team.flag}
            history={team.history}
            highlighted={team.code === highlightedCode}
          />
        ))}
      </div>
    </div>
  )
}