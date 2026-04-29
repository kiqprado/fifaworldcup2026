import Image from "next/image"
import Trophy from '@/public/trophy.png'

import {HeaderSectionTitle} from '@/app/elements/header-section-title'
import { ShieldUser, Swords, Sheet  } from 'lucide-react'
import { CardButton } from '@/app/components/card-button'

export function AboutSection() {
  return(
    <div
      className='py-6 px-12 space-y-12
        h-svh relative overflow-hidden
        bg-zinc-900'
    >
      <div
        className='flex justify-between'
      >
        <HeaderSectionTitle
          prefix="Junho — Julho 2026"
          title="FIFA World Cup"
          highlight="2026™"
          description="A edição de 2026 será a maior Copa do Mundo já realizada, com 48 seleções disputando em 16 cidades dos Estados Unidos, México e Canadá. Serão 104 partidas ao longo de um mês de competição."
          align="left"
        />
        <div>
          <Image
            src={Trophy}
            alt='Trophy World Cup 2026'
            height={356}
          />
        </div>
      </div>

      <div
        className='flex justify-evenly'
      >
        <CardButton
          href={'/teams'}
          title="Seleções"
          about="48 Seleções classificadas para a maior Copa da história"
          icon={ShieldUser}
          iconProps={{
            className: 'text-lime-500'
          }}
        />

        <CardButton
          href={'/groups'}
          title="Grupos"
          about="12 grupos com 4 seleções cada na fase inicial"
          icon={Sheet}
          iconProps={{
            className: 'text-sky-500'
          }}
        />

        <CardButton
          href={'/matches'}
          title="Partidas"
          about="Calendário completo de jogos e resultados"
          icon={Swords}
          iconProps={{
            className: 'text-amber-500'
          }}
        />
      </div>
    </div>
  )
}