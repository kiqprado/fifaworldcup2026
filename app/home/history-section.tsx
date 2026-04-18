import { CupSummaryTimeLine } from '@/app/elements/cup-summary-timeline'
import { VerticalDivider } from '@/app/elements/divider-vertical'
import { Button } from '@/app/components/button'

export function HistorySection() {
  return(
    <div
      className='py-6 relative
        flex flex-col gap-12
        h-svh bg-zinc-800'
    >
      <div
        className='text-center'
      >
        <h2
          className='text-5xl tracking-wider'
        >A História do Futebol Mundial</h2>

        <span
          className=''
        >Mais de 90 anos de emoção, glória e tradição nos gramados do mundo.</span>
      </div>

      <div
        className='px-12 flex gap-12
          justify-evenly'
      >
        <div
          className='w-full px-6 py-3
            flex flex-col gap-3 items-center
            border border-amber-300 rounded-xl'
        >
          <h3
            className='text-5xl'
          >22</h3>
          <span
            className='tracking-wider'
          >Edições realizadas</span>
        </div>

        <div
          className='w-full px-6 py-3
            flex flex-col gap-3 items-center
            border border-amber-300 rounded-xl'
        >
          <h3
            className='text-5xl'
          >22</h3>
          <span
            className='tracking-wider'
          >Edições realizadas</span>
        </div>

        <div
          className='w-full px-6 py-3
            flex flex-col gap-3 items-center
            border border-amber-300 rounded-xl'
        >
          <h3
            className='text-5xl'
          >22</h3>
          <span
            className='tracking-wider'
          >Edições realizadas</span>
        </div>

        <div
          className='w-full px-6 py-3
            flex flex-col gap-3 items-center
            border border-amber-300 rounded-xl'
        >
          <h3
            className='text-5xl'
          >22</h3>
          <span
            className='tracking-wider'
          >Edições realizadas</span>
        </div>
      </div>

      <div
        className='px-66 flex flex-col gap-2'
      >
        <CupSummaryTimeLine
          date='1930'
          preview='Primeira Copa no Uruguai — 13 seleções disputaram o torneio inaugural.'
        />
        <VerticalDivider/>
        <CupSummaryTimeLine
          date='1958'
          preview='O Brasil de Pelé conquista seu primeiro título na Suécia, aos 17 anos.'
        />
        <VerticalDivider/>
        <CupSummaryTimeLine
          date='1970'
          preview='Brasil se torna tricampeão no México com o time considerado o maior da história.'
        />
        <VerticalDivider/>
        <CupSummaryTimeLine
          date='2002'
          preview='Pentacampeonato brasileiro na Copa Japão-Coreia com Ronaldo e Rivaldo.'
        />
        <VerticalDivider/>
        <CupSummaryTimeLine
          date='2022'
          preview='Argentina vence a França nos pênaltis em final épica no Catar.'
        />
        <VerticalDivider/>
      </div>

      <Button
        href={'/'}
        variant='absolute'
      >
        Conheça mais da história nas Copas
      </Button>
    </div>
  )
}