import { areas } from '@/data/areas'
import type { Habit } from '@/interfaces/habit/Habit'
import React from 'react'

type Prop = Partial<Habit>
const HeaderStatistic: React.FC<Prop> = ({ name }) => {
  const iconFounded = areas?.find((area) => (area.name = name))
  return (
    <div className="flex items-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400">
        <span className="text-gray-100">{iconFounded?.icon}</span>
      </div>
      <h2 className="text-lg font-bold">{name}</h2>
    </div>
  )
}

export default HeaderStatistic
