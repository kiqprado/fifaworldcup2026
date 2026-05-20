'use client'

import { useBreakpoint } from '@/app/hook/use-media-query'
import { SoccerFieldLineup } from '@/app/components/soccer-field-lineup'
import { PlayersPositionOnFieldSubtitle } from '@/app/elements/players-position-on-field-subtitle'
import { CardSquadLineUp } from '@/app/components/card-squad-lineup'
import { Player } from '@/app/components/card-squad-lineup'

interface LineupClientProps {
  formation: string
  starters: Player[]
  reserves: Player[]
}

export function LineupClient({ formation, starters, reserves }: LineupClientProps) {
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

  return (
    <>
      <SoccerFieldLineup
        players={starters}
        formation={formation}
      />

      <div
        className={`flex flex-col gap-12 items-center
          ${mobileRangeFull ? 'w-full px-4' : tabletRangeFull ? 'w-[90%]' : 'w-[80%]'}
        `}
      >
        <PlayersPositionOnFieldSubtitle />

        <div
          className={`w-full
            ${mobileRangeFull ? 'flex flex-col gap-8 justify-center items-center' : 'flex justify-evenly'}
          `}
        >
          <CardSquadLineUp
            title='Titulares'
            players={starters}
            variant='starter'
          />
          <CardSquadLineUp
            title='Reservas'
            players={reserves}
            variant='reserve'
          />
        </div>
      </div>
    </>
  )
}