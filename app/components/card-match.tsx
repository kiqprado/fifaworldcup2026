import { CalendarCheck, MapPinCheck} from 'lucide-react'

export interface IMatch {
  id: number;
  group: string;
  date: string;
  time: string;
  home: { name: string; code: string; flag: string };
  away: { name: string; code: string; flag: string };
  stadium: string;
  city: string;
}

export function CardMatch({id, group, date, time, home, away,stadium, city}: IMatch) {
  return(
    <div 
      className='flex flex-col gap-4
        w-86 px-4 py-3 rounded-xl
        border border-zinc-400'
    >
      <strong
        className='hidden'
      >
        {id}
      </strong>
      <div
        className='flex gap-2 items-center'
      >
        <CalendarCheck size={16} className='text-zinc-400'/>
        <span className='text-sm text-zinc-400'>{time} - {date}</span>
        <span className='text-sm text-zinc-400'>grupo: {group}</span>
      </div>

      <div
        className='flex items-center gap-4 justify-center'
      >
        <div
          className='flex flex-col items-center'
        >
          <span className='text-4xl'>{home.flag}</span>
          <h3>{home.name}</h3>
        </div>
        <span className='text-4xl'>X</span>
        <div
           className='flex flex-col items-center'   
        >
          <span className='text-4xl'>{away.flag}</span>
          <h3>{away.name}</h3>
        </div>
      </div>

      <div className='flex items-center gap-3'>
        <MapPinCheck size={16} className='text-zinc-400'/>
        <span className='text-sm text-zinc-400'>{stadium}, {city}</span>
      </div>
    </div>
  )
}