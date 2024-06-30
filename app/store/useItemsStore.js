import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

const useListStore = create((set) => ({
    Toiletries: {},
    setToiletries: toiletries => set(state => ({
        Toiletries: {
            ...state.Toiletries,
            ...toiletries
        }
    })),
    getToiletriesArray: (state) => Object.entries(state.Toiletries).map(([key, value]) => ({ id:key, ...value })),
    loadLocalToiletries: async () => {
        try {
            const jsonData = await AsyncStorage.getItem("toiletries")
            if (jsonData != null) {
                const toiletries = JSON.parse(jsonData)
                set(state => ({Toiletries: {...state.Toiletries, ...toiletries}}))
            }
        } catch (e) {
            console.log("failed to load", e)
        }
    }
}))

export default useListStore