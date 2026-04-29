
import { HeaderSectionTitle } from '@/app/elements/header-section-title'
import { CupSummaryTimeLine } from '@/app/elements/cup-summary-timeline'
import { VerticalDivider } from '@/app/elements/divider-vertical'
import { Button } from '@/app/components/button'
import { DetailsEditionSummary } from '@/app/elements/details-edition-summary'

export function HistorySection() {
  return(
    <div
      className='py-6 relative
        flex flex-col gap-12
        bg-zinc-800'
    >
      <HeaderSectionTitle
        title='A História do Futebol Mundial'
        description='Mais de 90 anos de emoção, glória e tradição nos gramados do mundo.'
        align='center'
      />

      <div
        className='px-12 flex gap-12
          justify-evenly'
      >
        <DetailsEditionSummary
          detail={'22'}
          data='Edições realizadas'
        />

        <DetailsEditionSummary
          detail={'8'}
          data='Países campeões'
        />

        <DetailsEditionSummary
          detail={'5'}
          data='Títulos do Brasil'
        />

        <DetailsEditionSummary
          detail={'900+'}
          data='Gols em finais'
        />
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

      <div className='self-center'>
        <Button
          href={'/history'}
          variant='default'
          size='lg'
          color='gold'
        >
          Conheça mais da história nas Copas
        </Button>
      </div>
    </div>
  )
}