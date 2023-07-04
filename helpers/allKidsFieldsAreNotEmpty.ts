const SingleKidsGroupIsNotEmpty = (obj: SingleKidsDetail): boolean => {
    return Object.entries(obj).every(pair => {
        const [key, value] = pair

        if (key === "allergies") {
            return true
        } else {
            return value.length !== 0
        }
    })
}

const allKidsFieldsAreNotEmpty = (arr: SingleKidsDetail[]): boolean => {
    return arr.every(obj => SingleKidsGroupIsNotEmpty(obj) === true)
}

export default allKidsFieldsAreNotEmpty