import { StateCreator } from "zustand"

export const createCenterDetailsSlice: StateCreator<CenterDetailsSlice> = (set) => ({
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
})