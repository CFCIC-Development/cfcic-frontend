import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCenterDetailsStore = create(persist(
    (set) => ({
        centerDetails: {
            churchJoinDate: "",
            centerYouBelong: "",
            completedGrowthTrack: "",
            serviceTeam: [],
            homeCell: "",
            colony: "",
            responsibilities: []
        },
        setCenterDetails: (obj) => set(
            { centerDetails: obj }
        )
    }),
    {
      name: 'center-storage',
      storage: createJSONStorage(() => localStorage)
    }
))

export default useCenterDetailsStore