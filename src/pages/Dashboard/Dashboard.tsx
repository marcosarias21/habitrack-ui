import { HabitManager } from '@/components/habits/HabitManager'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import useGetMyUser from '@/hooks/useGetMyUser'

const Dashboard = () => {
  const { user } = useGetMyUser()
  return (
    <section className="flex h-dvh gap-5">
      <Sidebar />
      {user && <Header {...user} />}
      <HabitManager />
    </section>
  )
}

export default Dashboard
