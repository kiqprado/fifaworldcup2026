interface ICupSummary {
  date: string
  preview: string
}

export function CupSummaryTimeLine({ date, preview }: ICupSummary) {
  return(
    <div
      className='flex items-baseline gap-4'
    >
      <h4
        className='text-amber-300 font-bold tracking-wider'
      >{date}</h4>
      <span>
        {preview}
      </span>
    </div>
  )
}