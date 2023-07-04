import { useRouter } from "next/router"
import OnboardingLayout from "../../../layout/OnboardingLayout"
import OnboardHeading from "../../../components/OnboardHeading"
import OnboardStatus from "../../../components/OnboardStatus"
import SignInHeading from "../../../components/SignInHeading"
import { centerDetailsHeadingProps } from "../../../data/props"
import CenterDetailsForm from "../../../sections/CenterDetailsForm"

const CenterDetails = () => {
    const router = useRouter()
    const { id } = router

    return (
        <OnboardingLayout>
            <section>
                <OnboardHeading headingProps={{ hasBackButton: true, page: "center-details" }} />
                <OnboardStatus num={2} />
                <SignInHeading headingProps={ centerDetailsHeadingProps } />
            </section>
            <section>
                <CenterDetailsForm />
            </section>
        </OnboardingLayout>
    )
}

export default CenterDetails