import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useKidsDetailsStore = create(persist(
    (set) => ({
        kidsDetails: [],
        setKidsDetails: (arr) => set(
            { kidsDetails: arr }
        )
    }),
    {
      name: 'kids-details-storage',
      storage: createJSONStorage(() => localStorage)
    }
))

export default useKidsDetailsStore