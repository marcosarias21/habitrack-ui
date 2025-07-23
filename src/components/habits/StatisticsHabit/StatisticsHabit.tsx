import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

type Prop = { percentageDone: number }

const StatisticsHabit: React.FC<Prop> = ({ percentageDone }) => {
  return (
    <div className="mt-10 rounded bg-[#f7f9fb] p-5">
      <h2 className="text-center text-2xl font-bold text-gray-800">
        Statistics
      </h2>
      <div className="mt-5 flex flex-col items-center justify-center gap-1">
        <CircularProgressbar
          className="h-25 w-25"
          value={percentageDone}
          text={`${Math.round(percentageDone)}%`}
        />
        <p className="w-30 text-center text-sm font-medium text-gray-400">
          Current Day's Progress
        </p>
      </div>
    </div>
  )
}

export default StatisticsHabit
