import { useState } from "react"
import { RiErrorWarningLine } from "react-icons/ri"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"

const PasswordInput = ({ inputProps }) => {
    const { label, placeholder, name, value, changeHandler, errorText } = inputProps

    const [isFocused, setIsFocused] = useState(false)
    const [passwordIsVisible, setPasswordIsVisible] = useState(false)

    let borderColor = errorText ? "border-red" : isFocused ? "border-navy" : "border-[#77858C]"
    let type = passwordIsVisible ? "text" : "password"
    let errorDisplay = errorText ? "block" : "hidden"

    const handleFocus = () => setIsFocused(true)
    const handleBlur = () => setIsFocused(false)
    const toggleVisibility = () => setPasswordIsVisible(prevState => !prevState)

    const handleChange = (e) => {
        changeHandler(e)
    }

    return (
        <label className="w-full flex flex-col font-lato mb-4 relative">
            <span className="font-semibold text-[#10171B] text-xs leading-[0.875rem] tracking-[0.005rem] mb-2">
                { label }
            </span>
            <input type={ type } onChange={ handleChange } value={ value } placeholder={ placeholder }
                onFocus={ handleFocus } onBlur={ handleBlur } onMouseEnter={ handleFocus }
                onMouseLeave={ handleBlur } required name={ name }
                className={`w-full border ${borderColor} text-base text-dark placeholder:text-[#666]
                pl-6 pr-12 py-4 bg-transparent outline-none rounded-[0.75rem]`}
            />
            <button type="button" onClick={ toggleVisibility } 
                className={`w-fit h-fit absolute top-[2.625rem] right-6 outline-none border-none bg-transparent`}
            >
                <AiOutlineEyeInvisible className={`text-xl text-dark ${passwordIsVisible ? "hidden" : "block"}`} />
                <AiOutlineEye className={`text-xl text-dark ${passwordIsVisible ? "block" : "hidden"}`} />
            </button>
            <div className={`w-full flex items-center gap-2 mt-2 transition-all duration-300 ease-in ${errorDisplay}`}>
                <RiErrorWarningLine className="text-red text-base" />
                <span className="text-sm leading-6 text-red tracking-[0.005rem]">
                    { errorText }
                </span>
            </div>
        </label>
    )
}

export default PasswordInput