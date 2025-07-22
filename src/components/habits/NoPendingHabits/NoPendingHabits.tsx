import { CircleCheck } from 'lucide-react'

const NoPendingHabits = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center py-20">
      <div>
        <CircleCheck size={100} className="text-gray-300" />
      </div>
      <div className="w-70">
        <h2 className="text-center font-medium text-gray-400">
          Great job! You have completed all your habits for today.🟢
        </h2>
      </div>
    </div>
  )
}

export default NoPendingHabits
