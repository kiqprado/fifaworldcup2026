import { stadiums } from '@/data/stadiums'
import { StadiumCard } from '@/app/components/stadium-profile-card'

export function StadiumsSection() {
  return(
    <div
      className='h-full bg-zinc-950'
    >
        <div
          className='flex flex-wrap'
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