import { useEffect, useState } from "react";
import Input from "../components/Input";
import helpers from "../helpers";
import { ButtonFill, ButtonGhost } from "../components/Button";
import { useRouter } from "next/router";
import { centerDetailsErrorsDefault, centerYouBelongOptions, completedGrowthTrackOptions, homeCellOptions, colonyOptions, serviceTeamOptions, responsibilitiesOptions } from "../data/props";
import useCenterDetailsStore from "../store/centerDetailsStore";
import Select from "../components/Select";
import CheckboxSelect from "../components/CheckBoxSelect";

const CenterDetailsForm = () => {
    const router = useRouter()
    const { id } = router.query

    const centerDetails = useCenterDetailsStore(state => state.centerDetails)
    const setCenterDetails = useCenterDetailsStore(state => state.setCenterDetails)

    const [inputValues, setInputValues] = useState(centerDetails)
    const [errorValues, setErrorValues] = useState(centerDetailsErrorsDefault)
    const [disabled, setDisabled] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const changeHandler = (e) => {
        const name = e.target.name, value = e.target.value

        try {
            setInputValues(prevState => {
                return { ...prevState, [name]: value }
            })

            setErrorValues(prevState => {
                return { ...prevState, [name]: "" }
            })
        } catch (error) {
            setErrorValues(prevState => {
                return { ...prevState, [name]: error.message }
            })
        }
    }

    const selectChangeHandler = (name, value) => {
        setInputValues(prevState => {
            return { ...prevState, [name]: value }
        })

        setErrorValues(prevState => {
            return { ...prevState, [name]: "" }
        })
    }

    const checkboxChangeHandler = (name, value, isChecked) => {
        try {
            if(isChecked) {
                setInputValues(prevState => {
                    let arr = [ ...prevState[name] ]
                    arr.push(value)
                    
                    return { ...prevState, [name]: arr }
                })

                setErrorValues(prevState => {
                    return { ...prevState, [name]: "" }
                })
            } else {
                setInputValues(prevState => {
                    let arr = [ ...prevState[name] ]
                    let idx = arr.findIndex(item => item === value)
                    arr.splice(idx, 1)
        
                    return { ...prevState, [name]: arr }
                })
            }   
        } catch (error) {
            
        }
    }

    const clickHandler = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        setTimeout(() => {
            setCenterDetails(inputValues)
            setIsSubmitting(false)
            
            router.push(`/onboarding/financial-commitments/${id}`)
        }, 1000)
    }

    const skipHandler = () => {
        router.push(`/onboarding/financial-commitments/${id}`)
    }

    const handleDisabledClick = () => {
        if (disabled) {
            if (!helpers.allFieldsAreNotEmpty(inputValues)) {
                setErrorValues(prevState => {
                    let errorObj = { ...prevState }

                    for (let field in errorObj) {
                        if (inputValues[field].length === 0) {
                            errorObj[field] ||= "Oops! You forgot to fill this field."
                        }
                    }
                    
                    return errorObj
                })
            }
        }
    }

    useEffect(() => {
        if (helpers.allFieldsAreErrorFree(errorValues) && helpers.allFieldsAreNotEmpty(inputValues)) {
            setDisabled(false)
        } else setDisabled(true)
    }, [errorValues, inputValues])

    const churchJoinDateProps = { 
        label: "What Year Did You Join CFC?",
        type: "date",
        placeholder: "Select Date",
        name: "churchJoinDate",
        value: inputValues.churchJoinDate,
        changeHandler,
        errorText: errorValues.churchJoinDate
    }

    const centerYouBelongProps = { 
        label: "What Center Do You Belong To?",
        placeholder: "",
        name: "centerYouBelong",
        value: inputValues.centerYouBelong,
        options: centerYouBelongOptions,
        changeHandler: selectChangeHandler,
        errorText: errorValues.centerYouBelong
    }

    const completedGrowthTrackProps = { 
        label: "Completed Growth Track?",
        placeholder: "",
        name: "completedGrowthTrack",
        value: inputValues.completedGrowthTrack,
        options: completedGrowthTrackOptions,
        changeHandler: selectChangeHandler,
        errorText: errorValues.completedGrowthTrack
    }

    const serviceTeamProps = { 
        label: "Service Team",
        placeholder: "You can select more than one",
        name: "serviceTeam",
        value: inputValues.serviceTeam,
        options: serviceTeamOptions,
        changeHandler: checkboxChangeHandler,
        errorText: errorValues.serviceTeam
    }

    const homeCellProps = { 
        label: "Home Cell",
        placeholder: "Select your cell church",
        name: "homeCell",
        value: inputValues.homeCell,
        options: homeCellOptions,
        changeHandler: selectChangeHandler,
        errorText: errorValues.homeCell
    }

    const colonyProps = { 
        label: "Colony",
        placeholder: "Select your colony",
        name: "colony",
        value: inputValues.colony,
        options: colonyOptions,
        changeHandler: selectChangeHandler,
        errorText: errorValues.colony
    }

    const responsibilitiesProps = { 
        label: "Roles & Responsibilities",
        placeholder: "Select all that apply to you",
        name: "responsibilities",
        value: inputValues.responsibilities,
        options: responsibilitiesOptions,
        changeHandler: checkboxChangeHandler,
        errorText: errorValues.responsibilities
    }

    const submitBtn: ButtonProps = {
        text: isSubmitting ? "Checking..." : "Next",
        type: "submit",
        disabled,
        clickHandler
    }

    const skipBtn: ButtonProps = {
        text: "Skip for Now",
        type: "button",
        disabled: false,
        clickHandler: skipHandler
    }

    return (
        <form className="w-full">
            <Input inputProps={ churchJoinDateProps } />
            <Select selectProps={ centerYouBelongProps } />
            <Select selectProps={ completedGrowthTrackProps } />
            <CheckboxSelect selectProps={ serviceTeamProps } />
            <Select selectProps={ homeCellProps } />
            <Select selectProps={ colonyProps } />
            <CheckboxSelect selectProps={ responsibilitiesProps } />

            <div onClick={ handleDisabledClick } className="w-full mt-11 mb-7">
                <ButtonFill componentProps={ submitBtn } />
            </div>
            <div className="w-full mb-11">
                <ButtonGhost componentProps={ skipBtn } />
            </div>
        </form>
    )
}

export default CenterDetailsForm