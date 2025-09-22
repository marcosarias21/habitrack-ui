interface Prop {
  fullDate: string
  dayName: string
  setDay: (arg: number) => void
  day: number
  nextOrPreviousDay: string
}

const DateSection: React.FC<Prop> = ({
  fullDate,
  dayName,
  setDay,
  day,
  nextOrPreviousDay,
}) => {
  return (
    <div className="flex gap-2">
      <div className="flex w-25 flex-col gap-2">
        <h2 className="text-lg font-bold">{dayName}</h2>
        <p className="text-xs font-medium text-gray-500">{fullDate}</p>
      </div>
      <div className="flex h-fit gap-2">
        <button
          className="rounded bg-blue-500 px-2 text-white"
          onClick={() => setDay(day - 1)}
        >
          -
        </button>
        <button
          onClick={() => setDay(day + 1)}
          className="rounded border-1 bg-blue-500 px-2 text-white"
        >
          +
        </button>
      </div>
      <div>
        {nextOrPreviousDay !== 'today' && (
          <button
            className="rounded border bg-black/80 px-2 py-1 font-medium text-white"
            onClick={() => setDay(new Date().getDay() - 1)}
          >
            Back to Today
          </button>
        )}
      </div>
    </div>
  )
}

export default DateSection
