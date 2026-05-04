'use client'

import Link from 'next/link'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'

export interface ITeam {
  name: string;
  code: string;
  flag: string;
  history: string;
}

export function CardTeam({ name, code, flag, history }: ITeam) {
  return(
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      scale={1.03}
      transitionSpeed={1000}
      glareEnable
      glareMaxOpacity={0.12}
      glareColor="#fbbf24"
      className="rounded-xl"
    >
      <div
        className="w-fit relative group
          p-[1px] rounded-xl
          bg-gradient-to-br from-amber-400/40 via-amber-500/20 to-transparent
          transition-all duration-500
          hover:shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(251,191,36,0.25)]
        "
      >
        {/* BASE */}
        <div
          className="
            relative rounded-xl overflow-hidden
            bg-zinc-900/80 backdrop-blur-md
            border border-amber-400/10
          "
        >
          {/* brilho MUITO sutil */}
          <div
            className="
              absolute inset-0 pointer-events-none
              opacity-0 group-hover:opacity-100
              bg-gradient-to-r from-transparent via-white/5 to-transparent
              translate-x-[-120%] group-hover:translate-x-[120%]
              transition duration-700
            "
          />

          <div className="relative z-10 flex flex-col gap-4 px-4 py-3">

            {/* HEADER */}
            <div
              className="flex items-center gap-3"
              style={{ transform: 'translateZ(40px)' }}
            >
              <Image
                src={flag}
                alt={code}
                width={56}
                height={56}
              />

              <div className="flex flex-col">
                <Link
                  href={`/lineup/${code}`}
                  title='Ver escalação desta equipe'
                  className="
                    text-lg font-semibold tracking-wide
                    text-zinc-100
                    group-hover:text-amber-200
                    transition
                  "
                >
                  {name}
                </Link>

                <span
                  className="
                    text-xs tracking-widest text-zinc-400
                    group-hover:text-amber-300/80
                    transition
                  "
                >
                  {code}
                </span>
              </div>
            </div>

            {/* HISTÓRIA */}
            <p
              className="w-56 h-46
                overflow-y-auto
                text-sm text-zinc-400 
                text-justify leading-relaxed
                group-hover:text-zinc-300
                transition
              "
              style={{ transform: 'translateZ(25px)' }}
            >
              {history}
            </p>

            {/* ACTIONS */}
            <div
              className="flex items-center justify-between gap-4"
              style={{ transform: 'translateZ(35px)' }}
            >
              <Link
                href={`/groups?team=${code}`}
                title='Ver o grupo completo'
                className="
                  text-sm tracking-wide
                  text-zinc-300
                  border-b border-transparent
                  hover:text-amber-300
                  hover:border-amber-300/60
                  transition
                "
              >
                Grupo
              </Link>

              <Link
                href={`/lineup/${code}`}
                title='Ver escalação desta equipe'
                className="
                  text-sm tracking-wide
                  text-zinc-300
                  border-b border-transparent
                  hover:text-amber-300
                  hover:border-amber-300/60
                  transition
                "
              >
                Escalação
              </Link>
            </div>

          </div>
        </div>
      </div>
    </Tilt>
  )
}