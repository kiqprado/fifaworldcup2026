import { MapPin } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'


export interface IStadium {
  name: string;
  city: string;
  country: string;
  image: string;
  capacity: string;
  curiosity: string;
  mapsQuery: string;
}

export function StadiumCard({image, name, capacity, mapsQuery, city, country, curiosity }: IStadium) {
  return(
    <div
      className='overflow-hidden
        border border-zinc-500 rounded-xl
        hover:border-amber-300 transition-all duration-300 ease-in-out'
    >
      <div
        className='relative'
      >
        <Image
          src={image}
          alt={name}
          width={288}
          height={156}
          className='aspect-video object-fit
            hover:scale-105 transition-all duration-400 ease-in-out'
        />
        <span
          className='absolute top-1.5 right-1.5
            px-2 py-0.5 bg-zinc-950/50 rounded-lg
            text-sm font-bold tracking-widest'
        >{capacity}</span>
      </div>

      <div
        className='px-3 py-2
          flex flex-col gap-2'
      >
        <div>
          <h3
            className='text-xl font-bold'
          >
            {name}
          </h3>
          <Link
            href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
            className='flex items-baseline gap-1.5 
              text-sm text-amber-300 hover:text-amber-100
              transition-all duration-300 ease-in-out'
          >
            <MapPin size={12}/> {city}, {country}
          </Link>
        </div>
        
        <p
          className='w-66 text-sm text-zinc-400 text-justify'
        >{curiosity}</p>
      </div>
    </div>
  )
}