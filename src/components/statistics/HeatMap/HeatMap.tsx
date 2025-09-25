import CalendarHeatmap from 'react-calendar-heatmap'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import type { Habit } from '@/interfaces/habit/Habit'
import useHeatMap from '@/hooks/useHeatMap'
import 'react-calendar-heatmap/dist/styles.css'
import 'react-tooltip/dist/react-tooltip.css'
import './heatmap.css'

type Prop = {
  datesDone: Habit['datesDone']
}

const HeatMap: React.FC<Prop> = ({ datesDone }) => {
  const { allValues, startDate, today } = useHeatMap(datesDone)
  return (
    <div className="flex w-full justify-center text-center">
      <div className="w-90">
        <CalendarHeatmap
          startDate={startDate}
          endDate={today}
          values={allValues}
          classForValue={(value) => {
            if (!value || value.count === 0) return 'color-empty'
            return 'color-github-1'
          }}
          tooltipDataAttrs={(value) => {
            if (!value || !value.date) {
              return {} as { [key: string]: string }
            }
            return {
              'data-tooltip-id': 'heatmap-tooltip',
              'data-tooltip-content': `${
                value.count ? 'Completado' : 'No completado'
              }: ${value.date.toISOString().slice(0, 10)}`,
            }
          }}
          showWeekdayLabels
        />
        <ReactTooltip id="heatmap-tooltip" place="top" />
      </div>
    </div>
  )
}

export default HeatMap
