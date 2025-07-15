import { Input } from '@/components/ui/input'

const WeeklyOption = () => {
  return (
    <div className="mt-2 flex items-center gap-1">
      <div>
        <h4 className="font-medium">Frequency:</h4>
        <span className="self-end text-xs font-medium text-gray-500">
          Times a week
        </span>
      </div>
      <Input type="number" defaultValue={1} className="w-20" />
    </div>
  )
}

export default WeeklyOption
