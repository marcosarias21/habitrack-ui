import { DropdownActions } from '@/components/DropdownActions'
import { Book } from 'lucide-react'

const HabitCard = () => {
  return (
    <div className="flex justify-between rounded bg-[#f7f9fb] px-3 py-5">
      <div className="flex gap-1">
        <span className="rounded-full border-1 bg-blue-400 p-2">
          <Book className="text-gray-100" size={20} />
        </span>
        <h2 className="font-medium">Habit Name</h2>
      </div>
      <div className="flex items-center">
        <DropdownActions />
      </div>
    </div>
  )
}

export default HabitCard
