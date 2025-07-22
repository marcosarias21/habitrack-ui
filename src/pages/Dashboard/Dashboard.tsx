import { DateSection } from '@/components/habits/DateSection'
import { HabitCard } from '@/components/habits/HabitCard'
import { ModalCreateHabit } from '@/components/habits/ModalCreateHabit'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import useGetFullDay from '@/hooks/useGetFullDay'
import useGetMyUser from '@/hooks/useGetMyUser'
import type { Habit } from '@/interfaces/habit/Habit'
import {
  completeHabit,
  useCreateHabit,
  useGetHabit,
} from '@/services/habit/useHabit'
import { useHabitStore } from '@/store/habitStore'
import { useEffect, useState } from 'react'

const Dashboard = () => {
  const { user } = useGetMyUser()
  const { days } = useHabitStore()
  const { dataDay } = useGetFullDay()
  const date = new Date()
  const fullDate = date.toLocaleDateString('es-AR')
  const [habitsData, setHabitsData] = useState<Habit[]>([])

  const getHabit = async () => {
    const { habits } = await useGetHabit(user?._id, dataDay.dayIndex, fullDate)
    setHabitsData(habits)
  }

  const createHabit = async (name: string, frequency: string) => {
    await useCreateHabit(user?._id, name, frequency, days)
  }

  const onCompleteHabit = async (id: string, date: string) => {
    await completeHabit(id, date)
    getHabit()
  }

  useEffect(() => {
    getHabit()
  }, [user])

  return (
    <section className="flex h-dvh gap-5">
      <Sidebar />
      <section className="flex w-full flex-col gap-10 pr-5">
        {user && <Header {...user} />}
        <div className="rounded-lg bg-[#FEFEFE] p-4">
          <div className="flex h-fit w-full justify-between">
            <div className="flex w-full justify-between">
              <DateSection {...dataDay} />
              <ModalCreateHabit createHabit={createHabit} />
            </div>
          </div>
          {habitsData.length > 0 ? (
            <div className="mt-10 flex flex-col gap-5 px-10">
              {habitsData?.map((habit) => (
                <HabitCard
                  key={habit._id}
                  {...habit}
                  onCompleteHabit={onCompleteHabit}
                />
              ))}
            </div>
          ) : (
            <div>Great job! You have completed all your habits for today</div>
          )}
        </div>
      </section>
    </section>
  )
}

export default Dashboard
