export interface ITeam {
  name: string;
  code: string;
  flag: string;
  history: string;
}

export function CardTeam({ name, code, flag, history }: ITeam) {
  return(
    <div
      className='px-4 py-2 w-fit
        flex flex-col gap-4
        border border-zinc-400
        rounded-xl
        hover:border-amber-300
        transition-all duration-300 ease-in-out'
    >
      <div
        className='flex items-center gap-3'
      >
        <h2
          className='text-6xl'
        >{flag}</h2>
        <div
          className='flex flex-col items-baseline'
        >
          <h3>{name}</h3>
          <h5>{code}</h5>
        </div>
      </div>
      <p
        className='w-66 text-justify text-sm
          text-zinc-400'
      >{history}</p>
      <div
        className='flex items-center justify-evenly gap-4'
      >
        <button>Grupo</button>
        <button>Escalação</button>
      </div>
    </div>
  )
}