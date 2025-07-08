import { HabitManager } from '@/components/habits/HabitManager'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import useGetMyUser from '@/hooks/useGetMyUser'

const Dashboard = () => {
  const { user } = useGetMyUser()
  console.log(user)
  return (
    <section className="flex h-dvh">
      <Sidebar />
      <Header />
      <HabitManager />
    </section>
  )
}

export default Dashboard
