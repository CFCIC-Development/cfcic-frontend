import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { createBiodataSlice } from './slices/createBiodataSlice'
import { createCenterDetailsSlice } from './slices/createCenterDetailsSlice'
import { createKidsDetailsSlice } from './slices/createKidsDetailsSlice'
import { createFinancialCommitmentsSlice } from './slices/createFinancialCommitmentsSlice'
import { createAlertSlice } from './slices/createAlertSlice'

export const useAppStore = create<AppStoreState>()(persist(
    (...a) => ({
    ...createBiodataSlice(...a),
    ...createCenterDetailsSlice(...a),
    ...createKidsDetailsSlice(...a),
    ...createFinancialCommitmentsSlice(...a),
    ...createAlertSlice(...a)
    }),
    {
        name: 'app-storage',
      storage: createJSONStorage(() => localStorage)
    }
))