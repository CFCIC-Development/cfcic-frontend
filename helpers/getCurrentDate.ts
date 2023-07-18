const getCurrentDate = (): string => {
    const now = new Date()
    const [yyyy, mm, dd] = [now.getFullYear(), String(now.getMonth() + 1).padStart(2, "0"), String(now.getDate()).padStart(2, "0")]

    return `${yyyy}-${mm}-${dd}`
}

export default getCurrentDate 