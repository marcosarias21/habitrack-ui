import type { Habit } from '@/interfaces/habit/Habit'
import type { UserAuthenticated } from '@/interfaces/user/UserAuthenticated'
import {
  completeHabit,
  useCreateHabit,
  useEditHabit,
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
    const filterHabits: Habit[] = habitsCompleted.filter((h: any) =>
      h.datesDone.includes(fullDate),
    )
    setPercentageDone(percentage)
    setHabitsData(habitsNotDone)
    setHabitsCompleted(filterHabits)
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

  const editHabit = async (
    id: string,
    name: string,
    days: number[],
    frequency: string,
  ) => {
    const { message } = await useEditHabit(id, name, days, frequency)
    alert(message)
  }

  useEffect(() => {
    getHabit()
  }, [user, day, fullDate])
  return {
    getHabit,
    percentageDone,
    createHabit,
    onCompleteHabit,
    habitsData,
    habitsCompleted,
    editHabit,
  }
}

export default useHabitLogic
