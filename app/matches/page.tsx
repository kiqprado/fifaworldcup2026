import type { Metadata } from 'next'

import MatchesClientPage from './matches-client-page'

export const metadata: Metadata = {
  title: 'Partidas',

  description:
    'Acompanhe todas as partidas da Copa do Mundo FIFA 2026. Consulte datas, horários, grupos, estádios e favorite seus jogos.',

  alternates: {
    canonical: '/matches'
  },

  openGraph: {
    title: 'Partidas | Copa do Mundo FIFA 2026',

    description:
      'Calendário completo das partidas da Copa do Mundo FIFA 2026.',

    url: '/matches'
  },

  twitter: {
    title: 'Partidas | Copa do Mundo FIFA 2026',

    description:
      'Calendário completo das partidas da Copa do Mundo FIFA 2026.'
  }
}

export default function MatchesPage() {
  return <MatchesClientPage />
}