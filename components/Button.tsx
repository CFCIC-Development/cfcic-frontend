import Link from "next/link";

export const ButtonLinkFill: React.FC<ComponentProps<ButtonLinkProps>> = ({ componentProps }) => {
    const { text, linkTo = "#" } = componentProps

    return (
        <Link href={linkTo} className="">
            <div className="w-full p-[1.125rem] bg-orange text-white transition-all duration-500 ease-in
                disabled:cursor-not-allowed disabled:opacity-50 disabled:text-[#565757]
                active:bg-darkOrange rounded-button"
            >
                <p className="font-lato font-medium text-base leading-[1.25rem] text-center">
                    { text }
                </p>
            </div>
        </Link>
    )
}

export const ButtonLinkGhost: React.FC<ComponentProps<ButtonLinkProps>> = ({ componentProps }) => {
    const { text, linkTo = "#" } = componentProps

    return (
        <Link href={linkTo} className="">
            <div className="w-full p-[1.125rem] bg-transparent text-navy transition-all duration-500 ease-in
                border-[0.09375rem] border-navy rounded-button active:border-blue active:text-blue
                disabled:cursor-not-allowed disabled:opacity-50"
            >
                <p className="font-lato font-medium text-base leading-[1.25rem] text-center">
                    { text }
                </p>
            </div>
        </Link>
    )
}

export const ButtonFill: React.FC<ComponentProps<ButtonProps>> = ({ componentProps }) => {
    const { text, type, disabled, clickHandler } = componentProps

    // const handleClick = (e) => {
    //     clickHandler(e)
    // }

    return (
        <button onClick={ clickHandler } disabled={ disabled } type={ type }
            className="w-full p-[1.125rem] bg-orange text-white transition-all duration-500 ease-in
            disabled:cursor-not-allowed disabled:opacity-50 disabled:text-[#565757]
            active:bg-darkOrange rounded-button" 
        >
            <p className="font-lato font-medium text-base leading-[1.25rem]">
                { text }
            </p>
        </button>
    )
}

export const ButtonGhost: React.FC<ComponentProps<ButtonProps>> = ({ componentProps }) => {
    const { text, type, disabled, clickHandler } = componentProps

    // const handleClick = (e) => {
    //     clickHandler(e)
    // }

    return (
        <button onClick={ clickHandler } disabled={ disabled } type={ type }
            className="w-full p-[1.125rem] bg-transparent text-navy transition-all duration-500 ease-in
            border-[0.09375rem] border-navy rounded-button active:border-blue active:text-blue
            disabled:cursor-not-allowed disabled:opacity-50" 
        >
            <p className="font-lato font-medium text-base leading-[1.25rem]">
                { text }
            </p>
        </button>
    )
}