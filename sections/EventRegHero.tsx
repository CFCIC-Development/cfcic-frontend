import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const EventRegHero: React.FC<ComponentProps<EventRegHeroProps>> = ({ componentProps }) => {
    const { heading, image1, image2, text } = componentProps

    const [isImg1Active, setIsImg1Active] = useState<boolean>(true)

    let display1 = isImg1Active ? "block" : "hidden"
    let display2 = !isImg1Active ? "block" : "hidden"

    const timer = useRef<null | NodeJS.Timer>(null)
    const SWITCHING_INTERVAL: number = 2500

    const startSwitcher = () => {
        if (timer.current !== null) {
            return
        }

        timer.current = setInterval(() => {
            console.log("changed")
            setIsImg1Active(prevState => !prevState)
        }, SWITCHING_INTERVAL)
    }

    useEffect(() => {
        startSwitcher()
    }, [])

    return (
        <section className="w-full px-5">
            <h3 className="font-lato font-medium text-base text-dark tracking-[0.002rem] mb-[0.875rem]">
                { heading }
            </h3>
            <div className="w-full h-[15rem] bg-blue rounded-dashboard flex flex-col justify-center items-center gap-5 px-8">
                <figure>
                    <Image src={ image1 } alt="" className={`${display1}`} />
                    <Image src={ image2 } alt="" className={`${display2}`} />
                </figure>
                <p className="font-lato font-normal text-base text-[#FBFDFF] tracking-[0.002rem] text-center">
                    { text }
                </p>
            </div>
        </section>
    )
}

export default EventRegHero