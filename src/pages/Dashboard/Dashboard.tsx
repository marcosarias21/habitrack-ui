import { DateSection } from '@/components/habits/DateSection'
import { HabitCard } from '@/components/habits/HabitCard'
import { NoPendingHabits } from '@/components/habits/NoPendingHabits'
import { StatisticsHabit } from '@/components/habits/StatisticsHabit'
import { Header } from '@/components/Header'
import { ModalCreateHabit } from '@/components/modals/ModalCreateHabit'
import { ModalEditHabit } from '@/components/modals/ModalEditHabit'
import { Sidebar } from '@/components/Sidebar'
import useDataDay from '@/hooks/useDataDay'
import useGetMyUser from '@/hooks/useGetMyUser'
import useHabitLogic from '@/hooks/useHabitLogic'
import { useHabitStore } from '@/store/habitStore'

const Dashboard = () => {
  const { user } = useGetMyUser()
  const { fullDate, dayIndex, dayName, setDay, day } = useDataDay()
  const { setHabit, habit } = useHabitStore()
  const {
    createHabit,
    habitsData,
    habitsCompleted,
    onCompleteHabit,
    percentageDone,
    editHabit,
  } = useHabitLogic(user, dayIndex, fullDate, day)

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
                  onClick={() => setHabit(habit)}
                />
              ))}
            </div>
          ) : (
            <NoPendingHabits />
          )}
          <ModalEditHabit {...habit} editHabit={editHabit} />
        </div>
        <div className="rounded-lg bg-[#fff] p-4">
          <h2 className="text-lg font-bold">Habits Completed</h2>
          <div className="mt-4 flex flex-col gap-5 px-10">
            {habitsCompleted.map((habit) => (
              <HabitCard key={habit._id} {...habit} />
            ))}
          </div>
        </div>
      </section>
      <section className="col-span-3 mr-5 bg-[#fff] px-7">
        <StatisticsHabit percentageDone={percentageDone} />
      </section>
    </section>
  )
}

export default Dashboard
