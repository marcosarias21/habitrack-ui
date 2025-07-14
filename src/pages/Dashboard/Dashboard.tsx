import { HabitDashboard } from '@/components/habits/HabitDashboard'
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
        <HabitDashboard dataDay={dataDay} />
      </section>
    </section>
  )
}

export default Dashboard
