import EventsLayout from "../../layout/EventsLayout"
import CurrentEvents from "../../sections/CurrentEvents"
import UpcomingEvents from "../../sections/UpcomingEvents"

const EventsPage = () => {

    return (
        <EventsLayout componentProps={{ page: "events" }}>
            <section className="w-full px-5">
                <h1 className="font-lato text-xl leading-[1.875rem] text-dark mt-[0.625rem] mb-4">Events & Programs</h1>
            </section>
            <CurrentEvents />
            <UpcomingEvents />
        </EventsLayout>
    )
}

export default EventsPage