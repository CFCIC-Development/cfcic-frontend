import { useRouter } from "next/router"
import OnboardingLayout from "../../../layout/OnboardingLayout"
import OnboardHeading from "../../../components/OnboardHeading"
import OnboardStatus from "../../../components/OnboardStatus"
import SignInHeading from "../../../components/SignInHeading"
import { biodataHeadingProps } from "../../../data/props"
import BiodataForm from "../../../sections/BiodataForm"

const Biodata = () => {
    const router = useRouter()
    const { email } = router

    return (
        <OnboardingLayout>
            <section>
                <OnboardHeading headingProps={{ hasBackButton: false, page: "biodata" }} />
                <OnboardStatus num={1} />
                <SignInHeading headingProps={ biodataHeadingProps } />
            </section>
            <section>
                <BiodataForm />
            </section>
        </OnboardingLayout>
    )
}

export default Biodata