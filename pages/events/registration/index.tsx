import { useRouter } from "next/router"
import EventsLayout from "../../../layout/EventsLayout"
import EventPagesHistory from "../../../components/EventPagesHistory"
import EventRegHero from "../../../sections/EventRegHero"
import regStart1 from "../../../assets/images/mascot/reg-start-1.png"
import regStart2 from "../../../assets/images/mascot/reg-start-2.png"
import { useEffect, useState } from "react"
import EventsLittleHeader from "../../../components/EventsLittleHeader"
import { ButtonLinkFill, ButtonLinkGhost } from "../../../components/Button"

const EventRegistrationStart: React.FC = () => {
    const router = useRouter()
    const { event, shortname } = router.query

    const [name, setName] = useState<string>("")

    useEffect(() => {
        setName(() => typeof shortname === "string" ? shortname.split("_")[0] : "")
    }, [shortname])

    const regStartProps: EventRegHeroProps = {
        heading: typeof event === "string" ? event.replaceAll("_", " ") : "",
        image1: regStart1,
        image2: regStart2,
        text: "Yay! We're excited to have you fellowship with us at GBC 2023. We trust this will change your life forever."
    }

    const onsiteBtnProps: ButtonLinkProps = {
        text: "Physically, onsite",
        linkTo: `/events/registration/onsite?event=${event}&shortname=${shortname}`
    }

    const onlineBtnProps: ButtonLinkProps = {
        text: "Online",
        linkTo: `/events/registration/online?event=${event}&shortname=${shortname}`
    }

    return (
        <EventsLayout componentProps={{ page: "event-registration-start" }}>
            <section className="w-full px-5 mb-4">
                <h1 className="font-lato text-xl leading-[1.875rem] text-dark mt-[0.625rem] mb-4">Registration</h1>
                <EventPagesHistory componentProps={{ shortName: name }} />
            </section>
            <EventRegHero componentProps={ regStartProps } />
            <section className="w-full mt-[4.5rem] pb-14">
                <EventsLittleHeader>
                    <p className="font-lato font-medium text-base text-dark tracking-[0.002rem] text-center">
                        How would you be attending?
                    </p>
                </EventsLittleHeader>
                <div className="w-full px-5 grid gap-7">
                    <ButtonLinkFill componentProps={ onsiteBtnProps } />
                    <ButtonLinkGhost componentProps={ onlineBtnProps } />
                </div>
            </section>
        </EventsLayout>
    )
}

export default EventRegistrationStart