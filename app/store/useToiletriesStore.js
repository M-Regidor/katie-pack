import { create } from "zustand";
import { produce }  from "immer";


const generateId = () => {
    return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  };

const useToiletriesStore = create((set) => ({
    toiletries: {},
    setToiletries: toiletries => set(state => ({
        toiletries: {
            ...state.toiletries,
            ...toiletries
        }
    })),
    addToiletry: item => set(produce(state => {
        const id = generateId();
        state.toiletries[id] = {...item, id}
    })),
    removeToiletry: id => set(produce(state => {
        delete state.toiletries[id]
    })),
    getToiletriesArray: (state) => Object.entries(state.toiletries).map(([key, value]) => ({ id:key, ...value })),
    togglePacked: id => set(produce(state => {state.toiletries[id].packed = !state.toiletries[id].packed}))
}))

export default useToiletriesStore