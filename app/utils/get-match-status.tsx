export function getMatchStatus( date: string, time: string, now: Date ) {
  const MATCH_YEAR = 2026

  const [day, month] =
    date.split('/').map(Number)

  const [hour, minute] =
    time.split(':').map(Number)

  const start = new Date(
    MATCH_YEAR,
    month - 1,
    day,
    hour,
    minute
  )

  const today = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  )

  const tomorrow = new Date(today)
  tomorrow.setDate(today.getDate() + 1)

  const matchDay = new Date(
    start.getFullYear(),
    start.getMonth(),
    start.getDate()
  )

  const isToday =
    matchDay.getTime() === today.getTime()

  const isTomorrow =
    matchDay.getTime() === tomorrow.getTime()

  if (!isToday && !isTomorrow) {
    return null
  }

  const diffMinutes =
    (now.getTime() - start.getTime()) /
    1000 /
    60

  if (diffMinutes < -5) {
    return {
      status: 'Em breve',
      variant: 'upcoming'
    } as const
  }

  if (diffMinutes <= 110) {
    return {
      status: 'Ao vivo',
      variant: 'live'
    } as const
  }

  return {
    status: 'Finalizado',
    variant: 'finished'
  } as const
}