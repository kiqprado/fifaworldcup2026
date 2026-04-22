import Link from 'next/link'

import { editions } from '@/data/history-editions'
import { HistoryEditionCard} from '@/app/components/card-history-edition'

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
      <div>
        <h1
          className='text-7xl tracking-wider text-amber-300'
        >
          História das Copas
        </h1>
        <span
          className='text-zinc-400 tracking-wider'
        >De 1930 a 2022 — cada edição deixou sua marca. Reviva os momentos que definiram o futebol mundial.</span>
      </div>

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