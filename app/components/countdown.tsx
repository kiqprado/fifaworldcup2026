'use client'
 
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

import { ChevronUp } from 'lucide-react'

import { differenceInSeconds } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'

const OPPENING_DATE = new Date('2026-06-11T14:30:00-03:00')
const BRASILIA_TZ = 'America/Sao_Paulo'

function getTimeRemaining() {
  const now = toZonedTime(new Date(), BRASILIA_TZ)
  const diff = differenceInSeconds(OPPENING_DATE, now)
 
  if (diff <= 0) return null
 
  const days = Math.floor(diff / 86400)
  const hours = Math.floor((diff % 86400) / 3600)
  const minutes = Math.floor((diff % 3600) / 60)
  const seconds = diff % 60
 
  return { days, hours, minutes, seconds }
}

export function CountDown() {
  const [time, setTime] = useState<ReturnType<typeof getTimeRemaining>>(null)
  const [toggleModal, setToggleModal] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    function update(){ 
      setTime(getTimeRemaining())
    }
    update()

    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const HandleToggleModal = () => {
    if (containerRef.current) {
      containerRef.current.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
      containerRef.current.style.opacity = '0'
      containerRef.current.style.transform = 'translateY(-100%)'
      setTimeout(() => setToggleModal(true), 500)
    }
  }

  if (!time || toggleModal) return null
 
  if (toggleModal || !time) return null
 
  const pad = (n: number) => String(n).padStart(2, '0')
 
  return (
    <div
      ref={containerRef}
      className="countdown-root fixed top-0 left-0 z-50 w-full h-fit"
    >
      {/* Blur */}
      <div className="cd-blur-layer absolute top-0 left-0 w-full h-fit pointer-events-none z-0" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-transparent pointer-events-none" />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center gap-3 w-full h-[138px] pt-4 px-5">

        {/* Contador */}
        <div className="flex items-center gap-3">

          <div className="flex flex-col items-center gap-[2px]">
            <span
              className="
                cd-value
                text-[clamp(1.5rem,3vw,2.2rem)]
                font-normal
                tracking-[0.08em]
                text-[#F5C518]
                leading-none
              "
            >
              {pad(time.days)}
            </span>

            <span
              className="
                text-[0.55rem]
                uppercase
                tracking-[0.22em]
                text-white/50
              "
            >
              dias
            </span>
          </div>

          <span
            className="
              text-[clamp(1.2rem,2.5vw,1.8rem)]
              text-[#F5C518]
              opacity-60
              leading-none
            "
          >
            :
          </span>

          <div className="flex flex-col items-center gap-[2px]">
            <span
              className="
                cd-value
                text-[clamp(1.5rem,3vw,2.2rem)]
                font-normal
                tracking-[0.08em]
                text-[#F5C518]
                leading-none
              "
            >
              {pad(time.hours)}
            </span>

            <span
              className="
                text-[0.55rem]
                uppercase
                tracking-[0.22em]
                text-white/50
              "
            >
              horas
            </span>
          </div>

          <span
            className="
              text-[clamp(1.2rem,2.5vw,1.8rem)]
              text-[#F5C518]
              opacity-60
              leading-none
            "
          >
            :
          </span>

          <div className="flex flex-col items-center gap-[2px]">
            <span
              className="
                cd-value
                text-[clamp(1.5rem,3vw,2.2rem)]
                font-normal
                tracking-[0.08em]
                text-[#F5C518]
                leading-none
              "
            >
              {pad(time.minutes)}
            </span>

            <span
              className="
                text-[0.55rem]
                uppercase
                tracking-[0.22em]
                text-white/50
              "
            >
              min
            </span>
          </div>

          <span
            className="
              text-[clamp(1.2rem,2.5vw,1.8rem)]
              text-[#F5C518]
              opacity-60
              leading-none
            "
          >
            :
          </span>

          <div className="flex flex-col items-center gap-[2px]">
            <span
              className="
                cd-value
                text-[clamp(1.5rem,3vw,2.2rem)]
                font-normal
                tracking-[0.08em]
                text-[#F5C518]
                leading-none
              "
            >
              {pad(time.seconds)}
            </span>

            <span
              className="
                text-[0.55rem]
                uppercase
                tracking-[0.22em]
                text-white/50
              "
            >
              seg
            </span>
          </div>

        </div>

        {/* Link */}
        <Link
          href="https://www.youtube.com/watch?v=YCNysrewn7k"
          target='_blank'
          className="
            text-[0.7rem]
            uppercase
            tracking-[0.18em]
            text-white/75
            border-b
            border-white/20
            hover:text-[#F5C518]
            hover:border-[#F5C518]
            transition-colors
          "
        >
          ASSISTA A CERIMÔNIA DE ABERTURA
        </Link>
      </div>

      {/* Botão */}
      <button
        className="
          cd-btn
          absolute
          left-1/2
          bottom-0
          -translate-x-1/2
          translate-y-1/2
          z-20
          flex
          flex-col
          items-center
          cursor-pointer
          bg-transparent
          border-none
          p-0
        "
        onClick={HandleToggleModal}
        aria-label="Fechar contagem regressiva"
      >

        {/* seta superior */}
        <div
          className="
            cd-arrow-above
            flex
            items-center
            justify-center
            mb-1
            text-[#F5C518]
            opacity-50
          "
        >
          <ChevronUp
            size={11}
            strokeWidth={2}
          />
        </div>

        {/* botão */}
        <div
          className="
            cd-btn-ring
            w-14
            h-8
            rounded
            border
            border-[#F5C518]
            flex
            items-center
            justify-center
          "
        >
          <ChevronUp
            size={22}
            strokeWidth={1.5}
            className="text-[#F5C518]"
          />
        </div>

        {/* setas inferiores */}
        <div
          className="
            cd-arrows
            flex
            flex-col
            items-center
            overflow-hidden
            h-9
            mt-1
          "
          aria-hidden="true"
        >
          <ChevronUp
            size={11}
            strokeWidth={2}
            className="text-[#F5C518]"
          />

          <ChevronUp
            size={11}
            strokeWidth={2}
            className="text-[#F5C518]"
          />

          <ChevronUp
            size={11}
            strokeWidth={2}
            className="text-[#F5C518]"
          />
        </div>

      </button>
    </div>
  )
}