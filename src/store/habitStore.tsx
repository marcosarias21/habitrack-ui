import { create } from 'zustand'

interface State {
  days: number[]
}

interface Action {
  setDays: (newDay: number) => void
  popDay: (newDay: number) => void
}

export const useHabitStore = create<State & Action>((set) => ({
  days: [],
  setDays: (newDay) => set((state) => ({ days: [...state.days, newDay] })),
  popDay: (newDay) =>
    set((state) => ({ days: state.days.filter((d) => d != newDay) })),
}))
