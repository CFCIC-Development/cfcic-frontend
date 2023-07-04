const SingleKidsGroupIsErrorFree = (obj: SingleKidsDetail): boolean => {
    return Object.values(obj).every(field => field === "")
}

const allKidsFieldsAreErrorFree = (arr: SingleKidsDetail[]): boolean => {
    return arr.every(obj => SingleKidsGroupIsErrorFree(obj) === true)
}

export default allKidsFieldsAreErrorFree