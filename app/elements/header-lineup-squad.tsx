import { ISquad } from "@/data/squads"

export type SquadCode = ISquad['code']
const squadNames: Record<SquadCode, string> ={
  ARG: "Argentina",
  BRA: "Brasil",
  URU: "Uruguai",
  COL: "Colômbia",
  PER: "Peru",
  CHI: "Chile",
  ECU: "Equador",
  VEN: "Venezuela",
  PAR: "Paraguai",
  BOL: "Bolívia",

  USA: "Estados Unidos",
  MEX: "México",
  CAN: "Canadá",
  CRC: "Costa Rica",
  PAN: "Panamá",
  JAM: "Jamaica",
  HON: "Honduras",
  SLV: "El Salvador",
  GUA: "Guatemala",
  TRI: "Trinidad e Tobago",

  FRA: "França",
  GER: "Alemanha",
  ESP: "Espanha",
  ENG: "Inglaterra",
  ITA: "Itália",
  POR: "Portugal",
  NED: "Países Baixos",
  BEL: "Bélgica",
  CRO: "Croácia",
  SUI: "Suíça",
  DEN: "Dinamarca",
  SWE: "Suécia",
  POL: "Polônia",
  UKR: "Ucrânia",
  TUR: "Turquia",

  SEN: "Senegal",
  MAR: "Marrocos",
  NGA: "Nigéria",
  GHA: "Gana",
  CIV: "Costa do Marfim",
  CMR: "Camarões",
  TUN: "Tunísia",
  ALG: "Argélia",

  JPN: "Japão",
  KOR: "Coreia do Sul",
  IRN: "Irã",
  AUS: "Austrália",
  KSA: "Arábia Saudita",
}

interface IHeaderLineUpSquad {
  code: SquadCode
  formation: string
}

export function HeaderLineUpSquad({ code, formation }: IHeaderLineUpSquad) {
  return(
    <div
      className='w-full flex gap-3 items-center justify-center'
    >
      <span
        className='text-3xl'
      >{code}</span>
      <div>
        <h2
          className='text-xl tracking-wider font-bold'
        >{squadNames[code]}</h2>
        <span
          className='tracking-widest text-sm'
        >{formation}</span>
      </div>
    </div>
  )
}