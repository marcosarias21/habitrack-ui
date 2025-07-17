import { useGetHabit } from '@/services/habit/useHabit'
import { useEffect, useState } from 'react'

const useGetHabitData = (idUser: string | undefined, today: number) => {
  const [habitData, setHabitData] = useState([])

  const getHabit = async () => {
    const { habit } = await useGetHabit(idUser, today)
    setHabitData(habit)
  }

  useEffect(() => {
    getHabit()
  }, [idUser])

  return { habitData }
}

export default useGetHabitData
