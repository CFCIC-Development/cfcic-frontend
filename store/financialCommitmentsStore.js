import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useFinancialCommitmentsStore = create(persist(
    (set) => ({
        financialCommitments: {
            isTither: "",
            isPartner: "",
            partnerArms: [],
            preferredPaymentInterval: ""
        },
        setFinancialCommitments: (obj) => set(
            { financialCommitments: obj }
        )
    }),
    {
      name: 'financial-commitments-storage',
      storage: createJSONStorage(() => localStorage)
    }
))

export default useFinancialCommitmentsStore