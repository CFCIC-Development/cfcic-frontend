import Alert from "../components/Alert"

const OnboardingLayout = (props) => {
    return (
        <div className="w-full flex justify-center bg-[#FBFBFB]">
            <Alert />
            <main className="w-full md:w-[550px] lg:w-[600px] min-h-screen shadow bg-white px-4">
                { props.children }
            </main>
        </div>
    )
}

export default OnboardingLayout