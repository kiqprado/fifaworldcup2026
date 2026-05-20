'use client'

import { useBreakpoint } from "../hook/use-media-query"

export function PlayersPositionOnFieldSubtitle() {
  const items = [
    { label: 'Atacante', color: 'bg-red-500' },
    { label: 'Meio', color: 'bg-green-400' },
    { label: 'Volante', color: 'bg-purple-500' },
    { label: 'Lateral', color: 'bg-cyan-400' },
    { label: 'Zagueiro', color: 'bg-blue-500' },
    { label: 'Goleiro', color: 'bg-yellow-400' },
  ]

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

  return (
    <div className={
      mobileRangeFull ? 'w-[70%]' : tabletRangeFull ? 'w-[80%]' : 'w-full max-w-3xl'
    }>
      <div className='p-[1px] rounded-xl bg-gradient-to-r from-amber-400 via-emerald-400 to-purple-500'>
        <div
          className={`px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800
            ${mobileRangeFull
              ? 'grid grid-cols-2 gap-x-6 gap-y-3'
              : 'flex items-center justify-between'
            }
          `}
        >
          {items.map((item) => (
            <div key={item.label} className='flex items-center gap-2 group cursor-default'>
              <div
                className={`w-4 h-4 rounded-full ${item.color}
                  transition-all duration-300 group-hover:scale-125 group-hover:shadow-md`}
              />
              <span className='text-xs tracking-wide text-zinc-300 group-hover:text-white transition-colors duration-200'>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}