'use client'

import Image from 'next/image'
import Link from 'next/link'

import Tilt from 'react-parallax-tilt'

export interface IGroupTeam {
  code?: string
  name: string;
  flag: string;
  // Standings data
  pts?: number;
  j?: number;
  v?: number;
  e?: number;
  d?: number;
  gp?: number;
  gc?: number;
  sg?: number;
}

export interface IGroup {
  keyGroup: string;
  teams: IGroupTeam[];
}

export function CardGroup({ teams, keyGroup, highlight }: IGroup & { highlight?: boolean }  ) {
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
          transition-all duration-300 ease-out

          ${highlight
            ? 'bg-gradient-to-br from-amber-300 via-lime-400 to-emerald-400'
            : 'bg-gradient-to-br from-zinc-700 via-zinc-600 to-zinc-700 hover:from-amber-300 hover:via-lime-400 hover:to-emerald-400'
          }
        `}
      >
        <div
          className={`
            relative flex flex-col rounded-xl bg-zinc-950 overflow-hidden
            transition-all duration-300

            ${highlight
              ? 'shadow-[0_8px_20px_rgba(16,185,129,0.22),0_4px_10px_rgba(251,191,36,0.18)]'
              : 'shadow-[0_6px_14px_rgba(0,0,0,0.65)] hover:shadow-[0_8px_18px_rgba(16,185,129,0.22)]'
            }
          `}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black opacity-95" />

          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-amber-400/10 via-transparent to-emerald-400/10" />

          <h2 className="relative z-10 py-3 px-4 text-3xl font-bold tracking-wide text-amber-300">
            Grupo {keyGroup}
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

                <span className="text-lg text-zinc-200 tracking-wide">
                  {team.name}
                </span>
              </div>
            ))}
          </div>

          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-80" />
        </div>
      </div>
    </Tilt>
  )
}

export function CardGroupQualifier({ keyGroup, teams, highlight,}: IGroup & { highlight?: boolean }) {
  function getRowTableBg(i: number) {
    if (i === 0) return 'bg-emerald-700/50 hover:bg-emerald-700'
    if (i === 1) return 'bg-emerald-800/50 hover:bg-emerald-800'
    return 'bg-zinc-900'
  }

  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      scale={1.015}
      transitionSpeed={1000}
      glareEnable={false} // ❌ remove neblina
    >
      <div className="relative w-136 rounded-xl group">

        {/* 🔶 Borda dourada limpa */}
        <div
          className="
            absolute inset-0 rounded-xl p-[1px]
            bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-600
            opacity-80 group-hover:opacity-100
            transition-all duration-500
          "
        />

        {/* 🔲 Card */}
        <div
          className={`
            relative overflow-hidden rounded-xl bg-zinc-900
            border border-zinc-800
            transition-all duration-300

            /* 💡 glow externo premium */
            group-hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]
            ${highlight ? 'shadow-[0_0_30px_rgba(251,191,36,0.25)]' : ''}
          `}
        >
          <h2 className="py-3 px-3 text-3xl text-amber-300 tracking-wide font-bold bg-zinc-900">
            Grupo {keyGroup}
          </h2>

          <div>
            <table className="w-full text-center bg-zinc-900">
              <thead>
                <tr className="text-zinc-400 bg-zinc-950/50">
                  <th className="text-sm px-2 py-2">#</th>
                  <th className="text-sm text-start py-2">Seleção</th>
                  <th className="text-sm px-1 py-2">Pts</th>
                  <th className="text-sm px-1 py-2">J</th>
                  <th className="text-sm px-1 py-2">V</th>
                  <th className="text-sm px-1 py-2">E</th>
                  <th className="text-sm px-1 py-2">D</th>
                  <th className="text-sm px-0.5 py-2">GP</th>
                  <th className="text-sm px-0.5 py-2">GC</th>
                  <th className="text-sm px-0.5 py-2">SG</th>
                </tr>
              </thead>

              <tbody>
                {teams.map((team, i) => {
                  const bg = getRowTableBg(i)

                  return (
                    <tr
                      key={team.name}
                      className={`${bg} transition-all duration-300 ease-in-out`}
                    >
                      <td className="py-1.5 text-xs font-extralight">
                        {i + 1}
                      </td>

                      <td className="py-1.5 text-start font-bold tracking-wider flex items-center gap-2">
                        <Image
                          src={team.flag}
                          alt={team.name}
                          width={36}
                          height={36}
                        />

                        <Link href={`/lineup/${team.code}`}>
                          {team.name}
                        </Link>
                      </td>

                      <td className="py-1.5">{team.pts}</td>
                      <td className="py-1.5">{team.j}</td>
                      <td className="py-1.5">{team.v}</td>
                      <td className="py-1.5">{team.e}</td>
                      <td className="py-1.5">{team.d}</td>
                      <td className="py-1.5">{team.gp}</td>
                      <td className="py-1.5">{team.gc}</td>
                      <td className="py-1.5">{team.sg}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Tilt>
  )
}