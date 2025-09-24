import { BackgroundContainer } from '@/components/layout/BackgroundContainer'
import { Container } from '@/components/layout/Container'
import { Header } from '@/components/layout/Header'
import { Sidebar } from '@/components/layout/Sidebar'
import { HeaderStatistic } from '@/components/statistics/HeaderStatistic'
import { HeatMap } from '@/components/statistics/HeatMap'
import { StatCard } from '@/components/statistics/StatCard'
import useGetMyUser from '@/hooks/useGetMyUser'
import useStatistics from '@/hooks/useStatistics'
import { getStreak } from '@/utils/statisticsUtils'
import { Construction, Grid, Smile } from 'lucide-react'

const Statistics = () => {
  const { user } = useGetMyUser()
  const { totalHabits, perfectDaysCount, averageDaily, allHabits } =
    useStatistics(user?._id ?? '')
  return (
    <Container>
      <Sidebar />
      <section className="col-span-10 flex h-full flex-col gap-4 overflow-auto">
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
            <StatCard
              data={averageDaily?.toFixed(2) ?? ''}
              title="Average per daily"
              icon={<Construction className="mb-2 text-red-500" size={19} />}
            />
          </div>
        </BackgroundContainer>
        {allHabits.map((habit) => (
          <BackgroundContainer>
            <div className="flex h-full flex-col justify-center">
              <HeaderStatistic {...habit} streak={getStreak(habit)} />
              <div className="flex w-full justify-center">
                <HeatMap datesDone={habit.datesDone} />
              </div>
            </div>
          </BackgroundContainer>
        ))}
      </section>
    </Container>
  )
}

export default Statistics
