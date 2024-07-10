import { create } from "zustand";
import { produce } from "immer";
import { storeObj } from "./AsyncStorage";

const useListItemsStore = create((set) => ({
    categories: {
        toiletries: [],
        clothing: [],
        footwear: [],
        electronics: [],
        travelDocuments: [],
        financial: [],
        medicalSupplies: [],
        other: []
    },
    setList: (category, list) => set(state => ({
        categories: produce(state.categories, draft => {
            draft[category] = list.sort((a, b) => a.packed - b.packed);
        })
    })),
    resetPackStatus: () => set(produce (state => {
        Object.keys(state.categories).forEach((key) => {
            if (state.categories[key].length > 0){
                state.categories[key].forEach(item => item.packed = false)
            }
            storeObj(key, state.categories[key])
        })
    })),
    removeItem: (category, idx) => set(state => ({
        categories: produce(state.categories, draft => {
            draft[category].splice(idx, 1);
            draft[category].sort((a, b) => a.packed - b.packed);
        })
    })),
    addItem: (category, itemName) => set(state => ({
        categories: produce(state.categories, draft => {
            const newItem = {name: itemName, packed: false}
            draft[category].push(newItem)
            draft[category].sort((a, b) => a.packed - b.packed);
        })
    })),
    togglePacked: (category, idx) => set(state => ({
        categories: produce(state.categories, draft => {
            draft[category][idx].packed = !draft[category][idx].packed
            draft[category].sort((a, b) => a.packed - b.packed);
        })
    }))
}))

export default useListItemsStore