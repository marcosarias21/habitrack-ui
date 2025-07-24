import type { Habit } from '@/interfaces/habit/Habit'
import type { UserAuthenticated } from '@/interfaces/user/UserAuthenticated'
import {
  completeHabit,
  useCreateHabit,
  useGetHabit,
} from '@/services/habit/useHabit'
import { useEffect, useState } from 'react'

const useHabitLogic = (
  user: UserAuthenticated | undefined,
  dayIndex: number,
  fullDate: string,
  day: number,
) => {
  const [percentageDone, setPercentageDone] = useState<number>(0)
  const [habitsData, setHabitsData] = useState<Habit[]>([])
  const [habitsCompleted, setHabitsCompleted] = useState<Habit[]>([])

  const getHabit = async () => {
    const { habitsNotDone, allHabitsToday, habitsCompleted } =
      await useGetHabit(user?._id, dayIndex, fullDate)
    const doneCount = allHabitsToday - habitsNotDone.length
    const percentage = (doneCount / allHabitsToday) * 100
    setPercentageDone(percentage)
    setHabitsData(habitsNotDone)
    setHabitsCompleted(habitsCompleted)
  }

  const createHabit = async (
    name: string,
    frequency: string,
    days: number[],
  ) => {
    await useCreateHabit(user?._id, name, frequency, days)
    getHabit()
  }

  const onCompleteHabit = async (id: string, date: string) => {
    await completeHabit(id, date)
    getHabit()
  }

  useEffect(() => {
    getHabit()
  }, [user, day])
  return {
    getHabit,
    percentageDone,
    createHabit,
    onCompleteHabit,
    habitsData,
    habitsCompleted,
  }
}

export default useHabitLogic
