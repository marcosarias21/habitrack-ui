import { Calendar } from '@/components/ui/calendar'
import type { Dispatch, SetStateAction } from 'react'

interface Prop {
  dateCalendar: Date
  setDateCalendar: Dispatch<SetStateAction<Date | undefined>>
}

const CalendarSection: React.FC<Prop> = ({ dateCalendar, setDateCalendar }) => {
  return (
    <div className="mt-10 rounded bg-[#f7f9fb] p-5">
      <Calendar
        mode="single"
        selected={dateCalendar}
        onSelect={setDateCalendar}
        className="w-full rounded-md bg-inherit"
        captionLayout="dropdown"
      />
    </div>
  )
}

export default CalendarSection
