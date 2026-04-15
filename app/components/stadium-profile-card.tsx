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
      className='border overflow-hidden
        border-zinc-500'
    >
      <div
        className='relative'
      >
        <Image
          src={image}
          alt={name}
          width={286}
          height={156}
          className=''
        />
        <span
          className='absolute top-1.5 right-1.5
            px-2 py-0.5 bg-zinc-950/50 rounded-xl
            text-sm font-bold tracking-widest'
        >{capacity}</span>
      </div>

      <div>
        <h3>{name}</h3>
        <Link
          href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
        ><MapPin size={12}/> {city}, {country}</Link>
        <p
          className='w-66 text-justify'
        >{curiosity}</p>
      </div>
    </div>
  )
}