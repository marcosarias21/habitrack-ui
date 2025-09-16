import { Header } from '@/components/Header'
import { BackgroundContainer } from '@/components/layout/BackgroundContainer'
import { Container } from '@/components/layout/Container'
import { Sidebar } from '@/components/Sidebar'
import useGetMyUser from '@/hooks/useGetMyUser'
import useStatistics from '@/hooks/useStatistics'

const Statistics = () => {
  const { user } = useGetMyUser()
  const { totalHabits } = useStatistics(user?._id ?? '')
  return (
    <Container>
      <Sidebar />
      <section className="col-span-10 flex flex-col gap-4">
        <Header _id="Statistics" email="Statistics" />
        <BackgroundContainer>
          <div className="flex"></div>
        </BackgroundContainer>
      </section>
    </Container>
  )
}

export default Statistics
