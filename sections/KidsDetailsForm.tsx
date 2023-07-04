import { useEffect, useState } from "react";
// import Input from "../components/Input";
import helpers from "../helpers";
import { ButtonFill } from "../components/Button";
import { useRouter } from "next/router";
import { kidsDetailsInputsDefault } from "../data/props";
import useKidsDetailsStore from "../store/kidsDetailsStore";
import useBiodataStore from "../store/biodataStore";
import uuid from "react-uuid";
import { BsPlusCircle } from "react-icons/bs";
import SingleKidsDetailForm from "./SingleKidsDetailForm";
import { useAppStore } from "../lib/store";

const KidsDetailsForm = () => {
    const router = useRouter()
    const { id } = router.query
    // console.log(kids)

    const { biodata } = useAppStore()
    const { addNewKid } = useAppStore()
    const { kidsDetails } = useAppStore()
    const { setKidsDetails } = useAppStore()
    const kids: number = Number(biodata.kids)
    console.log(kids)
    // const kidsDetails = useKidsDetailsStore(state => state.kidsDetails)
    // const setKidsDetails = useKidsDetailsStore(state => state.setKidsDetails)

    const [inputValues, setInputValues] = useState<SingleKidsDetail[]>([kidsDetailsInputsDefault])
    const [errorValues, setErrorValues] = useState<SingleKidsDetail[]>([kidsDetailsInputsDefault])
    const [disabled, setDisabled] = useState<boolean>(false)
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    const addAnotherKidHandler = () => {
        setInputValues((prevState) => {
            const array = [ ...prevState, kidsDetailsInputsDefault ]
            return array
        })
        
        setErrorValues((prevState) => {
            const array = [ ...prevState, kidsDetailsInputsDefault ]
            return array
        })

        addNewKid()
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const [name, index] = e.target.name.split("-")
        console.log(name, index)
        try {
            if (index) {
                setInputValues(prevState => {
                    const array = [ ...prevState ]
                    array[index] = { ...array[index], [name]: value }
                    return array
                })
            } else throw new Error("Unknown input field")

            if (name === "fullName") {
                if (!helpers.validateText(value)) throw new Error("invalid fullName")
            } else if (name === "emergencyContact") {
                if (!helpers.validatePhone(value)) throw new Error("Phone number is invalid")
            } else if (name === "birthday") {
                if (!value) throw new Error("Oops! You forgot to fill this field.")
            }

            setErrorValues(prevState => {
                const array = [ ...prevState ]
                array[index] = { ...array[index], [name]: "" }
                return array
            })
        } catch (error) {
            if (error.message === "invalid fullName") {
                if (!value) {
                    setErrorValues(prevState => {
                        const array = [ ...prevState ]
                        array[index] = { ...array[index], [name]: "Oops! You forgot to fill this field." }
                        return array
                    })
                } else if (!/^[A-Za-z- ]+$/.test(value)) {
                    setErrorValues(prevState => {
                        const array = [ ...prevState ]
                        array[index] = { ...array[index], [name]: "Invalid character in Full Name" }
                        return array
                    })
                } else if (!/^.{3,}$/.test(value)) {
                    setErrorValues(prevState => {
                        const array = [ ...prevState ]
                        array[index] = { ...array[index], [name]: "Full Name should be at least 3 characters" }
                        return array
                    })
                }
            } else if (error.message === "Phone number is invalid") {
                if (!value) {
                    setErrorValues(prevState => {
                        const array = [ ...prevState ]
                        array[index] = { ...array[index], [name]: "Oops! You forgot to fill this field." }
                        return array
                    })
                } else if (!/^[0-9 ()+-]+$/.test(value)) {
                    setErrorValues(prevState => {
                        const array = [ ...prevState ]
                        array[index] = { ...array[index], [name]: "Invalid character in Phone Number" }
                        return array
                    })
                } else {
                    setErrorValues(prevState => {
                        const array = [ ...prevState ]
                        array[index] = { ...array[index], [name]: error.message }
                        return array
                    })
                }
            } else {
                setErrorValues(prevState => {
                    const array = [ ...prevState ]
                    array[index] = { ...array[index], [name]: error.message }
                    return array
                })
            }
        }
    }

    const clickHandler = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        setTimeout(() => {
            setKidsDetails(inputValues)
            setIsSubmitting(false)
            
            router.push(`/onboarding/center-details/${id}`)
        }, 1000)
    }

    const handleDisabledClick = () => {
        if (disabled) {
            if (!helpers.allKidsFieldsAreNotEmpty(inputValues)) {
                setErrorValues(prevState => {
                    let errorArr = [ ...prevState ]

                    for(let i = 0; i < errorArr.length; i++) {
                        for (let field in errorArr[i]) {
                            if (field !== "allergies") {
                                if (inputValues[i][field] === "") {
                                    errorArr[i][field] ||= "Oops! You forgot to fill this field."
                                }
                            }
                        }
                    }
                    
                    return errorArr
                })
            }
        }
    }

    useEffect(() => {
        if (helpers.allKidsFieldsAreErrorFree(errorValues) && helpers.allKidsFieldsAreNotEmpty(inputValues)) {
            setDisabled(false)
        } else setDisabled(true)
    }, [errorValues, inputValues])

    useEffect(() => {
        if (kids !== 1) {
            setInputValues(() => Array(kids).fill("0").map(item => kidsDetailsInputsDefault))
            setErrorValues(() => Array(kids).fill("0").map(item => kidsDetailsInputsDefault))
        }
    }, [])

    const submitBtn: ButtonProps = {
        text: isSubmitting ? "Checking..." : "Next",
        type: "submit",
        disabled,
        clickHandler
    }

    return (
        <form onSubmit={(e) => {e.preventDefault(); console.log("silly")} } className="w-full">
            { inputValues.map((item,idx) => {
                const props = {
                    index: String(idx),
                    values: item,
                    errorVals: errorValues[idx],
                    changeHandler
                }

                return <SingleKidsDetailForm key={uuid()} kidsDetailProps={ props } />
            })}

            <div onClick={ addAnotherKidHandler } className={`w-full flex items-center gap-2 mt-2`}>
                <BsPlusCircle className="text-orange text-lg" />
                <span className="text-base leading-6 text-orange tracking-[0.005rem]">
                    Register another kid
                </span>
            </div>

            <div onClick={ handleDisabledClick } className="w-full mt-11 mb-7">
                <ButtonFill componentProps={ submitBtn } />
            </div>
        </form>
    )
}

export default KidsDetailsForm