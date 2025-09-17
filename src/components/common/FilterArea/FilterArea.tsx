import type { Area } from '@/interfaces/habit/Habit'
import { Globe } from 'lucide-react'
import { useFilterStore } from '@/store/filterStore'
import { Button } from '@/components/ui/button'

type Prop = { areas: Area[] }

const FilterArea: React.FC<Prop> = ({ areas }) => {
  const { setFilter, filter } = useFilterStore()
  return (
    <div className="rounded-lg bg-[#FEFEFE] p-4">
      <div className="flex gap-4">
        <Button
          variant={'outline'}
          onClick={() => setFilter('')}
          className={`${filter === '' && '!bg-blue-500 !text-gray-100'}`}
        >
          <Globe />
          All
        </Button>
        {areas.map((area) => (
          <Button
            variant={'outline'}
            className={`${filter === area.value && '!bg-blue-500 !text-gray-100'}`}
            onClick={() => setFilter(area.value)}
          >
            {area.icon}
            {area.name}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default FilterArea
