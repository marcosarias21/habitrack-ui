import type { Habit } from '@/interfaces/habit/Habit'

export const getPerfectDays = (habits: Habit[]) => {
  const dataMap: Record<string, number> = {}

  habits.forEach((habit) => {
    const uniqueDates = Array.from(new Set(habit.datesDone || []))
    uniqueDates.forEach((rawDate) => {
      dataMap[rawDate] = (dataMap[rawDate] || 0) + 1
    })
  })

  const perfectDates = Object.entries(dataMap)
    .filter(([date, completedCount]) => {
      const habitsAssignedThatDay = habits.filter((h) =>
        (h.datesDone || []).includes(date),
      ).length

      return completedCount === habitsAssignedThatDay
    })
    .map(([date]) => date)

  return perfectDates
}

export const getAverageDaily = (habits: Habit[]) => {
  const totalCompletions = habits.reduce(
    (sum, habit) => sum + habit.datesDone.length,
    0,
  )

  const uniqueDays = new Set()
  habits.forEach((habit) =>
    habit.datesDone.forEach((date) => uniqueDays.add(date)),
  )

  const avgPerDay = totalCompletions / uniqueDays.size
  return avgPerDay
}
export const shiftDate = (date: Date, numDays: number) => {
  const newDate = new Date(date)
  newDate.setDate(newDate.getDate() + numDays)
  return newDate
}

export const getRange = (count: number) => {
  return Array.from({ length: count }, (_, i) => i)
}

export const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
