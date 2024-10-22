import { produce } from 'immer'
import { create } from 'zustand'

export const useAppStore = create((set) => ({
  username: null,
  loading: false,
  setLoading: status => set(state => ({loading: state.loading = status})),
  updateUsername: newUsername => set(state => ({username: state.username = newUsername})),
}))