import { Button } from '@/components/ui/button'
import type { FullDate } from '@/interfaces/date/FullDate'
import { DateSection } from '../DateSection'

interface Prop {
  dataDay: FullDate
}

const HabitDashboard: React.FC<Prop> = ({ dataDay }) => {
  console.log(dataDay)
  return (
    <div className="flex h-fit w-full justify-between rounded-lg bg-[#fff] p-4">
      <div className="flex w-full justify-between">
        <DateSection {...dataDay} />
        <div>
          <Button className="bg-blue-500 hover:bg-blue-400">+ New Habit</Button>
        </div>
      </div>
    </div>
  )
}

export default HabitDashboard
