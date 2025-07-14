const useGetFullDay = () => {
  const day = new Date()
  const dayActual = day.getDate()
  const yearActual = day.getFullYear()
  const monthsIndex = day.getMonth()
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const monthActual = months[monthsIndex]
  const dataDay = {
    dayActual,
    yearActual,
    monthActual,
  }

  return { dataDay }
}

export default useGetFullDay
