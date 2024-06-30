import { create } from 'zustand'

export const useUserSettingsStore = create((set) => ({
  username: null,
  changeUsername: (newUsername) => set(state => ({username: state.username = newUsername}))
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
}))