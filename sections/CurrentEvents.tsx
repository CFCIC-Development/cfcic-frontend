import { currentEvents } from "../data/props"
import { CurrentEventSngle } from "../components/EventSingle"
import uuid from "react-uuid"

const CurrentEvents: React.FC = () => {
    return (
        <section className="w-full mb-11 px-5">
            <h2 className="font-lato font-medium text-base text-[#10171B] tracking-[0.002rem] mb-3">Upcoming</h2>
            <div className="w-full grid gap-7">
                { currentEvents.map((item) => <CurrentEventSngle key={uuid()} componentProps={ item } />)}
            </div>
        </section>
    )
}

export default CurrentEvents