import Link from 'next/link'

import { editions } from '@/data/history-editions'
import { HistoryEditionCard } from '@/app/components/card-history-edition'
import { HeaderPageTitle } from '@/app/elements/header-page-title'

export default function HistoryPage() {
  return(
    <div
      className='h-svh'
    >
      <Link
        href={'/'}
      >
        voltar
      </Link>

      <HeaderPageTitle
        title='História das Copas'
        description='De 1930 a 2022 — cada edição deixou sua marca. Reviva os momentos que definiram o futebol mundial.'
      />
      

      <div className='flex flex-col gap-8 items-center'>
        {editions.map(edition => (
          <HistoryEditionCard
            key={edition.year}
            year={edition.year}
            host={edition.host}
            champion={edition.champion}
            fact={edition.fact}
          />
        ))}
      </div>
    </div>
  )
}