import { days, months } from '@/data/utils'

const useGetFullDay = () => {
  const day = new Date()
  const dayActual = day.getDate()
  const dayIndex = day.getDay()
  const yearActual = day.getFullYear()
  const monthsIndex = day.getMonth()
  const monthActual = months[monthsIndex]
  const dayNameActual = days[dayIndex]
  const dataDay = {
    dayActual,
    yearActual,
    monthActual,
    dayNameActual,
    dayIndex,
  }

  return { dataDay }
}

export default useGetFullDay
