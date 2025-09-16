import { type Habit } from '@/interfaces/habit/Habit'
import { getAllHabits } from '@/services/habit/useAllHabits'
import { useEffect, useState } from 'react'

const useStatistics = (idUser: string) => {
  const [allHabits, setAllHabits] = useState<Habit[]>([])
  const [perfectDays, setPerfectDays] = useState<string[]>([])

  const fetchData = async () => {
    const habits: Habit[] = await getAllHabits(idUser)
    setAllHabits(habits)

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

    setPerfectDays(perfectDates)
  }

  useEffect(() => {
    fetchData()
  }, [idUser])

  return {
    totalHabits: allHabits.length,
    perfectDays,
    perfectDaysCount: perfectDays.length,
  }
}

export default useStatistics
