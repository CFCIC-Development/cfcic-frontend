const OnboardStatus = ({ num, limit = 3 }) => {
    return (
        <div className={`grid ${limit === 3 ? "grid-cols-3" : "grid-cols-4"} gap-3`}>
            <span className={`w-full bg-navy h-[0.15625rem] ${num < 1 ? "opacity-25": ""}`}></span>
            <span className={`w-full bg-navy h-[0.15625rem] ${num < 2 ? "opacity-25": ""}`}></span>
            <span className={`w-full bg-navy h-[0.15625rem] ${num < 3 ? "opacity-25": ""}`}></span>
            { limit === 4 ? (
                <span className={`w-full bg-navy h-[0.15625rem] ${num < 4 ? "opacity-25": ""}`}></span>
            ) : null}
        </div>
    )
}

export default OnboardStatus