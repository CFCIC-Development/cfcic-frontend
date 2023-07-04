import { StateCreator } from "zustand"

export const createKidsDetailsSlice: StateCreator<KidsDetailsSlice> = (set) => ({
    kidsDetails: [],
    setKidsDetails: (arr) => set(
        { kidsDetails: arr }
    )
})