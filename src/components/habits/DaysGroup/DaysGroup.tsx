import { daysToGroup } from '@/data/utils'
import { useHabitStore } from '@/store/habitStore'

const DaysGroup = () => {
  const { days, setDays, popDay } = useHabitStore()

  const saveIndex = (index: number) => {
    if (!days.includes(index)) {
      setDays(index)
    } else {
      popDay(index)
    }
  }
  return (
    <div className="mt-1 flex gap-1">
      {daysToGroup.map((d) => (
        <button
          type="reset"
          onClick={() => saveIndex(d.numberDay)}
          className={`rounded border-1 px-2 py-1 text-sm ${days.includes(d.numberDay) && 'bg-red-500 text-white'}`}
        >
          {d.day}
        </button>
      ))}
    </div>
  )
}

export default DaysGroup
