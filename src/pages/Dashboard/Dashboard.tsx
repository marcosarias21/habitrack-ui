import { DateSection } from '@/components/habits/DateSection'
import { HabitCard } from '@/components/habits/HabitCard'
import { ModalCreateHabit } from '@/components/habits/ModalCreateHabit'
import { NoPendingHabits } from '@/components/habits/NoPendingHabits'
import { StatisticsHabit } from '@/components/habits/StatisticsHabit'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import useDataDay from '@/hooks/useDataDay'
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
  const { fullDate, dayIndex, dayName, setDay, day } = useDataDay()
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
    <section className="grid h-dvh grid-cols-12 gap-4">
      <Sidebar />
      <section className="col-span-7 flex w-full flex-col gap-7">
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
        <div className="flex flex-col rounded-lg bg-[#fff] p-4">
          <h2 className="font-bold">Habits Completed</h2>
          {habitsCompleted.map((habit) => (
            <HabitCard key={habit._id} {...habit} />
          ))}
        </div>
      </section>
      <section className="col-span-3 mr-5 bg-[#fff] px-7">
        <StatisticsHabit percentageDone={percentageDone} />
      </section>
    </section>
  )
}

export default Dashboard
