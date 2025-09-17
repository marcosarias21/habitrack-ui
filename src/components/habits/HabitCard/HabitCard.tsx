import { DropdownActions } from '@/components/common/DropdownActions'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { areas } from '@/data/areas'
import type { Habit } from '@/interfaces/habit/Habit'
import { getDayOfYear, verifyIsToday } from '@/utils/dateUtils'
import type React from 'react'

interface Prop extends Habit {
  onCompleteHabit?: (id: string, date: string) => void
  onClick?: () => void
  dateToCompare?: string
  dateNextOrPrevious?: Date
}

const HabitCard: React.FC<Prop> = ({
  _id,
  name,
  area,
  createdAt,
  onCompleteHabit,
  datesDone,
  onClick,
  dateToCompare,
  dateNextOrPrevious,
}) => {
  console.log(dateNextOrPrevious)
  const createdDay = new Date(createdAt)
  const d = new Date()
  const date = d.toLocaleDateString('es-ar')
  const dateToDone = createdDay.toLocaleDateString('es-ar')
  const day = verifyIsToday(getDayOfYear(dateNextOrPrevious as Date) as number)
  const isCompleted = datesDone.includes(dateToCompare ?? '')
  const iconHabit = areas.find((a) => a.value == area)

  return (
    <div className="flex justify-between rounded bg-[#f7f9fb] px-3 py-5">
      <div className="flex gap-1">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400">
          <span className="text-gray-100">{iconHabit?.icon}</span>
        </div>
        <div className="flex flex-col">
          <h2 className="font-medium">{name}</h2>
          <span className="text-xs text-gray-400">
            Created At: {dateToDone}
          </span>
          {day === 'today'
            ? !isCompleted && (
                <Button
                  className="mt-2 bg-green-500 hover:bg-green-400"
                  onClick={() => onCompleteHabit?.(_id, date)}
                >
                  Complete
                </Button>
              )
            : isCompleted && <Badge className="bg-green-400">Completado</Badge>}
          {day == 'next' && (
            <Button className="mt-2 bg-gray-500">Blocked</Button>
          )}
          {day === 'previous' && !isCompleted ? (
            <Badge className="bg-gray-400">Not completed on day</Badge>
          ) : (
            day === 'previous' && isCompleted && <Button>Completed</Button>
          )}
        </div>
      </div>
      <div className="flex items-center">
        <DropdownActions onClick={onClick} />
      </div>
    </div>
  )
}

export default HabitCard
