import { StateCreator } from "zustand"

export const createFinancialCommitmentsSlice: StateCreator<FinancialCommitmentsSlice> = (set) => ({
    financialCommitments: {
        isTither: "",
        isPartner: "",
        partnerArms: [],
        preferredPaymentInterval: ""
    },
    setFinancialCommitments: (obj) => set(
        { financialCommitments: obj }
    )
})