'use client'

import { ISquad } from "@/data/squads"

import Tilt from 'react-parallax-tilt'

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
  return (
    <div className='w-full flex flex-col items-center text-center'>
      
      <div className='py-4 flex items-center gap-4'>
        {/* Código */}
        <span
          className='text-3xl font-bold tracking-widest
          bg-gradient-to-br from-amber-300 to-yellow-500
          text-transparent bg-clip-text'
        >
          {code}
        </span>

        {/* Info */}
        <div className='flex flex-col'>
          <h2 className='text-lg tracking-wide font-semibold text-white'>
            {squadNames[code]}
          </h2>

          <span className='text-xs tracking-[0.25em] text-zinc-400'>
            Formação • {formation}
          </span>
        </div>
      </div>

      {/* Linha inferior (identidade visual) */}
      <div
        className='w-full h-[2px]
        bg-gradient-to-r  from-amber-400 via-emerald-400 to-purple-500 '
      />
    </div>
  )
}