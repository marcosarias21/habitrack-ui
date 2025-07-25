import { create } from 'zustand'

interface Modal {
  open: boolean
  setOpen: (bool: boolean) => void
}

export const useModalStore = create<Modal>((set) => ({
  open: false,
  setOpen: (bool) =>
    set({
      open: bool,
    }),
}))
