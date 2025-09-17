import React from 'react'

interface Prop {
  data: number | string
  title: string
  icon: React.ReactNode
}

const StatCard: React.FC<Prop> = ({ data, title, icon }) => {
  return (
    <div className="flex flex-col items-center rounded bg-[#f7f9fb] p-2">
      {icon}
      <h4 className="text-xl font-bold">{data}</h4>
      <p className="text-sm font-medium text-gray-600">{title}</p>
    </div>
  )
}

export default StatCard
