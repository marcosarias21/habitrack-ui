type Prop = { percentageDone: number }

const StatisticsHabit: React.FC<Prop> = ({ percentageDone }) => {
  return (
    <div className="mt-10 rounded bg-[#f7f9fb] p-5">
      <h2 className="text-center text-xl font-bold">Statistics</h2>
      <div className="mt-5 flex flex-col items-center justify-center gap-1">
        <p className="text-lg font-bold text-blue-600">{percentageDone}%</p>
        <p className="w-30 text-center text-sm font-medium text-gray-500">
          Current Day's Progress
        </p>
      </div>
    </div>
  )
}

export default StatisticsHabit
