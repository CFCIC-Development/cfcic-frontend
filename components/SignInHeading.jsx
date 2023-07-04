
const SignInHeading = ({ headingProps }) => {
    const { heading, text, isMainHeading = true } = headingProps

    return (
        <section className={`${isMainHeading ? "mt-[3.125rem]" : "mt-6"} pb-8 font-lato text-center font-normal`}>
            { isMainHeading ? (
                <h1 className="text-[1.5625rem] leading-[1.875rem] mb-3 text-[#10171B]">
                    { heading }
                </h1>
            ) : (
                <h2 className="text-[1.25rem] leading-6 mb-3 text-[#10171B] font-medium">
                    { heading }
                </h2>
            )}
            <p className="text-base text-[#01080D]">
                { text }
            </p>
        </section>
    )
}

export default SignInHeading