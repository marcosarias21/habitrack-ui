import { daysToGroup } from '@/data/utils'
import { useState } from 'react'

const DaysGroup = () => {
  const [indexSaved, setIndexSaved] = useState<number[]>([])

  const saveIndex = (index: number) => {
    if (!indexSaved.includes(index)) {
      setIndexSaved((prev) => [...prev, index])
    } else {
      setIndexSaved((prev) => prev.filter((indexSaved) => indexSaved != index))
    }
  }
  return (
    <div className="mt-1 flex gap-1">
      {daysToGroup.map((d, index) => (
        <button
          type="reset"
          onClick={() => saveIndex(index)}
          className={`rounded border-1 px-2 py-1 text-sm ${indexSaved.includes(index) && 'bg-red-500 text-white'}`}
        >
          {d.day}
        </button>
      ))}
    </div>
  )
}

export default DaysGroup
