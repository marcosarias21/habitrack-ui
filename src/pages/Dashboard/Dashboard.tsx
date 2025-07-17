import { DateSection } from '@/components/habits/DateSection'
import { HabitCard } from '@/components/habits/HabitCard'
import { ModalCreateHabit } from '@/components/habits/ModalCreateHabit'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import useGetFullDay from '@/hooks/useGetFullDay'
import useGetHabitData from '@/hooks/useGetHabitData'
import useGetMyUser from '@/hooks/useGetMyUser'
import { useCreateHabit } from '@/services/habit/useHabit'
import { useHabitStore } from '@/store/habitStore'

const Dashboard = () => {
  const { user } = useGetMyUser()
  const { days } = useHabitStore()
  const { dataDay } = useGetFullDay()
  const { habitData } = useGetHabitData(user?._id, dataDay.dayIndex)
  const createHabit = async (name: string, frequency: string) => {
    await useCreateHabit(user?._id, name, frequency, days)
  }

  return (
    <section className="flex h-dvh gap-5">
      <Sidebar />
      <section className="flex w-full flex-col gap-10 pr-5">
        {user && <Header {...user} />}
        <div className="rounded-lg bg-[#fff] p-4">
          <div className="flex h-fit w-full justify-between">
            <div className="flex w-full justify-between">
              <DateSection {...dataDay} />
              <ModalCreateHabit createHabit={createHabit} />
            </div>
          </div>
          <div className="mt-10 px-10">
            <HabitCard />
          </div>
        </div>
      </section>
    </section>
  )
}

export default Dashboard
