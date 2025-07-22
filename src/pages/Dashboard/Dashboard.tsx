import { DateSection } from '@/components/habits/DateSection'
import { HabitCard } from '@/components/habits/HabitCard'
import { ModalCreateHabit } from '@/components/habits/ModalCreateHabit'
import { NoPendingHabits } from '@/components/habits/NoPendingHabits'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import useGetMyUser from '@/hooks/useGetMyUser'
import useNextDay from '@/hooks/useNextDay'
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
  const { fullDate, dayIndex, dayName, setDay, day } = useNextDay()
  const [habitsData, setHabitsData] = useState<Habit[]>([])

  const getHabit = async () => {
    const { habits } = await useGetHabit(user?._id, dayIndex, fullDate)
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
  }, [user, day])

  return (
    <section className="flex h-dvh gap-5">
      <Sidebar />
      <section className="flex w-full flex-col gap-10 pr-5">
        {user && <Header {...user} />}
        <div className="rounded-lg bg-[#FEFEFE] p-4">
          <div className="flex h-fit w-full justify-between">
            <div className="flex w-full justify-between">
              <DateSection
                fullDate={fullDate}
                dayName={dayName}
                setDay={setDay}
                day={day}
              />
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
            <NoPendingHabits />
          )}
        </div>
      </section>
    </section>
  )
}

export default Dashboard
