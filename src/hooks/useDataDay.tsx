import { useState } from 'react'

const useDataDay = () => {
  const [day, setDay] = useState<number>(0)
  const date = new Date()
  date.setDate(date.getDate() + day)
  const fullDate = date.toLocaleDateString('es-AR')
  const dayIndex = date.getDay()
  const dayName = date.toLocaleDateString('en-US', { weekday: 'long' })

  return {
    day,
    setDay,
    fullDate,
    dayIndex,
    dayName,
    date,
  }
}

export default useDataDay
