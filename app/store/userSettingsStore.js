import { create } from 'zustand'

export const useAppStore = create((set) => ({
  username: null,
  updateUsername: newUsername => set(state => ({username: state.username = newUsername}))
}))