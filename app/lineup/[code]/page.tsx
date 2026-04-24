import {squads} from '@/data/squads'
import { CardSquadLineUp } from '@/app/components/card-squad-lineup'

interface PageProps {
  params: {
    code: string
  }
}

export default async function LineUp({params}: PageProps) {
  const {code} = await params

  const squad = squads.find(s => s.code === code)

  if(!squad) {
    return (
      <div className='h-svh flex'> <h3 className='m-auto text-center uppercase'> Seleção não encontrada </h3> </div>
    )
  }

  return(
    <div
      className='w-full flex flex-col items-center '
    >
      <h2>Escalação: {code}</h2>
      <div
        className='h-svh w-[88%] px-8 py-6
          border border-amber-700 rounded-lg
          bg-green-800'
      >
        <div
          className='relative h-full w-full rounded-sm
          flex items-center justify-between
          border border-zinc-300'
        >
          <div
            className='h-[75%] w-44
            flex items-center justify-start
            border border-zinc-300'
          >
            <div
            className='h-[60%] w-[50%]
            border border-zinc-300'
            />
          </div>

          <div
            className='w-52 h-52 flex items-center justify-center
            border border-zinc-300 rounded-full'
          >
            <div className='w-2 h-2 bg-zinc-300 rounded-full'/>
            <div className='absolute h-full w-0.5 bg-zinc-300'/>
          </div>

          <div
            className='h-[75%] w-44
            flex items-center justify-end
            border border-zinc-300'
          >
            <div
              className='h-[60%] w-[50%]
              border border-zinc-300'
            />
          </div>
        </div>
      </div>
      <div
        className='w-full flex justify-evenly'
      >
        <CardSquadLineUp
          title='Titulares'
          players={squad.starters}
          variant='starter'
        />
        <CardSquadLineUp
          title='Reservas'
          players={squad.reserves}
          variant='reserve'
        />
      </div>
       
    </div>
  )
}