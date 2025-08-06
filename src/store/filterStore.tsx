import { create } from 'zustand'

interface State {
  filter: string
}

interface Action {
  setFilter: (arg: string) => void
}

export const useFilterStore = create<Action | State>((set) => ({
  filter: '',
  setFilter: (arg) =>
    set({
      filter: arg,
    }),
}))
