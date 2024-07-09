import { produce } from 'immer'
import { create } from 'zustand'

export const useAppStore = create((set) => ({
  username: null,
  loading: false,
  checked: require("../assets/app_images/checked.png"),
  unchecked: require("../assets/app_images/unchecked.png"),
  setLoading: status => set(state => ({loading: state.loading = status})),
  updateUsername: newUsername => set(state => ({username: state.username = newUsername})),
}))