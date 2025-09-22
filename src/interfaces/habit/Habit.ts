export interface Habit {
  _id: string
  user: string
  name: string
  area: string
  frequency: string
  datesDone: string[]
  daysOfWeek: number[]
  createdAt: string
  updatedAt: string
  __v: number
}

export interface Area {
  name: string | undefined
  value: string
  icon: React.ReactNode
}
