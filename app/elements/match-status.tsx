import { tv, VariantProps } from 'tailwind-variants'

const MatchStatusVariants = tv({
  base: [
    'absolute -top-4 left-1/2 -translate-x-1/2 z-30',

    'min-w-[140px]',
    'px-6 py-1.5',

    'flex items-center justify-center',

    'rounded-md',
    'border-1 border-white',

    'uppercase',
    'font-black',
    'tracking-[0.25em]',
    'text-xs',

    'overflow-hidden',

    'before:absolute',
    'before:inset-0',
    'before:pointer-events-none'
  ],

  variants: {
    variant: {
      finished: [
        'match-status-finished',
        'bg-red-600',
        'text-black'
      ],

      live: [
        'match-status-live',
        'bg-green-500',
        'text-white'
      ],

      upcoming: [
        'match-status-upcoming',
        'bg-yellow-400',
        'text-black'
      ]
    }
  }
})

interface IMatchStatus
  extends VariantProps<typeof MatchStatusVariants> {
  status: string
}

export function MatchStatus({
  status,
  variant
}: IMatchStatus) {
  return (
    <div className={MatchStatusVariants({ variant })}>
      <span className="relative z-10">
        {status}
      </span>
    </div>
  )
}