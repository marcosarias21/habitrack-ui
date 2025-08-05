import type { Area } from '@/interfaces/habit/Habit'
import { Button } from '../ui/button'
import { useState } from 'react'
import { Globe } from 'lucide-react'

type Prop = { areas: Area[] }

const FilterArea: React.FC<Prop> = ({ areas }) => {
  const [selectedArea, setSelectedArea] = useState<string>('')
  return (
    <div className="rounded-lg bg-[#FEFEFE] p-4">
      <div className="flex gap-4">
        <Button
          variant={'outline'}
          onClick={() => setSelectedArea('all')}
          className={`${selectedArea === 'all' && 'bg-blue-500'}`}
        >
          <Globe />
          All
        </Button>
        {areas.map((area) => (
          <Button
            variant={'outline'}
            className={`${selectedArea === area.value && 'bg-blue-500'}`}
            onClick={() => setSelectedArea(area.value)}
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
