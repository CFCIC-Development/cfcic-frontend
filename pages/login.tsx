import SignInHeading from "../components/SignInHeading"
import OnboardingLayout from "../layout/OnboardingLayout"
import { loginHeadingProps } from "../data/props"
import LoginForm from "../sections/LoginForm"
import Link from "next/link";
import FacebookGoogleAuth from "../sections/FacebookGoogleAuth";

const Login: React.FC = () => {
    return (
        <OnboardingLayout>
            <SignInHeading headingProps={ loginHeadingProps } />
            <FacebookGoogleAuth />
            <section className="pb-16">
                <LoginForm />
                <p className="font-lato text-base text-dark text-center">
                    Not yet registered? 
                    <Link href="/register">
                        <span className="font-semibold text-orange"> Create an Account</span>
                    </Link>
                </p>
            </section>
        </OnboardingLayout>
    )
}

export default Login