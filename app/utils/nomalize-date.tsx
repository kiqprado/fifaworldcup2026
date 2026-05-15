export function NormalizeDate(date: Date) {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  )
}

export function CreateMatchDate(date: string) {
  const [day, month] = date.split('/').map(Number)
  const currentYear = new Date().getFullYear()

  return NormalizeDate(
    new Date(currentYear, month - 1, day)
  )
}

export function AddDays(date: Date, days: number) {
  const result = new Date(date)
  result.setDate(result.getDate() + days)

  return NormalizeDate(result)
}

export function IsSameDate(dateA: Date, dateB: Date) {
  return NormalizeDate(dateA).getTime() === NormalizeDate(dateB).getTime()
}