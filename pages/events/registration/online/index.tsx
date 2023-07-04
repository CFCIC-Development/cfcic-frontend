import EventsLayout from "../../../../layout/EventsLayout"
import { useRouter } from "next/router"
import EventPagesHistory from "../../../../components/EventPagesHistory"
import { useEffect, useState } from "react"
import EventRegHero from "../../../../sections/EventRegHero"
import regStart1 from "../../../../assets/images/mascot/online-reg-start-1.png"
import regStart2 from "../../../../assets/images/mascot/online-reg-start-2.png"
import EventsLittleHeader from "../../../../components/EventsLittleHeader"
import { ButtonFill, ButtonLinkGhost } from "../../../../components/Button"

const EventOnlineRegStart: React.FC = () => {
    const router = useRouter()
    const { event, shortname } = router.query

    const [name, setName] = useState<string>("")
    const [image, setImage] = useState<File>(null)
    const [disabled, setDisabled] = useState<boolean>(false)

    const handleSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files as FileList

        setImage(selectedFiles?.[0])
    }

    const clickHandler = (e: React.FormEvent) => {
        e.preventDefault()
    }

    useEffect(() => {
        setName(() => typeof shortname === "string" ? shortname.split("_")[0] : "")
    }, [shortname])

    useEffect(() => {
        if (image === null) {
            setDisabled(true)
        } else setDisabled(false)
    }, [image])

    const regStartProps: EventRegHeroProps = {
        heading: typeof event === "string" ? event.replaceAll("_", " ") : "",
        image1: regStart1,
        image2: regStart2,
        text: "We'happy to have you fellowship with us online."
    }

    const registerBtnProps: ButtonProps = {
        text: "Register",
        type: "submit",
        disabled,
        clickHandler
    }

    const cancelBtnProps: ButtonLinkProps = {
        text: "Cancel",
        linkTo: `/events`
    }

    return (
        <EventsLayout componentProps={{ page: "online-reg-start" }}>
            <section className="w-full px-5 mb-4">
                <h1 className="font-lato text-xl leading-[1.875rem] text-dark mt-[0.625rem] mb-4">Registration</h1>
                <EventPagesHistory componentProps={{ shortName: name }} />
            </section>
            <EventRegHero componentProps={ regStartProps } />
            <form className="w-full mt-[4.5rem] pb-14">
                <EventsLittleHeader>
                    <p className="font-lato font-medium text-base text-dark tracking-[0.002rem] text-center">
                        Create your unique display picture
                    </p>
                </EventsLittleHeader>
                <div className="w-full px-5">
                    <h4 className="font-lato font-semibold text-base leading-5 text-orange mb-3">
                        Submit a file
                    </h4>
                    <fieldset className="w-full px-5 py-3 bg-lighestBlue">
                        <label>
                            <span>Choose file</span>
                            <input type="file" accept="image/*" multiple={false} hidden onChange={ handleSelectImage } />
                        </label>
                    </fieldset>
                </div>
                <div className="w-full px-5 grid gap-7">
                    <ButtonFill componentProps={ registerBtnProps } />
                    <ButtonLinkGhost componentProps={ cancelBtnProps } />
                </div>
            </form>
        </EventsLayout>
    )
}

export default EventOnlineRegStart