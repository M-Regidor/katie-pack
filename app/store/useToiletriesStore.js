import { create } from "zustand";
import { produce }  from "immer";

const useToiletriesStore = create((set) => ({
    toiletries: {},
    setToiletries: toiletries => set(state => ({
        toiletries: {
            ...state.toiletries,
            ...toiletries
        }
    })),
    getToiletriesArray: (state) => Object.entries(state.toiletries).map(([key, value]) => ({ id:key, ...value })),
    togglePacked: id => set(produce(state => {state.toiletries[id].packed = !state.toiletries[id].packed}))
}))

export default useToiletriesStore