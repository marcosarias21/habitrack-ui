import CalendarHeatmap from 'react-calendar-heatmap'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import type { Habit } from '@/interfaces/habit/Habit'
import useHeatMap from '@/hooks/useHeatMap'
import 'react-calendar-heatmap/dist/styles.css'
import 'react-tooltip/dist/react-tooltip.css'

type Prop = {
  datesDone: Habit['datesDone']
}

const HeatMap: React.FC<Prop> = ({ datesDone }) => {
  const { allValues, startDate, today } = useHeatMap(datesDone)
  return (
    <div className="w-150 bg-gray-100 p-10">
      <CalendarHeatmap
        startDate={startDate}
        endDate={today}
        values={allValues}
        classForValue={(value) => {
          if (!value || value.count === 0) return 'color-empty'
          return 'color-done'
        }}
        tooltipDataAttrs={(value) => {
          if (!value || !value.date) return {}
          return {
            'data-tooltip-id': 'heatmap-tooltip',
            'data-tooltip-content': `${
              value.count ? 'Completado' : 'No completado'
            }: ${value.date.toISOString().slice(0, 10)}`,
          }
        }}
        showWeekdayLabels
      />
      <ReactTooltip id="heatmap-tooltip" place="top" effect="solid" />
    </div>
  )
}

export default HeatMap
