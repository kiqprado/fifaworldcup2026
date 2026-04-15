import Image from "next/image"
import Trophy from '@/public/trophy.png'

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
        <div className='flex flex-col gap-3'>
          <span
            className='tracking-widest text-amber-300'
          >junho - julho 2026</span>
          <h2
            className='text-5xl text-transform: uppercase
              text-amber-300'
          >FIFA World Cup<br/><span className='text-zinc-100 font-bold'>2026™</span></h2>
          <p
            className='max-w-[33%] 
              text-justify text-zinc-400'
          >A edição de 2026 será a maior Copa do Mundo já realizada, com <strong className="text-zinc-100">48 seleções</strong> disputando em 16 cidades dos <strong className="text-zinc-100">Estados Unidos, México e Canadá</strong>. Serão 104 partidas ao longo de um mês de competição.</p>
        </div>
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