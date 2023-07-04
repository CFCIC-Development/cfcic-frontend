import Link from "next/link"
import { useEffect, useState } from "react"

const EventPagesHistory: React.FC<ComponentProps<EventRegHistoryProps>> = ({ componentProps }) => {
    const { shortName } = componentProps

    let [linkState, setLinkState] = useState<string>("/events")

    useEffect(() => {
        setLinkState(`/events#${shortName}`)
    }, [shortName])
    
    return (
        <div>
            <p className="font-lato text-xs leading-[0.875rem] text-grey">
                <Link href="/events"><span>Events</span></Link>
                <span> / </span>
                <Link href={ linkState }><span>{ shortName }</span></Link>
                <span> / </span>
                <span className="text-dark">Registration</span>
            </p>
        </div>
    )
}

export default EventPagesHistory