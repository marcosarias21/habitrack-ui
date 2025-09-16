import { CalendarSection } from '@/components/CalendarSection'
import { FilterArea } from '@/components/FilterArea'
import { DateSection } from '@/components/habits/DateSection'
import { EmptyHabitsMessage } from '@/components/habits/EmptyHabitsMessage'
import { HabitCard } from '@/components/habits/HabitCard'
import { NoPendingHabits } from '@/components/habits/NoPendingHabits'
import { StatisticsHabit } from '@/components/habits/StatisticsHabit'
import { Header } from '@/components/Header'
import { BackgroundContainer } from '@/components/layout/BackgroundContainer'
import { Container } from '@/components/layout/Container'
import { ModalCreateHabit } from '@/components/modals/ModalCreateHabit'
import { ModalEditHabit } from '@/components/modals/ModalEditHabit'
import { Sidebar } from '@/components/Sidebar'
import { areas } from '@/data/areas'
import useDataDay from '@/hooks/useDataDay'
import useGetMyUser from '@/hooks/useGetMyUser'
import useHabitLogic from '@/hooks/useHabitLogic'
import { useHabitStore } from '@/store/habitStore'
import { getDayDifference } from '@/utils/dateUtils'
import { useEffect, useState } from 'react'

const Dashboard = () => {
  const { user } = useGetMyUser()
  const { fullDate, dayIndex, dayName, setDay, day, date } = useDataDay()
  const {
    createHabit,
    habitsData,
    habitsCompleted,
    onCompleteHabit,
    percentageDone,
    editHabit,
  } = useHabitLogic(user, dayIndex, fullDate, day)
  const { setHabit, habit } = useHabitStore()
  const [dateCalendar, setDateCalendar] = useState<Date | undefined>(new Date())

  useEffect(() => {
    if (dateCalendar) {
      setDay(getDayDifference(new Date(), dateCalendar))
    }
  }, [dateCalendar])

  return (
    <Container>
      <Sidebar />
      <section className="col-span-7 flex w-full flex-col gap-7">
        {user && <Header {...user} />}
        <FilterArea areas={areas} />
        <BackgroundContainer>
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
                  onClick={() => setHabit(habit)}
                  dateToCompare={fullDate}
                  dateNextOrPrevious={date}
                />
              ))}
            </div>
          ) : (
            <NoPendingHabits />
          )}
          <ModalEditHabit {...habit} editHabit={editHabit} />
        </BackgroundContainer>
        <BackgroundContainer>
          <h2 className="text-lg font-bold">Habits Completed</h2>
          <div className="mt-4 flex flex-col gap-5 px-10">
            {habitsCompleted.length > 0 ? (
              habitsCompleted.map((habit) => (
                <HabitCard
                  key={habit._id}
                  {...habit}
                  dateToCompare={fullDate}
                />
              ))
            ) : (
              <EmptyHabitsMessage />
            )}
          </div>
        </BackgroundContainer>
      </section>
      <section className="col-span-3 mr-5 bg-[#fff] px-7">
        <StatisticsHabit percentageDone={percentageDone} />
        {dateCalendar && (
          <CalendarSection
            dateCalendar={dateCalendar}
            setDateCalendar={setDateCalendar}
          />
        )}
      </section>
    </Container>
  )
}

export default Dashboard
