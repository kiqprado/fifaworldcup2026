export interface IHistoryEdition {
  year: string;
  host: string;
  champion: string;
  fact: string;
}

export function HistoryEditionCard({year, host, champion, fact}: IHistoryEdition) {
  return(
    <div
      className='w-[75%] min-h-36 
        flex gap-4 items-center px-6 py-3
        border border-zinc-400 rounded-xl
        bg-zinc-900 hover:border-amber-300
        transition-all duration-300 ease-in-out'
    >
      <div
        className='flex flex-col items-center gap-1.5 self-start py-4'
      >
        <h2
          className='text-4xl font-bold tracking-wider text-amber-300'
        >{year}</h2>
        <span
          className='text-xs text-center text-zinc-400 tracking-wide'
        >{host}</span>
      </div>

      <div
        className='space-y-2'
      >
        <h3
          className=' text-xl tracking-wider font-bold text-transformer: uppercase'
        >Campeão: {champion}</h3>
        <p
          className='text-sm text-zinc-400'
        >{fact}</p>
      </div>
    </div>
  )
}