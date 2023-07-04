import { useRouter } from "next/router"
import OnboardingLayout from "../../layout/OnboardingLayout"

const EmailVerification = () => {
    const router = useRouter()
    const { email } = router.query

    const resendEmail = () => {

    }

    return (
        <OnboardingLayout>
            <section className="pt-[3.125rem] pb-8 font-lato text-center font-normal">
                <h1 className="text-[1.5625rem] leading-[1.875rem] mb-3 text-[#10171B]">
                    Email Verification
                </h1>
                <p className="text-base text-[#01080D]">
                    A verification link has been sent to <span className="font-bold">{` ${email}`}</span>
                    . Click on it to verify your account and continue
                </p>
                <p className="font-lato text-base text-dark text-center mt-11">
                    Already registered? Please
                    <button type="button" onClick={ resendEmail } className="inline bg-transparent outline-none border-none">
                        <span className="font-semibold text-orange pl-1"> Sign In</span>
                    </button>
                </p>
            </section>
        </OnboardingLayout>
    )
}

export default EmailVerification