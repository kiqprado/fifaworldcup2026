export interface Player {
  name: string;
  number: number;
  position: "GOL" | "ZAG" | "LAT" | "VOL" | "MEI" | "ATA";
}

export interface ISquad {
  title?: string
  code: string;
  formation: string;
  starters: Player[];
  reserves: Player[];
}

export function CardSquadLineUpStarters({title, code, formation, starters}: ISquad) {
  return(
    <div>
      <h3>{title}</h3>
      <ul>
        {starters.map(starter => (
          <li
            key={starter.number}
          >
            <h3>{starter.number}</h3>
            <ul>
              <li>{starter.name}</li>
              <li>{starter.position}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function CardSquadLineUpReserves({title, reserves}: ISquad) {
  return(
    <div>
      <h3>{title}</h3>
      <ul>
        {reserves.map(reserve => (
          <li
            key={reserve.number}
          >
            <h3>{reserve.number}</h3>
            <ul>
              <li>{reserve.name}</li>
              <li>{reserve.position}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

