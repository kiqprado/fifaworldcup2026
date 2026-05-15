interface IHeaderPageTitle {
  title: string
  description: string
}

export function HeaderPageTitle({ title, description }: IHeaderPageTitle) {
  return(
    <div
      className="w-full flex flex-col gap-6 h-46 px-12 py-6 justify-center
        bg-[url('/header-bg.png')] bg-cover bg-center bg-no-repeat"
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