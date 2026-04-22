import bg from '@/public/stadium-hero.jpg'
import Image from 'next/image'

import { Button } from '@/app/components/button'

export function HeroSection() {
  return(
    <div
      className='py-6
        h-svh relative overflow-hidden'
    >
      <Image
        src={bg}
        alt='Imagem de um estádio com píblico cheio torcendo por seu time.'
        className='h-svh absolute inset-0 -z-50'
      />

      <div
        className='h-full flex flex-col gap-3 
        items-center justify-center'
      >
        <h3
          className='text-transform: uppercase tracking-widest'
        >
          A maior competição do Planeta
        </h3>
        <h1
          className='text-7xl text-transform: uppercase text-center'
        >
          <span className='tracking-wider text-9xl font-semibold text-amber-300'>FIFA</span><br/>
          Copa do <br/>Mundo
        </h1>

        <div
          className='h-1 w-[33%] bg-amber-300 rounded-lg'
        />

        <p
          className='max-w-[50%] text-center'
        >Desde 1930, a Copa do Mundo une nações em torno da paixão pelo futebol. 22 edições, bilhões de torcedores e momentos que marcaram a história para sempre.
        </p>
      </div>

      
        <Button
          href={'/lineup'}
          variant='absolute'
        >
          Explorar
        </Button>
    </div>
  )
}