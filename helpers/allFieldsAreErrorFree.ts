const allFieldsAreErrorFree = (obj: BiodataForm | BiodataHalfErrorValues | Biodata | CenterDetailsError | FinancialCommitmentsError 
    | LoginFormInputs | RegisterFormInputs): boolean => {
    return Object.values(obj).every(field => field === "")
}

export default allFieldsAreErrorFree