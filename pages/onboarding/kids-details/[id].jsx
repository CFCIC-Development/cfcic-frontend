import { useRouter } from "next/router"
import OnboardingLayout from "../../../layout/OnboardingLayout"
import OnboardHeading from "../../../components/OnboardHeading"
import OnboardStatus from "../../../components/OnboardStatus"
import SignInHeading from "../../../components/SignInHeading"
import { kidsDetailsHeadingProps } from "../../../data/props"
import KidsDetailsForm from "../../../sections/KidsDetailsForm"

const KidsDetails = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <OnboardingLayout>
            <section>
                <OnboardHeading headingProps={{ hasBackButton: true, page: "kids-details" }} />
                <OnboardStatus num={2} limit={4} />
                <SignInHeading headingProps={ kidsDetailsHeadingProps } />
            </section>
            <section>
                <KidsDetailsForm />
            </section>
        </OnboardingLayout>
    )
}

export default KidsDetails