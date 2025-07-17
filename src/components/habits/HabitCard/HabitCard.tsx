import { DropdownActions } from '@/components/DropdownActions'
import type { Habit } from '@/interfaces/habit/Habit'
import { Book } from 'lucide-react'

const HabitCard = ({ name, createdAt }: Habit) => {
  return (
    <div className="flex justify-between rounded bg-[#f7f9fb] px-3 py-5">
      <div className="flex gap-1">
        <span className="rounded-full border-1 bg-blue-400 p-2">
          <Book className="text-gray-100" size={20} />
        </span>
        <div className="flex flex-col">
          <h2 className="font-medium">{name}</h2>
          <span className="text-xs text-gray-400">{createdAt}</span>
        </div>
      </div>
      <div className="flex items-center">
        <DropdownActions />
      </div>
    </div>
  )
}

export default HabitCard
