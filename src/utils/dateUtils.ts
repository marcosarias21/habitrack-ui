export const getDayDifference = (today: Date, dateCalendar: Date) => {
  today.setHours(0, 0, 0, 0)

  const selected = new Date(dateCalendar)
  selected.setHours(0, 0, 0, 0)

  const diffInMs = selected.getTime() - today.getTime()
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24)
  return diffInDays
}

export const getDayOfYear = (date: Date) => {
  if (date) {
    const start = new Date(date.getFullYear(), 0, 0)
    const diff = date.getTime() - start.getTime()
    const day = Math.floor(diff / (1000 * 60 * 60 * 24))
    return day
  }
}

export const verifyIsToday = (numberDayOfYear: number) => {
  const date = new Date()
  const startOfYear = new Date(date.getFullYear(), 0, 0)
  const diff = date.getTime() - startOfYear.getTime()
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24))

  if (numberDayOfYear === dayOfYear) return 'today'

  if (numberDayOfYear > dayOfYear) return 'next'

  if (numberDayOfYear < dayOfYear) return 'previous'
}
