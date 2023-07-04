import Header from "../sections/Header";
import Alert from "../components/Alert";

const EventsLayout: React.FC<ComponentWithChildrenProps<HeaderProps>> = ({ componentProps, children }) => {
    const { page } = componentProps

    return (
        <div className="w-full flex justify-center bg-[#FBFBFB]">
                <Alert />
            <div className="w-full md:w-[550px] lg:w-[600px] min-h-screen shadow bg-white">
                <Header componentProps={{ page }} />
                <main className="w-full bg-white">
                    { children }
                </main>
            </div>
        </div>
    )
}

export default EventsLayout