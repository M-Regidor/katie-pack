import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

const useToiletriesStore = create((set) => ({
    Toiletries: {},
    setToiletries: toiletries => set(state => ({
        Toiletries: {
            ...state.Toiletries,
            ...toiletries
        }
    })),
    getToiletriesArray: (state) => Object.entries(state.Toiletries).map(([key, value]) => ({ id:key, ...value })),
}))

export default useToiletriesStore