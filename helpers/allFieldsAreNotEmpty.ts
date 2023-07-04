const allFieldsAreNotEmpty = (obj: BiodataForm | Biodata | BiodataHalfErrorValues | CenterDetailsError | FinancialCommitmentsError 
    | FinancialCommitmentsHalf | LoginFormInputs | RegisterFormInputs): boolean => {
    return Object.values(obj).every(field => field.length !== 0)
}

export default allFieldsAreNotEmpty