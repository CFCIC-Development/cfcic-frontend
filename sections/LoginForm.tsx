import { useEffect, useState } from "react";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import helpers from "../helpers";
import { ButtonFill } from "../components/Button";
import { useRouter } from "next/router";

const LoginForm: React.FC = () => {
    const router = useRouter()

    const [inputValues, setInputValues] = useState<LoginFormInputs>({ email: "", password: "" })
    const [errorValues, setErrorValues] = useState<LoginFormInputs>({ email: "", password: "" })
    const [disabled, setDisabled] = useState<boolean>(false)
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name, value = e.target.value

        try {
            setInputValues(prevState => {
                return { ...prevState, [name]: value }
            })

            if (name === "email") {
                if (!helpers.validateEmail(value)) throw new Error("Email address is invalid")
            } else if (name === "password") {
                if (!helpers.validatePassword(value)) throw new Error("invalid password")
            }

            setErrorValues(prevState => {
                return { ...prevState, [name]: "" }
            })
        } catch (error) {
            if (error.message === "invalid password") {
                if (!value) {
                    setErrorValues(prevState => {
                        return { ...prevState, [name]: "Oops! You forgot to fill this field." }
                    })
                } else if (!/^[A-Za-z0-9!@#$%&<>()*^/\\.;?]+$/.test(value)) {
                    setErrorValues(prevState => {
                        return { ...prevState, [name]: "Invalid character in password" }
                    })
                } else if (!/^(?=.*[A-Z]).+$/.test(value)) {
                    setErrorValues(prevState => {
                        return { ...prevState, [name]: "Password should contain an uppercase letter" }
                    })
                } else if (!/^(?=.*[a-z]).+$/.test(value)) {
                    setErrorValues(prevState => {
                        return { ...prevState, [name]: "Password should contain a lowercase letter" }
                    })
                } else if (!/^(?=.*[0-9!@#$%&<>()*^/\\.;?]).+$/.test(value)) {
                    setErrorValues(prevState => {
                        return { ...prevState, [name]: "Password should contain a number/symbol" }
                    })
                } else if (!/^.{6,}$/.test(value)) {
                    setErrorValues(prevState => {
                        return { ...prevState, [name]: "Password length should be 6 or more" }
                    })
                }
            } else if (error.message === "Email address is invalid") {
                if (!value) {
                    setErrorValues(prevState => {
                        return { ...prevState, [name]: "Oops! You forgot to fill this field." }
                    })
                } else {
                    setErrorValues(prevState => {
                        return { ...prevState, [name]: error.message }
                    })
                }
            }
        }
    }

    const clickHandler = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        setTimeout(() => {
            setInputValues({ email: "", password: "" })
            setIsSubmitting(false)
            router.push("/register")
        }, 2500)
    }

    const handleDisabledClick = () => {
        if (disabled) {
            if (!helpers.allFieldsAreNotEmpty(inputValues)) {
                setErrorValues(prevState => {
                    let errorObj = { ...prevState }

                    for (let field in errorObj) {
                        errorObj[field] ||= "Oops! You forgot to fill this field."
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

    const emailProps = { 
        label: "Email Address",
        type: "email",
        placeholder: "",
        name: "email",
        value: inputValues.email,
        changeHandler,
        errorText: errorValues.email
    }

    const passwordProps = { 
        label: "Password",
        placeholder: "",
        name: "password",
        value: inputValues.password,
        changeHandler,
        errorText: errorValues.password
    }

    const submitBtn: ButtonProps = {
        text: isSubmitting ? "Signing In..." : "Sign In",
        type: "submit",
        disabled,
        clickHandler
    }

    return (
        <form className="w-full">
            <Input inputProps={ emailProps } />
            <PasswordInput inputProps={ passwordProps } />
            <div onClick={ handleDisabledClick } className="w-full mt-8 mb-11">
                <ButtonFill componentProps={ submitBtn } />
            </div>
        </form>
    )
}

export default LoginForm