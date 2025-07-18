import type { Habit } from '@/interfaces/habit/Habit'
import { useGetHabit } from '@/services/habit/useHabit'
import { useEffect, useState } from 'react'

const useGetHabitData = (idUser: string | undefined, today: number) => {
  const [habitData, setHabitData] = useState<Habit[]>([])
  const date = new Date()
  const fullDate = date.toLocaleDateString('es-AR')

  const getHabit = async () => {
    const { habits } = await useGetHabit(idUser, today, fullDate)
    setHabitData(habits)
  }

  useEffect(() => {
    getHabit()
  }, [idUser])

  return { habitData }
}

export default useGetHabitData
