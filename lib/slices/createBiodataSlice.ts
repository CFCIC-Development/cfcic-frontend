import { StateCreator } from "zustand";

export const createBiodataSlice: StateCreator<BiodataSlice> = (set, get) => ({
    biodata: {
        phone: "",
        occupation: "",
        birthday: "",
        maritalStatus: "",
        anniversary: "",
        kids: "",
    },
    setBiodata: (obj) => set(
        { biodata: obj }
    ),
    addNewKid: () => {
        let newObj: Biodata = { ...get().biodata }
        newObj.kids = String(Number(newObj.kids) + 1)
        set({ biodata: newObj })
    }
})