import { BackgroundContainer } from '@/components/layout/BackgroundContainer'
import { Container } from '@/components/layout/Container'
import { Header } from '@/components/layout/Header'
import { Sidebar } from '@/components/layout/Sidebar'
import { StatCard } from '@/components/statistics/StatCard'
import useGetMyUser from '@/hooks/useGetMyUser'
import useStatistics from '@/hooks/useStatistics'
import { Grid, Smile } from 'lucide-react'

const Statistics = () => {
  const { user } = useGetMyUser()
  const { totalHabits, perfectDaysCount } = useStatistics(user?._id ?? '')
  return (
    <Container>
      <Sidebar />
      <section className="col-span-10 flex flex-col gap-4">
        <Header _id="Statistics" email="Statistics" />
        <BackgroundContainer>
          <div className="grid grid-cols-3 gap-4">
            <StatCard
              data={totalHabits}
              title="Total Habits"
              icon={<Smile className="mb-2 text-red-500" size={19} />}
            />
            <StatCard
              data={perfectDaysCount}
              title="Perfect Days"
              icon={<Grid className="mb-2 text-red-500" size={19} />}
            />
          </div>
        </BackgroundContainer>
      </section>
    </Container>
  )
}

export default Statistics
