import { StateCreator } from "zustand";

export const createAlertSlice: StateCreator<AlertState> = (set) => ({
    alertExists: false,
    alert: { message: "", type: ""},
    setAlert: (obj: AlertObj) => set(() => (
        { alertExists: true, alert: obj }
    )),
    clearAlert: () => set(() => (
        { alertExists: false, alert: { message: "", type: null } }
    ))
})