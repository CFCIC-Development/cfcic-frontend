import Image from "next/image"
import { ButtonLinkFill, ButtonLinkGhost } from "./Button"

export const CurrentEventSngle: React.FC<ComponentProps<CurrentEventSingleProps>> = ({ componentProps }) => {
    const { image, date, title, optionalText, shortName } = componentProps

    const [id, year] = shortName.split(" ")

    const btnProps = {
        text: "Register Now",
        linkTo: `/events/registration?event=${title.split(" ").join("_")}&shortname=${id}_${year}`
    }

    return (
        <div className="w-full" id={ id }>
            <p className="font-lato text-xs leading-[0.875rem] text-[#565757] tracking-[0.005rem] mb-2">{ date }</p>
            <figure className="w-full mb-5">
                <Image src={ image } alt={ title } className="w-full h-auto" priority />
                <figcaption className="w-full mt-2 text-center font-lato">
                    <p className="text-xl leading-[1.875rem] text-dark">{ title }</p>
                    { optionalText !== "" ? (
                        <p className="font-lato text-xs leading-[0.875rem] text-[#565757] tracking-[0.005rem] uppercase mt-2">{ optionalText }</p>
                    ) : null }
                </figcaption>
            </figure>
            <ButtonLinkFill componentProps={ btnProps } />
        </div>
    )
}

export const UpcomingEventSngle: React.FC<ComponentProps<UpcomingEventSingleProps>> = ({ componentProps }) => {
    const { image, date, title, optionalText = "", shortName = "" } = componentProps

    const btnProps = {
        text: "Learn More",
        linkTo: `#`
    }

    return (
        <div className="w-full">
            <p className="font-lato text-xs leading-[0.875rem] text-[#565757] tracking-[0.005rem] mb-2">{ date }</p>
            <figure className="w-full mb-5">
                <Image src={ image } alt={ title } className="w-full h-auto" />
                <figcaption className="w-full mt-2 text-center font-lato">
                    <p className="text-xl leading-[1.875rem] text-dark">{ title }</p>
                </figcaption>
            </figure>
            <ButtonLinkGhost componentProps={ btnProps } />
        </div>
    )
}