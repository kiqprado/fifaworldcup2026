import { HeroSection } from '@/app/pages/home/hero-section'
import { HistorySection } from '@/app/pages/home/history-section'
import { AboutSection } from '@/app/pages/home/about-section'
import { LineUpSection} from '@/app/pages/home/lineUp-section'
import { StadiumsSection } from '@/app/pages/home/stadiums-section'

export default function Home() {
  return (
    <main
      className='w-full'
    >
      <HeroSection/>
      <HistorySection/>
      <AboutSection/>
      <LineUpSection/>
      <StadiumsSection/>
    </main>
  );
}
