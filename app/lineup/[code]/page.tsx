import Link from 'next/link'

import {squads} from '@/data/squads'
import { CardSquadLineUp } from '@/app/components/card-squad-lineup'
import { SoccerFieldLineup } from '@/app/components/soccer-field-lineup'
import { PlayersPositionOnFieldSubtitle } from '@/app/elements/players-position-on-field-subtitle' 
import { HeaderLineUpSquad, type SquadCode } from '@/app/elements/header-lineup-squad'

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
      className='w-full flex flex-col items-center gap-8 relative mb-12'
    >
      <Link
        href={'/'}
        className='absolute top-4 left-4 z-30'
      >
        Voltar
      </Link>

      <HeaderLineUpSquad
        code={code as SquadCode}
        key={code}
        formation={squad.formation}
      />

      <SoccerFieldLineup
        players={squad.starters}
        formation={squad.formation}
      />

      <div
        className='w-[80%] 
        flex flex-col gap-12 items-center'
      >
        <PlayersPositionOnFieldSubtitle/>
        
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
    </div>
  )
}