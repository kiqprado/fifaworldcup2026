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
        <h2
          className='text-5xl tracking-wider'
        >Estádios da Copa 2026</h2>
        <span
          className='tracking-wider text-zinc-400'
        >16 arenas espetaculares espalhadas pelos EUA, México e Canadá receberão os jogos da maior Copa da história.</span>
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