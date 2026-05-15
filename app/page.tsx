'use client'

import { HeroSection } from '@/app/home/hero-section'
import { HistorySection } from '@/app/home/history-section'
import { AboutSection } from '@/app/home/about-section'
import { LineUpSection} from '@/app/home/lineUp-section'
import { StadiumsSection } from '@/app/home/stadiums-section'

export default function Home() {
  function HandleScrollToAbout() {
    const aboutSection = document.getElementById('about-section')

    if (!aboutSection) {
      return
    }

    aboutSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <main
      className='w-full'
    >
      <HeroSection onExplore={HandleScrollToAbout}/>
      <HistorySection/>
      <AboutSection/>
      <LineUpSection/>
      <StadiumsSection/>
    </main>
  );
}
