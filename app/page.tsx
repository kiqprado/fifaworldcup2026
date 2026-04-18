import { HeroSection } from '@/app/home/hero-section'
import { HistorySection } from '@/app/home/history-section'
import { AboutSection } from '@/app/home/about-section'
import { LineUpSection} from '@/app/home/lineUp-section'
import { StadiumsSection } from '@/app/home/stadiums-section'

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
