import Link from 'next/link'

import { teams } from '@/data/teams'
import { CardTeam } from '@/app/components/card-team'

export default function TeamsPage() {
  return(
    <div
      className='h-svh'
    >
      <Link
        href={'/'}
      >
        Voltar
      </Link>

      <div
        className='flex flex-wrap gap-4 justify-center'
      >
        {teams.map(team => (
          <CardTeam
            key={team.code}
            name={team.name}
            code={team.code}
            flag={team.flag}
            history={team.history}
          />
        ))}
      </div>
    </div>
  )
}