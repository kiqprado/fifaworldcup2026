'use client'

import { useState, useEffect} from 'react'

import { HeroSection } from '@/app/home/hero-section'
import { HistorySection } from '@/app/home/history-section'
import { AboutSection } from '@/app/home/about-section'
import { LineUpSection} from '@/app/home/lineUp-section'
import { StadiumsSection } from '@/app/home/stadiums-section'

import { ArrowUp } from 'lucide-react'

export default function Home() {
  const [ showScrollTop, setShowScrollTop ] = useState(false)

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

  function HandleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    function HandleScroll() {
      setShowScrollTop(window.scrollY > window.innerHeight * 3)
    }

    window.addEventListener('scroll', HandleScroll)
    return () => window.removeEventListener('scroll', HandleScroll)
  }, [])

  return (
    <main
      className='w-full'
    >
      <HeroSection onExplore={HandleScrollToAbout}/>
      <HistorySection/>
      <AboutSection/>
      <LineUpSection/>
      <StadiumsSection/>

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
          title='Voltar ao início.'
        >
          <ArrowUp size={22}/>
        </button>
      )}
    </main>
  );
}
