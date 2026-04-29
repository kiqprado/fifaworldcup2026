
import { HeaderSectionTitle } from '@/app/elements/header-section-title'
import { stadiums } from '@/data/stadiums'
import { StadiumCard } from '@/app/components/stadium-profile-card'

export function StadiumsSection() {
  return(
    <div
      className='h-full py-6
        space-y-12 bg-zinc-950'
    >
      <div
        className='text-center'
      >
        <HeaderSectionTitle
          title='Estádios da Copa 2026'
          description='16 arenas espetaculares espalhadas pelos EUA, México e Canadá receberão os jogos da maior Copa da história.'
          align='center'
        />
      </div>
      <div
        className='flex flex-wrap justify-center gap-6'
      >
        {stadiums.map(stadium =>(
          <StadiumCard
            key={stadium.name}
            image={stadium.image}
            name={stadium.name}
            city={stadium.city}
            country={stadium.country}
            capacity={stadium.capacity}
            curiosity={stadium.curiosity}
            mapsQuery={stadium.mapsQuery}
          />
        ))}
      </div>
    </div>
  )

}