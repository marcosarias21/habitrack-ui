export const getDayDifference = (today: Date, dateCalendar: Date) => {
  today.setHours(0, 0, 0, 0)

  const selected = new Date(dateCalendar)
  selected.setHours(0, 0, 0, 0)

  const diffInMs = selected.getTime() - today.getTime()
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24)
  return diffInDays
}
