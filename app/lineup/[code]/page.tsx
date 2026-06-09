import type { Metadata } from 'next'

import { squads } from '@/data/squads'
import {
  HeaderLineUpSquad,
  type SquadCode
} from '@/app/elements/header-lineup-squad'

import { LineupClient } from './lineup-client'
import { LinkToBack } from '@/app/components/link-to-back'

interface PageProps {
  params: Promise<{
    code: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { code } = await params

  const squad = squads.find(
    squad => squad.code === code
  )

  if (!squad) {
    return {
      title: 'Seleção não encontrada',
    }
  }

  return {
    title: `Escalação ${squad.code}`,

    description:
      `Confira a provável escalação da ${squad.code} para a Copa do Mundo FIFA 2026. Veja titulares, reservas e a formação tática da equipe.`,

    alternates: {
      canonical: `/lineup/${code}`,
    },

    openGraph: {
      title:
        `Escalação ${squad.code} | Copa do Mundo FIFA 2026`,

      description:
        `Veja a formação, titulares e reservas da ${squad.code}.`,

      url: `/lineup/${code}`,

      images: [
        {
          url: `/lineup/${code}/opengraph-image`,
        }
      ]
    },

    twitter: {
      title:
        `Escalação ${squad.code} | Copa do Mundo FIFA 2026`,

      description:
        `Veja a formação, titulares e reservas da ${squad.code}.`,
    },
  }
}

export default async function LineUp({ params }: PageProps) {
  const { code } = await params

  const squad = squads.find(
    squad => squad.code === code
  )

  if (!squad) {
    return (
      <div className="h-svh flex">
        <h3 className="m-auto text-center uppercase">
          Seleção não encontrada
        </h3>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col items-center gap-8 relative mb-12">
      <LinkToBack href="/" />

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