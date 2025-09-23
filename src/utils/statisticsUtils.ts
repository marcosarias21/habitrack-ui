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

export const getStreak = (habit: Habit) => {
  const dates = habit.datesDone

  if (dates.length === 0) return 0

  const toDate = (str: string) => {
    const [day, month, year] = str.split('/').map(Number)
    return new Date(year, month - 1, day)
  }

  const sortedDates = [...new Set(dates)]
    .map((d) => toDate(d))
    .sort((a, b) => a.getTime() - b.getTime())

  const { maxStreak } = sortedDates.reduce(
    (acc, curr, i) => {
      if (i === 0) return { ...acc, prev: curr }

      const diffDays =
        (curr.getTime() - acc.prev!.getTime()) / (1000 * 60 * 60 * 24)

      const currentStreak = diffDays === 1 ? acc.currentStreak + 1 : 1

      return {
        prev: curr,
        currentStreak,
        maxStreak: Math.max(acc.maxStreak, currentStreak),
      }
    },
    { prev: null as Date | null, currentStreak: 1, maxStreak: 1 },
  )

  return maxStreak
}
