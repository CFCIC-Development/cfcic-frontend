import uuid from "react-uuid";
import RadioInput from "./RadioInput";
import { RiErrorWarningLine } from "react-icons/ri";

const RadioGroup = ({ radioGroupProps }) => {
    const { options, name, changeHandler, radioValue, errorText } = radioGroupProps

    let errorDisplay = errorText ? "block" : "hidden"

    return (
        <div>
            <fieldset className="w-full grid gap-5">
                { options.map(item => {
                    let props = Object.assign(item, { name, changeHandler, isChecked: item.value === radioValue })
                    return <RadioInput key={uuid()} radioProps={props} />
                })}
            </fieldset>
            <div className={`w-full flex items-center gap-2 mt-2 transition-all duration-300 ease-in ${errorDisplay}`}>
                <RiErrorWarningLine className="text-red text-base" />
                <span className="text-sm leading-6 text-red tracking-[0.005rem]">
                    { errorText }
                </span>
            </div>
        </div>
    )
}

export default RadioGroup