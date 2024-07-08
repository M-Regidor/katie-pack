import { create } from "zustand";
import { produce } from "immer";

const useListItemsStore = create((set) => ({
    categories: {
        toiletries: [],
        travelDocuments: [],
        clothing: [],
        footwear: [],
        medicalSupplies: [],
        electronics: [],
        miscellaneous: [],
        financial: []
    },
    setList: (category, list) => set(state => ({
        categories: produce(state.categories, draft => {
            draft[category] = list.sort((a, b) => a.packed - b.packed);
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