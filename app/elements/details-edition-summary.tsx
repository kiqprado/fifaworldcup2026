import { ReactNode } from 'react'

interface IDetailsEditionSummary {
  detail: ReactNode
  data: string
}
 
export function DetailsEditionSummary({ data, detail }: IDetailsEditionSummary) {
  return(
    <div
      className='w-full px-6 py-3
      flex flex-col gap-3 items-center
      border border-amber-300 rounded-xl'
    >
      <h3
        className='text-5xl'
      >
        {detail}
      </h3>
      <span
        className='tracking-wider'
      >
        {data}
      </span>
    </div>
  )
}