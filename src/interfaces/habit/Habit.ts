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
