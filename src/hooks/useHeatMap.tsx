import type { Habit } from '@/interfaces/habit/Habit'
import { shiftDate } from '@/utils/statisticsUtils'

const today = new Date()

const useHeatMap = (datesDone: Habit['datesDone']) => {
  const parseDate = (dateStr: string) => {
    const [day, month, year] = dateStr.split('/')
    return new Date(Number(year), Number(month) - 1, Number(day))
  }

  const completedValues = datesDone
    .map((date) => {
      const parsed = parseDate(date)
      if (!parsed || isNaN(parsed.getTime())) return null
      return { date: parsed, count: 1 }
    })
    .filter(Boolean)

  const startDate = shiftDate(today, -100)
  const totalDays = 101

  const allValues = Array.from({ length: totalDays }).map((_, i) => {
    const currentDate = shiftDate(startDate, i)
    const completed = completedValues.find(
      (v) => v!.date.toDateString() === currentDate.toDateString(),
    )
    return completed || { date: currentDate, count: 0 }
  })

  return {
    startDate,
    allValues,
    today,
  }
}

export default useHeatMap
