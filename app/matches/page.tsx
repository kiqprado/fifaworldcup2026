import Link from 'next/link'

import { matches } from '@/data/matches'
import { CardMatch } from '@/app/components/card-match'
import { HeaderPageTitle } from '@/app/elements/header-page-title'

export default function MatchesPage() {
  return(
    <div>
      <Link
        href={'/'}
      >
        Voltar
      </Link>

      <HeaderPageTitle
        title='Partidas'
        description='72 partidas da fase de grupos. Filtre por grupo para encontrar os jogos.'
      />

      <div
        className='flex flex-wrap gap-4 justify-center'
      >
        {matches.map(match => (
          <CardMatch
            key={match.id}
            id={match.id}
            group={match.group}
            date={match.date}
            time={match.time}
            home={match.home}
            away={match.away}
            stadium={match.stadium}
            city={match.city}
          />
        ))}
      </div>
    </div>
  )
}