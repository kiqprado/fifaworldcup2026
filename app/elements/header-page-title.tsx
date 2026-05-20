import { useBreakpoint } from '@/app/hook/use-media-query'

interface IHeaderPageTitle {
  title: string
  description: string
}

export function HeaderPageTitle({ title, description }: IHeaderPageTitle) {
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
    
  return(
    <div
      className={`w-full flex flex-col gap-6 justify-center
        ${mobileRangeFull ? 'px-6 py-14' : 'px-12 py-12'}
        bg-[url('/header-bg.png')] bg-cover  bg-no-repeat
        ${mobileRangeFull || tabletRangeFull ? 'bg-right' : 'bg-center'}`}
    >
      <h1
        className={`${mobileRangeFull ? 'text-4xl text-nowrap' : 'text-6xl'} font-bold text-amber-300 tracking-wider`}
      >{title}</h1>
      <span
        className={`${mobileRangeFull || tabletRangeFull 
          ? 'text-justify text-xs w-[66%] tracking-widest' 
          : 'text-sm tracking-wide'}
        text-zinc-400 `}
      >{description}</span>
    </div>
  )
}