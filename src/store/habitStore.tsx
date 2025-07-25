import type { Habit } from '@/interfaces/habit/Habit'
import { create } from 'zustand'

interface State {
  days: number[]
  habit: Habit | undefined
}

interface Action {
  setDays: (newDay: number) => void
  popDay: (newDay: number) => void
  setHabit: (newHabit: Habit) => void
}

export const useHabitStore = create<State & Action>((set) => ({
  days: [],
  setDays: (newDay) => set((state) => ({ days: [...state.days, newDay] })),
  popDay: (newDay) =>
    set((state) => ({ days: state.days.filter((d) => d != newDay) })),
  habit: undefined,
  setHabit: (newHabit) =>
    set({
      habit: newHabit,
    }),
}))
