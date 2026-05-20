// app/lineup/[code]/page.tsx
import Link from 'next/link'

import { squads } from '@/data/squads'
import { HeaderLineUpSquad, type SquadCode } from '@/app/elements/header-lineup-squad'
import { LineupClient } from './lineup-client'

interface PageProps {
  params: {
    code: string
  }
}

export default async function LineUp({ params }: PageProps) {
  const { code } = await params
  const squad = squads.find(s => s.code === code)

  if (!squad) {
    return (
      <div className='h-svh flex'>
        <h3 className='m-auto text-center uppercase'>Seleção não encontrada</h3>
      </div>
    )
  }

  return (
    <div className='w-full flex flex-col items-center gap-8 relative mb-12'>
      <Link href={'/'} className='absolute top-4 left-4 z-30'>
        Voltar
      </Link>

      <HeaderLineUpSquad
        code={code as SquadCode}
        key={code}
        formation={squad.formation}
      />

      <LineupClient
        formation={squad.formation}
        starters={squad.starters}
        reserves={squad.reserves}
      />
    </div>
  )
}