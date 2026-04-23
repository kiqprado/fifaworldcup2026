export interface Player {
  name: string;
  number: number;
  position: "GOL" | "ZAG" | "LAT" | "VOL" | "MEI" | "ATA";
}

export interface ICardSquadLineUp{
  title: string
  players: Player[]
  variant: 'starter' | 'reserve'
}

export function CardSquadLineUp({ title, players, variant}: ICardSquadLineUp) {

  return(
    <div
      className=' px-8 py-3
        border rounded-xl
      bg-zinc-900 border-zinc-400
      hover:border-amber-300
      transition-all duration-300 ease-in-out'
    >
      <h3
        className='text-3xl tracking-wider'
      >{title}</h3>
      {players.map(player => (
        <div
          key={player.number}
        >
          <h4  className='px-4 py-2 w-fit rounded-full bg-amber-400'>{player.number}</h4>
          <div>
            <span>{player.name}</span>
            <span>{player.position}</span>
          </div>
        </div>
      ))}
    </div>
  )
}