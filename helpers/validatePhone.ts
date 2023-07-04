const validatePhone = (phone: string): boolean => {
    return /^((?=.*[(\-)])\+?(\(\d+\))? ?-? ?\d+( ?-? ?\d+)*|\+\d{13}|\d{11})$/.test(phone)
}

export default validatePhone