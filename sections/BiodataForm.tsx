import { useEffect, useState } from "react";
import Input from "../components/Input";
import helpers from "../helpers";
import { ButtonFill, ButtonGhost } from "../components/Button";
import { useRouter } from "next/router";
import { biodataErrorsDefault } from "../data/props";
import { maritalStatusOptions, kidsOptions } from "../data/props";
import Select from "../components/Select";
import { haveKidsDetailsProps } from "../data/props";
import RadioGroup from "../components/RadioGroup";
import { useAppStore } from "../lib/store";

const BiodataForm: React.FC = () => {
    const router = useRouter()
    const { id } = router.query

    const { biodata, setBiodata } = useAppStore()
    
    const [inputValues, setInputValues] = useState<BiodataForm>(biodataErrorsDefault)
    const [errorValues, setErrorValues] = useState<BiodataForm>(biodataErrorsDefault)
    const [disabled, setDisabled] = useState<boolean>(false)
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [isMaritalOptionsOpen, setIsMaritalOptionsOpen] = useState<boolean>(false)
    const [isKidsOptionsOpen, setIsKidsOptionsOpen] = useState<boolean>(false)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name, value = e.target.value
        
        try {
            setInputValues(prevState => {
                return { ...prevState, [name]: value }
            })

            if (name === "occupation") {
                if (!helpers.validateText(value)) throw new Error("invalid occupation")
            } else if (name === "phone") {
                if (!helpers.validatePhone(value)) throw new Error("Phone number is invalid")
            }

            setErrorValues(prevState => {
                return { ...prevState, [name]: "" }
            })
        } catch (error) {
            if (error.message === "invalid occupation") {
                if (!value) {
                    setErrorValues(prevState => {
                        return { ...prevState, [name]: "Oops! You forgot to fill this field." }
                    })
                } else if (!/^[A-Za-z- ]+$/.test(value)) {
                    setErrorValues(prevState => {
                        return { ...prevState, [name]: "Invalid character in Occupation" }
                    })
                } else if (!/^.{3,}$/.test(value)) {
                    setErrorValues(prevState => {
                        return { ...prevState, [name]: "Occupation should be at least 3 characters" }
                    })
                }
            } else if (error.message === "Phone number is invalid") {
                if (!value) {
                    setErrorValues(prevState => {
                        return { ...prevState, [name]: "Oops! You forgot to fill this field." }
                    })
                } else if (!/^[0-9 ()+-]+$/.test(value)) {
                    setErrorValues(prevState => {
                        return { ...prevState, [name]: "Invalid character in Phone Number" }
                    })
                } else {
                    setErrorValues(prevState => {
                        return { ...prevState, [name]: error.message }
                    })
                }
            }
        }
    }

    const selectChangeHandler = (name: string, value: string) => {
        setInputValues(prevState => {
            return { ...prevState, [name]: value }
        })

        setErrorValues(prevState => {
            return { ...prevState, [name]: "" }
        })
    }

    const clickHandler = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        setTimeout(() => {
            let obj = { ...inputValues }
            delete obj.haveKidsDetails
            setBiodata(obj)
            setIsSubmitting(false)
            
            if (inputValues.haveKidsDetails === "true") {
                router.push(`/onboarding/kids-details/${id}`)
            } else {
                router.push(`/onboarding/center-details/${id}`)
            }
        }, 1000)
    }

    const handleDisabledClick = () => {
        if (disabled) {
            if (isMaritalOptionsOpen) {
                if (isKidsOptionsOpen) {
                    if (!helpers.allFieldsAreNotEmpty(inputValues)) {
                        setErrorValues(prevState => {
                            let errorObj = { ...prevState }
        
                            for (let field in errorObj) {
                                if (inputValues[field] === "") {
                                    errorObj[field] ||= "Oops! You forgot to fill this field."
                                }
                            }
                            
                            return errorObj
                        })
                    }
                } else {
                    let halfInputValues: Biodata = {
                        phone: inputValues.phone,
                        occupation: inputValues.occupation,
                        birthday: inputValues.birthday,
                        maritalStatus: inputValues.maritalStatus,
                        anniversary: inputValues.anniversary,
                        kids: inputValues.kids,
                    }

                    if (!helpers.allFieldsAreNotEmpty(halfInputValues)) {
                        setErrorValues(prevState => {
                            let errorObj = { ...prevState }
        
                            for (let field in errorObj) {
                                if (halfInputValues[field] === "") {
                                    errorObj[field] ||= "Oops! You forgot to fill this field."
                                }
                            }
                            
                            return errorObj
                        })
                    }
                }
            } else {
                let halfInputValues: BiodataHalfErrorValues = {
                    phone: inputValues.phone,
                    occupation: inputValues.occupation,
                    birthday: inputValues.birthday,
                    maritalStatus: inputValues.maritalStatus,
                }

                if (!helpers.allFieldsAreNotEmpty(halfInputValues)) {
                    setErrorValues(prevState => {
                        let errorObj = { ...prevState }
    
                        for (let field in errorObj) {
                            if (halfInputValues[field] === "") {
                                errorObj[field] ||= "Oops! You forgot to fill this field."
                            }
                        }
                        
                        return errorObj
                    })
                }
            }
        }
    }

    useEffect(() => {
        if (isMaritalOptionsOpen) {
            if (isKidsOptionsOpen) {
                if (helpers.allFieldsAreErrorFree(errorValues) && helpers.allFieldsAreNotEmpty(inputValues)) {
                    setDisabled(false)
                } else setDisabled(true)
            } else {
                let halfInputValues: Biodata = {
                    phone: inputValues.phone,
                    occupation: inputValues.occupation,
                    birthday: inputValues.birthday,
                    maritalStatus: inputValues.maritalStatus,
                    anniversary: inputValues.anniversary,
                    kids: inputValues.kids,
                }
    
                if (helpers.allFieldsAreErrorFree(errorValues) && helpers.allFieldsAreNotEmpty(halfInputValues)) {
                    setDisabled(false)
                } else setDisabled(true)
            }
        } else {
            let halfInputValues: BiodataHalfErrorValues = {
                phone: inputValues.phone,
                occupation: inputValues.occupation,
                birthday: inputValues.birthday,
                maritalStatus: inputValues.maritalStatus,
            }

            if (helpers.allFieldsAreErrorFree(errorValues) && helpers.allFieldsAreNotEmpty(halfInputValues)) {
                setDisabled(false)
            } else setDisabled(true)
        }
    }, [errorValues, inputValues, isMaritalOptionsOpen, isKidsOptionsOpen])

    useEffect(() => {
        if (inputValues.maritalStatus === "Married"
        || inputValues.maritalStatus === "Separated"
        || inputValues.maritalStatus === "Divorced") {
            return setIsMaritalOptionsOpen(true)
        }

        setInputValues(prevState => {
            return { ...prevState, anniversary: "", kids: "", haveKidsDetails: "" }
        })
        return setIsMaritalOptionsOpen(false)
    }, [inputValues.maritalStatus])

    useEffect(() => {
        if (inputValues.kids !== "" && inputValues.kids !== "0") {
            return setIsKidsOptionsOpen(true)
        }

        setInputValues(prevState => {
            return { ...prevState, haveKidsDetails: "" }
        })
        return setIsKidsOptionsOpen(false)
    }, [inputValues.kids])

    const phoneProps = { 
        label: "Phone Number",
        type: "text",
        placeholder: "",
        name: "phone",
        value: inputValues.phone,
        changeHandler,
        errorText: errorValues.phone
    }

    const occupationProps = { 
        label: "Occupation",
        type: "text",
        placeholder: "",
        name: "occupation",
        value: inputValues.occupation,
        changeHandler,
        errorText: errorValues.occupation
    }

    const birthdayProps = { 
        label: "Birthday",
        type: "date",
        placeholder: "Select Date",
        name: "birthday",
        value: inputValues.birthday,
        changeHandler,
        errorText: errorValues.birthday
    }

    const maritalStatusProps = { 
        label: "Marital Status",
        placeholder: "Select",
        name: "maritalStatus",
        value: inputValues.maritalStatus,
        options: maritalStatusOptions,
        changeHandler: selectChangeHandler,
        errorText: errorValues.maritalStatus
    }

    const anniversaryProps = { 
        label: "Marriage Anniversary",
        type: "date",
        placeholder: "Select Date",
        name: "anniversary",
        value: inputValues.anniversary,
        changeHandler,
        errorText: errorValues.anniversary,
        hasHeart: true,
    }

    const kidsProps = { 
        label: "Got Kids?",
        placeholder: "Select",
        name: "kids",
        value: inputValues.kids,
        options: kidsOptions,
        changeHandler: selectChangeHandler,
        errorText: errorValues.kids
    }

    const submitBtn: ButtonProps = {
        text: isSubmitting ? "Checking..." : "Next",
        type: "submit",
        disabled,
        clickHandler
    }

    const radioProps = {
        options: haveKidsDetailsProps,
        name: "haveKidsDetails",
        changeHandler,
        radioValue: inputValues.haveKidsDetails,
        errorText: errorValues.haveKidsDetails
    }

    return (
        <form className="w-full">
            <Input inputProps={ phoneProps } />
            <Input inputProps={ occupationProps } />
            <Input inputProps={ birthdayProps } />
            <Select selectProps={ maritalStatusProps } />

            { isMaritalOptionsOpen ? (
                <>
                    <Input inputProps={ anniversaryProps } />
                    <Select selectProps={ kidsProps } />
                </>
            ) : null }

            { isKidsOptionsOpen ? (
                <div>
                    <RadioGroup radioGroupProps={ radioProps } />
                </div>
            ) : null }

            <div onClick={ handleDisabledClick } className="w-full mt-11 mb-7">
                <ButtonFill componentProps={ submitBtn } />
            </div>
        </form>
    )
}

export default BiodataForm