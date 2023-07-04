import { useState } from "react"
import { RiErrorWarningLine} from "react-icons/ri"
import helpers from "../helpers"

const Input = ({ inputProps }) => {
    const { label, type, placeholder, name, value, changeHandler, errorText, hasHeart = false } = inputProps

    const [isFocused, setIsFocused] = useState(false)

    let borderColor = errorText ? "border-red" : isFocused ? "border-blue" : "border-[#77858C]"
    let errorDisplay = errorText ? "flex" : "hidden"

    const handleFocus = () => setIsFocused(true)
    const handleBlur = () => setIsFocused(false)
    // console.log("why")
    const handleChange = (e) => {
        changeHandler(e)
    }

    // if (type === "date") {
        return (
            <label className="w-full flex flex-col font-lato mb-4">
                <span className="font-semibold text-[#10171B] text-xs leading-[0.875rem] tracking-[0.005rem] mb-2">
                    { label }
                </span>
                <input type={ type } onChange={ handleChange } value={ value } placeholder={ placeholder }
                    onFocus={ handleFocus } onBlur={ handleBlur } onMouseEnter={ handleFocus }
                    onMouseLeave={ handleBlur } required name={ name } max={helpers.getCurrentDate()}
                    className={`w-full border ${borderColor} text-base text-dark placeholder:text-[#666]
                    px-[1.625rem] py-4 bg-transparent outline-none rounded-[0.75rem] ${hasHeart ? "heart" : ""}`}
                />
                <div className={`w-full items-center gap-2 mt-2 transition-all duration-300 ease-in ${errorDisplay}`}>
                    <RiErrorWarningLine className="text-red text-base" />
                    <span className="text-sm leading-6 text-red tracking-[0.005rem]">
                        { errorText }
                    </span>
                </div>
            </label>
        )
    // }

    // return (
    //     <label className="w-full flex flex-col font-lato mb-4">
    //         <span className="font-semibold text-[#10171B] text-xs leading-[0.875rem] tracking-[0.005rem] mb-2">
    //             { label }
    //         </span>
    //         <input type={ type } onChange={ handleChange } value={ value } placeholder={ placeholder }
    //             onFocus={ handleFocus } onBlur={ handleBlur } onMouseEnter={ handleFocus }
    //             onMouseLeave={ handleBlur } required name={ name }
    //             className={`w-full border ${borderColor} text-base text-dark placeholder:text-[#666]
    //             px-[1.625rem] py-4 bg-transparent outline-none rounded-[0.75rem]`}
    //         />
    //         <div className={`w-full items-center gap-2 mt-2 transition-all duration-300 ease-in ${errorDisplay}`}>
    //             <RiErrorWarningLine className="text-red text-base" />
    //             <span className="text-sm leading-6 text-red tracking-[0.005rem]">
    //                 { errorText }
    //             </span>
    //         </div>
    //     </label>
    // )
}

export default Input