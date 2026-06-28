'use client'

import Image from 'next/image'
import Link from 'next/link'

import Tilt from 'react-parallax-tilt'

interface ITeamQualified {
  name: string
  flag: string
  code: string
}

export interface  ICardTeamsOnDeathMatch{
  teams: ITeamQualified[];
}

export function CardTeamsOnDeathMatch({teams}: ICardTeamsOnDeathMatch) {
  return(
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      perspective={1000}
      scale={1.03}
      transitionSpeed={1200}
      gyroscope={true}
      className="w-fit"
    >
      <div
        className={`
          relative w-86 rounded-xl overflow-hidden p-[1px]
          transition-all duration-300 ease-out`}
      >
        <div
          className={`
            relative flex flex-col rounded-xl bg-zinc-950 overflow-hidden
            transition-all duration-300`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black opacity-95" />

          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-amber-400/10 via-transparent to-emerald-400/10" />

          <h2 className="relative z-10 py-3 px-4 text-3xl font-bold tracking-wide text-amber-300">
            Mata Mata
          </h2>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />

          <div className="relative z-10 flex flex-col">
            {teams.map((team) => (
              <div
                key={team.name}
                className="
                  flex items-center gap-3 px-4 py-2
                  transition-all duration-200
                  hover:bg-white/5
                "
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={team.flag}
                    alt={team.name}
                    width={34}
                    height={34}
                    className="rounded-sm"
                  />
                </div>

                <Link 
                  href={`/lineup/${team.code}`}
                  className="text-lg text-zinc-200 tracking-wide"
                >
                  {team.name}
                </Link>
              </div>
            ))}
          </div>

          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-80" />
        </div>
      </div>
    </Tilt>
  )
}