import type { FullDate } from '@/interfaces/date/FullDate'

const DateSection = ({
  dayActual,
  dayNameActual,
  monthActual,
  yearActual,
}: FullDate) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-bold">{dayNameActual}</h2>
      <p className="text-xs font-medium text-gray-500">
        {dayActual} {monthActual} {yearActual}
      </p>
    </div>
  )
}

export default DateSection
