interface ICupSummary {
  date: string
  preview: string
}

export function CupSummaryTimeLine({ date, preview }: ICupSummary) {
  return(
    <div
      className='group flex items-baseline gap-4 cursor-default'
    >
      <h4
        className='
          text-amber-300 font-bold tracking-wider
          transition-all duration-300 ease-in-out
          group-hover:text-amber-200
          group-hover:[text-shadow:0_0_8px_rgba(251,191,36,0.8),0_0_16px_rgba(251,191,36,0.6)]'
      >
        {date}
      </h4>

      <span
        className='text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300'
      >
        {preview}
      </span>
    </div>
  )
}