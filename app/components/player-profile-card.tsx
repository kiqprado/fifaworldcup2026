import Image from 'next/image'
import { Shield, Star, CalendarDays, Crosshair} from 'lucide-react'

export interface StarPlayer {
  name: string;
  country: string;
  countryCode: string;
  club: string;
  age: number;
  debutDate: string;
  goals: number;
  position: string;
  image: string;
  badge: string
}

export function StarPlayerCard({image, name, country, countryCode,  position, club, age, debutDate, goals, badge}:StarPlayer ) {
  return(
    <div
      className='relative w-fit overflow-hidden
        border border-zinc-700 rounded-lg'
    >
      <div
        className="absolute z-20 flex justify-between w-full"
      >
        <h2 className=''>{countryCode}</h2>
        <Image
          src={badge}
          alt={countryCode}
          width={126}
          height={156}
          className='aspect-square object-cover -mr-5 -mt-5'
        />
      </div>
      <div
        className='relative'
      >
        <Image
          src={image}
          alt={name}
          height={156}
          width={222}
          className=''
        />
        <div
          className='absolute bottom-3 left-3
            flex flex-col -space-y-1.5'
        >
          <h3
            className='text-xl font-bold tracking-wide'
          >
            {name}
          </h3>
          <span
            className='text-amber-300 text-xs'
          >{country} - {position}</span>
        </div>
      </div>

      <div
        className='flex flex-col gap-1.5 px-3 py-3 text-sm'
      >
        <span
          className='flex gap-3 items-center'
        >
          <Shield size={16}/>{club}
        </span>
        <span
           className='flex gap-3 items-center'
        >
          <Star size={16}/>{age}
        </span>
        <span
           className='flex gap-3 items-center'
        >
          <CalendarDays size={16}/>{debutDate}
        </span>
        <span
           className='flex gap-3 items-center'
        >
          <Crosshair size={16}/>{goals}
        </span>
        <button>Ver Escalação {country}</button>
      </div>
    </div>
  )
}