import SignInHeading from "../components/SignInHeading"
import OnboardingLayout from "../layout/OnboardingLayout"
import { registerHeadingProps } from "../data/props"
import RegisterForm from "../sections/RegisterForm"
import Link from "next/link";
import FacebookGoogleAuth from "../sections/FacebookGoogleAuth";

const Register: React.FC = () => {
    return (
        <OnboardingLayout>
            <SignInHeading headingProps={ registerHeadingProps } />
            <FacebookGoogleAuth />
            <section className="pb-16">
                <RegisterForm />
                <p className="font-lato text-base text-dark text-center">
                    By registering you agree to CFCIC
                    <Link href="#">
                        <span className="font-semibold text-orange"> Terms of Use </span>
                    </Link>
                    and
                    <Link href="#">
                        <span className="font-semibold text-orange"> Privacy Policy</span>
                    </Link>
                </p>
                <p className="font-lato text-base text-dark text-center mt-11">
                    Already registered? Please
                    <Link href="/login">
                        <span className="font-semibold text-orange"> Sign In</span>
                    </Link>
                </p>
            </section>
        </OnboardingLayout>
    )
}

export default Register