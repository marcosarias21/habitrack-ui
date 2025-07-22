const DateSection = ({ fullDate, dayName }: string) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-bold">{dayName}</h2>
      <p className="text-xs font-medium text-gray-500">{fullDate}</p>
    </div>
  )
}

export default DateSection
