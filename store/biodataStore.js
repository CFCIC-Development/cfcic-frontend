import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useBiodataStore = create(persist(
    (set, get) => ({
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
            let newObj = { ...get().biodata }
            newObj.kids++
            set({ biodata: newObj })
        }
    }),
    {
      name: 'biodata-storage',
      storage: createJSONStorage(() => localStorage)
    }
))

export default useBiodataStore