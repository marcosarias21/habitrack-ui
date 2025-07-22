import { useState } from 'react'

const useNextDay = () => {
  const [nextDay, setNextDay] = useState<number>(0)
  const date = new Date()
  date.setDate(date.getDate() + nextDay)
  const fullDate = date.toLocaleDateString('es-AR')
  const dayIndex = date.getDay()
  const dayName = date.toLocaleDateString('en-US', { weekday: 'long' })

  return {
    nextDay,
    setNextDay,
    fullDate,
    dayIndex,
    dayName,
  }
}

export default useNextDay
