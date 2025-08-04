import { useEffect, useState } from 'react'

const useDataDay = () => {
  const [day, setDay] = useState<number>(0)
  const [fullDate, setFullDate] = useState('')
  const date = new Date()
  date.setDate(date.getDate() + day)
  const dayIndex = date.getDay()
  const dayName = date.toLocaleDateString('en-US', { weekday: 'long' })

  useEffect(() => {
    setFullDate(date.toLocaleDateString('es-AR'))
  }, [date])

  return {
    day,
    setDay,
    fullDate,
    dayIndex,
    dayName,
    date,
    setFullDate,
  }
}

export default useDataDay
