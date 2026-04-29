import { stars } from '@/data/stars'
import { StarPlayerCard } from '@/app/components/player-profile-card'

export function LineUpSection() {
  return(
    <div
      className=' h-full py-6 px-12 space-y-12
         bg-zinc-900'
    >
      <div
        className='space-y-2'
      >
        <h2
          className='text-5xl tracking-wider'
        >Quem estará em <span className='text-amber-300'>campo</span>?</h2>
        <div
          className='flex gap-3 items-center'
        >
          <span
            className='ml-10  whitespace-nowrap
            tracking-wider text-zinc-400'
          >
            - conheça abaixo um pequeno giro das estrelas desta edição
          </span>
          <div 
            className='h-1 flex-1
             bg-amber-300/70 rounded-xl'
          />
        </div>
      </div>

      <div
        className='flex flex-wrap gap-4 space-y-12 justify-center'
      >
        {stars.map((star => (
        <StarPlayerCard
          image={star.image}
          badge={star.badge}
          key={star.name}
          name={star.name}
          country={star.country}
          countryCode={star.countryCode}
          position={star.position}
          club={star.club}
          age={star.age}
          debutDate={star.debutDate}
          goals={star.goals}
        />
      )))}
      </div>
    </div>
  )
}