export function PlayersPositionOnFieldSubtitle() {
  const items = [
    { label: 'Atacante', color: 'bg-red-500' },
    { label: 'Meio', color: 'bg-green-400' },
    { label: 'Volante', color: 'bg-purple-500' },
    { label: 'Lateral', color: 'bg-cyan-400' },
    { label: 'Zagueiro', color: 'bg-blue-500' },
    { label: 'Goleiro', color: 'bg-yellow-400' },
  ]

  return (
    <div className='w-full max-w-3xl'>
      <div
        className='p-[1px] rounded-xl
        bg-gradient-to-r from-amber-400 via-emerald-400 to-purple-500'
      >
        <div
          className='rounded-xl bg-zinc-900 border border-zinc-800
          px-4 py-3 flex items-center justify-between'
        >
          {items.map((item) => (
            <div
              key={item.label}
              className='flex items-center gap-2 group cursor-default'
            >
              <div
                className={`
                  w-4 h-4 rounded-full
                  ${item.color}
                  transition-all duration-300
                  group-hover:scale-125 group-hover:shadow-md
                `}
              />

              <span
                className='text-xs tracking-wide text-zinc-300
                group-hover:text-white transition-colors duration-200'
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}