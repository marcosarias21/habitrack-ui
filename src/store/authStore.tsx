import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface AuthState {
  token: string | null
  saveToken: (newToken: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      saveToken: (newToken) =>
        set({
          token: newToken,
        }),
      logout: () =>
        set({
          token: null,
        }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
