import { type Habit } from '@/interfaces/habit/Habit'
import { getAllHabits } from '@/services/habit/useAllHabits'
import { getAverageDaily, getPerfectDays } from '@/utils/statisticsUtils'
import { useEffect, useState } from 'react'

const useStatistics = (idUser: string) => {
  const [allHabits, setAllHabits] = useState<Habit[]>([])
  const [perfectDays, setPerfectDays] = useState<string[]>([])
  const [averageDaily, setAverageDaily] = useState<number>()

  const fetchData = async () => {
    const habits: Habit[] = await getAllHabits(idUser)
    setAllHabits(habits)
    setPerfectDays(getPerfectDays(habits))
    setAverageDaily(getAverageDaily(habits))
  }

  useEffect(() => {
    fetchData()
  }, [idUser])

  return {
    totalHabits: allHabits.length,
    perfectDays,
    perfectDaysCount: perfectDays.length,
    averageDaily,
    allHabits,
  }
}

export default useStatistics
