export interface IGroupTeam {
  code: string
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
    <div
      className={`flex flex-col w-66
        border border-zinc-400 rounded-xl
        hover:border-amber-300
        transition-all duration-300 ease-in-out
          ${
      highlight
        ? 'border-amber-300 ring-2 ring-amber-300'
        : 'border-zinc-400 hover:border-amber-300'
          }`}
    >
      <h2
        className='py-3 px-3 text-3xl text-amber-300 tracking-wide font-bold'
      >Grupo {keyGroup}</h2>

      {teams.map(team => (
        <div
          key={team.name}
          className='border-t border-zinc-400'
        >
          <span
            className='text-3xl m-3'
          >{team.flag}</span>
          <span>{team.name}</span>
        </div>
      ))}
    </div>
  )
}

export function CardGroupQualifier({ keyGroup, teams, highlight }:  IGroup & { highlight?: boolean }) {
   function GetRowTableBg(i: number) {
    if(i === 0) return 'bg-emerald-700/50 hover:bg-emerald-700'
    if(i === 1) return 'bg-emerald-800/50 hover:bg-emerald-800'
    return 'bg-zinc-900'
  }
  return(
    <div
      className={`w-136 overflow-hidden
        border border-zinc-400 rounded-xl
        hover:border-amber-300
        transition-all duration-300 ease-in-out
        ${highlight
        ? 'border-amber-500 ring-2 ring-amber-500'
        : 'border-zinc-400 hover:border-amber-300'}
      `}
    >
      <h2
        className='py-3 px-3 text-3xl text-amber-300 tracking-wide font-bold bg-zinc-900'
      >
        Grupo {keyGroup}
      </h2>

      <div>
        <table className='w-full text-center bg-zinc-900'>
          <thead className=''>
            <tr className='text-zinc-400 bg-zinc-950/50'>
              <th className='text-sm px-2 py-2'>#</th>
              <th
                className='flex-1 text-sm text-start py-2'
              >Seleção</th>
              <th className='text-sm px-1 py-2'>Pts</th>
              <th className='text-sm px-1 py-2'>J</th>
              <th className='text-sm px-1 py-2'>V</th>
              <th className='text-sm px-1 py-2'>E</th>
              <th className='text-sm px-1 py-2'>D</th>
              <th className='text-sm px-0.5 py-2'>GP</th>
              <th className='text-sm px-0.5 py-2'>GC</th>
              <th className='text-sm px-0.5 py-2'>SG</th>
            </tr>
          </thead>
          <tbody >
            {teams.map((team, i) => {
              const bg = GetRowTableBg(i)
              return(
                <tr key={team.name} className={`${bg} transition-all duration-300 ease-in-out`}>
                  <td className={`py-1.5 text-xs font-extralight `}>{i + 1}</td>
                  <td className={`py-1.5 flex-1 text-start font-bold tracking-wider `}>
                    {team.flag} {team.name}
                  </td>
                  <td className={`py-1.5`}>{team.pts}</td>
                  <td className={`py-1.5`}>{team.j}</td>
                  <td className={`py-1.5`}>{team.v}</td>
                  <td className={`py-1.5`}>{team.e}</td>
                  <td className={`py-1.5`}>{team.d}</td>
                  <td className={`py-1.5`}>{team.gp}</td>
                  <td className={`py-1.5`}>{team.gc}</td>
                  <td className={`py-1.5`}>{team.sg}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}