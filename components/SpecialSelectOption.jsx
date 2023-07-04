const SpecialSelectOption = ({ optionProps }) => {
    const { label, value, isLastItem, isSelected, clickHandler } = optionProps

    const border = isLastItem ? "" : "border-b"
    const background = isSelected ? "bg-blue" : "bg-transparent"

    return (
        <div onClick={(e) => clickHandler(e) } data-value={ value } className="px-4">
            <div data-value={ value } className={`w-full ${border} border-[#77858C] flex gap-3 py-5`}>
                <span className="w-5 h-5 rounded-full bg-transparent border border-blue option_check 
                    grid place-items-center pointer-events-none flex-none"
                >
                    <span className={`w-3 h-3 rounded-full ${background} pointer-events-none`}></span>
                </span>
                <p className="font-lato text-base text-dark pointer-events-none">
                    <span className="font-semibold">{ value }</span>
                    <span className="">{ label }</span>
                </p>
            </div>
        </div>
    )
}

export default SpecialSelectOption