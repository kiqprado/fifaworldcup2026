import Link from 'next/link'

import { teams } from '@/data/teams'
import { CardTeam } from '@/app/components/card-team'

import { HeaderPageTitle } from '@/app/elements/header-page-title'

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

      <HeaderPageTitle
        title='Seleções'
        description='48 seleções classificadas para a Copa do Mundo 2026. Conheça a história de cada uma nas Copas.'
      />

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