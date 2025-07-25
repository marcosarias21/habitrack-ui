import { DropdownActions } from '@/components/DropdownActions'
import { Button } from '@/components/ui/button'
import type { Habit } from '@/interfaces/habit/Habit'
import { Book } from 'lucide-react'
import type React from 'react'

interface Prop extends Habit {
  onCompleteHabit?: (id: string, date: string) => void
  onClick?: () => void
}

const HabitCard: React.FC<Prop> = ({
  _id,
  name,
  createdAt,
  onCompleteHabit,
  datesDone,
  onClick,
}) => {
  const createdDay = new Date(createdAt)
  const d = new Date()
  const date = d.toLocaleDateString('es-ar')
  const dateToDone = createdDay.toLocaleDateString('es-ar')

  return (
    <div className="flex justify-between rounded bg-[#f7f9fb] px-3 py-5">
      <div className="flex gap-1">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400">
          <Book className="text-gray-100" size={20} />
        </div>
        <div className="flex flex-col">
          <h2 className="font-medium">{name}</h2>
          <span className="text-xs text-gray-400">
            Created At: {dateToDone}
          </span>
          {!datesDone.includes(date as any) && (
            <Button
              className="mt-2 bg-green-500 hover:bg-green-400"
              onClick={() => onCompleteHabit?.(_id, date)}
            >
              Complete
            </Button>
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
