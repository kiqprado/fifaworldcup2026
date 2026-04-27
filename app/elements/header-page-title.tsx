interface IHeaderPageTitle {
  title: string
  description: string
}

export function HeaderPageTitle({ title, description }: IHeaderPageTitle) {
  return(
    <div
      className='flex flex-col gap-3'
    >
      <h1
        className='text-6xl font-bold text-amber-300 tracking-wider'
      >{title}</h1>
      <span
        className='text-sm text-zinc-400 tracking-wide'
      >{description}</span>
    </div>
  )
}