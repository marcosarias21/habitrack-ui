import { areas } from '@/data/areas'
import { daysToGroup } from '@/data/utils'
import type { Habit } from '@/interfaces/habit/Habit'
import React from 'react'

interface Prop extends Habit {
  streak: number
}
const HeaderStatistic: React.FC<Prop> = ({
  name,
  datesDone,
  streak,
  daysOfWeek,
}) => {
  const daysToDone = daysToGroup.filter((day) =>
    daysOfWeek.includes(day.numberDay),
  )
  const iconFounded = areas?.find((area) => (area.name = name))
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400">
            <span className="text-gray-100">{iconFounded?.icon}</span>
          </div>
          <h2 className="text-lg font-bold text-gray-800">{name}</h2>
        </div>
        <div className="flex">
          {daysToDone.map((day, i) => (
            <p className="text-sm font-medium text-gray-400">
              {day.day}
              {i < daysToDone.length - 1 && ','}
            </p>
          ))}
        </div>
      </div>
      <div className="mb-10 flex w-full justify-center gap-40">
        <div className="text-center">
          <h4 className="text-lg font-semibold">Total</h4>
          <span className="font-medium">{datesDone?.length}</span>
        </div>
        <div className="text-center">
          <h4 className="font-semibold">Streak</h4>
          <span>{streak > 1 ? streak : 0}</span>
        </div>
      </div>
    </div>
  )
}

export default HeaderStatistic
