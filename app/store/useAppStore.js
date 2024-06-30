import { produce } from 'immer'
import { create } from 'zustand'

export const useAppStore = create((set) => ({
  username: null,
  modalOpen: false,
  updateUsername: newUsername => set(state => ({username: state.username = newUsername})),
  setModalOpen: status => set(state => ({modalOpen: state.modalOpen = status}))
}))