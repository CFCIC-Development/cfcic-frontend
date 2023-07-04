const validatePassword = (password: string): boolean => {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9!@#$%&<>()*^/\\.;?])[A-Za-z0-9!@#$%&<>()*^/\\.;?]{6,}$/.test(password)
}

export default validatePassword