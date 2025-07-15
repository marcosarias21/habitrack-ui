import { DateSection } from '@/components/habits/DateSection'
import { ModalCreateHabit } from '@/components/habits/ModalCreateHabit'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import useGetFullDay from '@/hooks/useGetFullDay'
import useGetMyUser from '@/hooks/useGetMyUser'

const Dashboard = () => {
  const { user } = useGetMyUser()
  const { dataDay } = useGetFullDay()
  return (
    <section className="flex h-dvh gap-5">
      <Sidebar />
      <section className="flex w-full flex-col gap-10 pr-5">
        {user && <Header {...user} />}
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <DateSection {...dataDay} />
            <ModalCreateHabit />
          </div>
        </div>
      </section>
    </section>
  )
}

export default Dashboard
