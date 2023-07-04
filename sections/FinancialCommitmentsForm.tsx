import { useEffect, useState } from "react";
import helpers from "../helpers";
import { ButtonFill, ButtonGhost } from "../components/Button";
import { useRouter } from "next/router";
import { financialCommitmentsErrorsDefault, isPartnerOptions, isTitherOptions, partnerArmsOptions, preferredPaymentIntervalOptions } from "../data/props";
import Select from "../components/Select";
import useFinancialCommitmentsStore from "../store/financialCommitmentsStore";
import { RiErrorWarningLine } from "react-icons/ri";
import SpecialCheckboxSelect from "../components/SpecialCheckboxSelect";
import { useAppStore } from "../lib/store";

const FinancialCommitmentsForm = () => {
    const router = useRouter()
    const { id } = router.query

    const {financialCommitments} = useAppStore()
    const {setFinancialCommitments} = useAppStore()

    const [inputValues, setInputValues] = useState(financialCommitments)
    const [errorValues, setErrorValues] = useState(financialCommitmentsErrorsDefault)
    const [disabled, setDisabled] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isPartnershipOptionsOpen, setIsPartnershipOptionsOpen] = useState(() => {
        if (financialCommitments.isPartner === "true") {
            return true
        }

        return false
    })

    const selectChangeHandler = (name: string, value: string) => {
        setInputValues(prevState => {
            return { ...prevState, [name]: value }
        })

        setErrorValues(prevState => {
            return { ...prevState, [name]: "" }
        })
    }

    const checkboxChangeHandler = (name: string, value: string, isChecked: boolean) => {
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

    const clickHandler = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        setTimeout(() => {
            let obj = { ...inputValues }
            setFinancialCommitments(obj)
            setIsSubmitting(false)
            
            // router.push(`/onboarding/center-details/${id}`)
        }, 1000)
    }

    const skipHandler = () => {

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
        if (isPartnershipOptionsOpen) {
            if (helpers.allFieldsAreErrorFree(errorValues) && helpers.allFieldsAreNotEmpty(inputValues)) {
                setDisabled(false)
            } else setDisabled(true)
        } else {
            let halfInputValues = {
                isTither: inputValues.isTither,
                isPartner: inputValues.isPartner,
            }

            if (helpers.allFieldsAreErrorFree(errorValues) && helpers.allFieldsAreNotEmpty(halfInputValues)) {
                setDisabled(false)
            } else setDisabled(true)
        }
    }, [errorValues, inputValues, isPartnershipOptionsOpen])

    useEffect(() => {
        if (inputValues.isPartner === "true") {
            return setIsPartnershipOptionsOpen(true)
        }

        setInputValues(prevState => {
            return { ...prevState, partnerArms: [], preferredPaymentInterval: "" }
        })
        return setIsPartnershipOptionsOpen(false)
    }, [inputValues.isPartner])

    const isTitherProps = { 
        label: "Are you a tither?",
        placeholder: "Select",
        name: "isTither",
        value: inputValues.isTither,
        options: isTitherOptions,
        changeHandler: selectChangeHandler,
        errorText: errorValues.isTither
    }

    const isPartnerProps = { 
        label: "Are you a Partner?",
        placeholder: "Select",
        name: "isPartner",
        value: inputValues.isPartner,
        options: isPartnerOptions,
        changeHandler: selectChangeHandler,
        errorText: errorValues.isPartner
    }

    const partnerArmsProps = { 
        label: "What Arm(s) do you Partner with?",
        placeholder: "You can select more than one",
        name: "partnerArms",
        value: inputValues.partnerArms,
        options: partnerArmsOptions,
        changeHandler: checkboxChangeHandler,
        errorText: errorValues.partnerArms
    }

    const preferredPaymentIntervalProps = { 
        label: "How often would you like to pay?",
        placeholder: "Select your preferred interval",
        name: "preferredPaymentInterval",
        value: inputValues.preferredPaymentInterval,
        options: preferredPaymentIntervalOptions,
        changeHandler: selectChangeHandler,
        errorText: errorValues.preferredPaymentInterval
    }

    const submitBtn: ButtonProps = {
        text: isSubmitting ? "Submitting..." : "Finish",
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
            <Select selectProps={ isTitherProps } />
            <Select selectProps={ isPartnerProps } />

            { isPartnershipOptionsOpen ? (
                <>
                    <SpecialCheckboxSelect selectProps={ partnerArmsProps } />
                    <Select selectProps={ preferredPaymentIntervalProps } />
                    <div className={`w-full flex items-center gap-2 mt-2`}>
                        <RiErrorWarningLine className="text-[#565757] text-base" />
                        <span className="text-xs leading-[1.125rem] text-dark tracking-[0.005rem]">
                            {`We'll send you reminders based on this interval`}
                        </span>
                    </div>
                </>
            ) : null }

            <div onClick={ handleDisabledClick } className="w-full mt-11 mb-7">
                <ButtonFill componentProps={ submitBtn } />
            </div>
            <div className="w-full mb-11">
                <ButtonGhost componentProps={ skipBtn } />
            </div>
        </form>
    )
}

export default FinancialCommitmentsForm