import type { Metadata } from 'next'

import TeamsClientPage from './teams-client-page'

export const metadata: Metadata = {
  title: 'Seleções',

  description:
    'Conheça as 48 seleções classificadas para a Copa do Mundo FIFA 2026. Explore a história de cada equipe, suas participações e tradição no torneio.',

  alternates: {
    canonical: '/teams',
  },

  openGraph: {
    title: 'Seleções | Copa do Mundo FIFA 2026',

    description:
      'Veja todas as seleções classificadas para a Copa do Mundo FIFA 2026.',

    url: '/teams',
  },

  twitter: {
    title: 'Seleções | Copa do Mundo FIFA 2026',

    description:
      'Veja todas as seleções classificadas para a Copa do Mundo FIFA 2026.',
  },
}

export default function TeamsPage() {
  return <TeamsClientPage />
}