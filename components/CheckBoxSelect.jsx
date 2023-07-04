import { useEffect, useRef, useState } from "react"
import { RiErrorWarningLine } from "react-icons/ri"
import { RxCaretDown } from "react-icons/rx"
import SelectOption from "./SelectOption"
import uuid from "react-uuid"

const CheckboxSelect = ({ selectProps }) => {
    const { label, placeholder, name, value, options, changeHandler, errorText } = selectProps

    const [isFocused, setIsFocused] = useState(false)
    const [isSelectActive, setIsSelectActive] = useState(false)
    const [selectedVal, setSelectedVal] = useState(placeholder)
    const [optionIsSelected, setOptionIsSelected] = useState(options.reduce((acc,curr) => {
        acc[curr.value] = value.includes(curr.value)
        return acc
    }, {}))

    const selectRef = useRef(null)
    const optionsGroupRef = useRef(null)

    let borderColor = errorText ? "border-red" : isFocused ? "border-navy" : "border-[#77858C]"
    let errorDisplay = errorText ? "flex" : "hidden"
    let height = isSelectActive ? "h-fit" : "h-0"
    let rotation = isSelectActive ? "rotate-180" : ""

    const handleFocus = () => setIsFocused(true)
    const handleBlur = () => setIsFocused(false)
    const handleClick = (e) => {
        if (optionsGroupRef.current !== null) {
            if (!optionsGroupRef.current.contains(e.target)) {
                setIsSelectActive(prevState => !prevState)
            } else {
                return
            }
        }
    }

    const handleOptionClick = (e) => {
        const optionValue = e.target.dataset.value

        const isChecked = !optionIsSelected[optionValue]
        
        changeHandler(name, optionValue, isChecked)
    }

    const completeOptions = []
    for (let i = 0; i < options.length; i++) {
        const obj = {...options[i]}

        obj.isSelected = optionIsSelected[obj.value]
        obj.clickHandler = handleOptionClick

        if (i === options.length - 1) {
            obj.isLastItem = true
        } else obj.isLastItem = false

        completeOptions.push(obj)
    }

    useEffect(() => {
        let newValue = []
        const newOptions = [ ...options ]

        for (let option of newOptions) {
            if (value.includes(option.value)) {
                newValue.push(option.label)
                option.isSelected = true
            } else {
                option.isSelected = false
            }
        }

        let newValueStr = newValue.join(", ")
        newValueStr = newValueStr === "" ? placeholder : newValueStr
        
        setSelectedVal(newValueStr)
        setOptionIsSelected(options.reduce((acc,curr) => {
            acc[curr.value] = value.includes(curr.value)
            return acc
        }, {}))
    }, [value, options, placeholder])

    return (
        <div className="w-full flex flex-col font-lato mb-4">
            <span className="font-semibold text-[#10171B] text-xs leading-[0.875rem] tracking-[0.005rem] mb-2">
                { label }
            </span>
            <div onFocus={ handleFocus } onClick={ handleClick } ref={selectRef}
                onBlur={ handleBlur } onMouseEnter={ handleFocus } onMouseLeave={ handleBlur }
                className={`w-full border ${borderColor} text-base text-dark px-[1.625rem] 
                placeholder:text-[#666] py-4 bg-transparent outline-none rounded-[0.75rem] relative`}
            >
                <div className="w-full flex gap-3 items-center justify-between">
                    <p className="relative">{ selectedVal }</p>
                    <RxCaretDown className={`text-xl text-dark ${rotation} transition-all duration-300 ease`} />
                </div>
                <div ref={optionsGroupRef} className={`w-[101%] overflow-hidden absolute z-10 transition-all duration-300
                    ease-in bg-white top-[3.75rem] left-[-0.5%] shadow ${height}`}
                >
                    { completeOptions.map((item) => <SelectOption key={uuid()} optionProps={ item } />) }
                </div>
            </div>
            <div className={`w-full items-center gap-2 mt-2 transition-all duration-300 ease-in ${errorDisplay}`}>
                <RiErrorWarningLine className="text-red text-base" />
                <span className="text-sm leading-6 text-red tracking-[0.005rem]">
                    { errorText }
                </span>
            </div>
        </div>
    )
}

export default CheckboxSelect