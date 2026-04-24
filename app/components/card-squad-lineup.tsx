export interface Player {
  name: string;
  number: number;
  position: "GOL" | "ZAG" | "LAT" | "VOL" | "MEI" | "ATA";
}

type Position = Player['position']
const positionLabels: Record<Position, string> = {
  GOL: "Goleiro",
  ZAG: "Zagueiro",
  LAT: "Lateral",
  VOL: "Volante",
  MEI: "Meia",
  ATA: "Atacante",
}

export interface ICardSquadLineUp{
  title: string
  players: Player[]
  variant: 'starter' | 'reserve'
}

export function CardSquadLineUp({ title, players, variant}: ICardSquadLineUp) {

  return(
    <div
      className='w-76
        border rounded-xl
      bg-zinc-900 border-zinc-400
      hover:border-amber-300
      transition-all duration-300 ease-in-out'
    >
      <h3
        className='pl-3 py-2 text-3xl tracking-wider border-b'
      >{title}</h3>
      {players.map(player => (
        <div
          key={player.number}
          className='pl-3 py-1.5 flex items-center gap-3 border-b'
        >
          <h4  className='px-4 py-2 w-fit rounded-full bg-amber-400'>{player.number}</h4>
          <div
            className='flex flex-col'
          >
            <span
              className='tracking-wider font-bold'
            >{player.name}</span>
            <span
              className='text-xs tracking-widest'
            >{positionLabels[player.position]}</span>
          </div>
        </div>
      ))}
    </div>
  )
}