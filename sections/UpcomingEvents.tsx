import { upcomingEvents } from "../data/props"
import { UpcomingEventSngle } from "../components/EventSingle"
import uuid from "react-uuid"

const UpcomingEvents: React.FC = () => {
    return (
        <section className="w-full mb-12 px-5">
            <h2 className="font-lato font-medium text-base text-[#10171B] tracking-[0.002rem] mb-3">More to come</h2>
            <div className="w-full grid gap-7">
                { upcomingEvents.map((item) => <UpcomingEventSngle key={uuid()} componentProps={ item } />)}
            </div>
        </section>
    )
}

export default UpcomingEvents