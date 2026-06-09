import type { Metadata } from 'next'

import GroupsClientPage from './groups-client-page'

export const metadata: Metadata = {
  title: 'Grupos',

  description:
    'Veja todos os grupos da Copa do Mundo FIFA 2026. Acompanhe as seleções participantes, classificação e composição de cada grupo.',

  alternates: {
    canonical: '/groups',
  },

  openGraph: {
    title: 'Grupos | Copa do Mundo FIFA 2026',

    description:
      'Conheça os grupos da Copa do Mundo FIFA 2026 e as seleções que disputam a competição.',

    url: '/groups',
  },

  twitter: {
    title: 'Grupos | Copa do Mundo FIFA 2026',

    description:
      'Conheça os grupos da Copa do Mundo FIFA 2026 e as seleções participantes.',
  },
}

interface IPageProps {
  searchParams: Promise<{
    team?: string
  }>
}

export default async function GroupsPage({
  searchParams,
}: IPageProps) {
  const params = await searchParams

  return (
    <GroupsClientPage
      teamCode={params.team}
    />
  )
}