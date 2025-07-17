export interface Habit {
  _id: string
  user: string
  name: string
  frequency: string
  datesDone: Date[]
  daysOfWeek: number[]
  createdAt: string
  updatedAt: string
  __v: number
}
