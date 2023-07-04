import { useRouter } from "next/router"
import OnboardingLayout from "../../../layout/OnboardingLayout"
import OnboardHeading from "../../../components/OnboardHeading"
import OnboardStatus from "../../../components/OnboardStatus"
import SignInHeading from "../../../components/SignInHeading"
import { financialCommitmentsHeadingProps } from "../../../data/props"
import FinancialCommitmentsForm from "../../../sections/FinancialCommitmentsForm"

const FinancialCommitments = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <OnboardingLayout>
            <section>
                <OnboardHeading headingProps={{ hasBackButton: true, page: "financial-commitments" }} />
                <OnboardStatus num={3} />
                <SignInHeading headingProps={ financialCommitmentsHeadingProps } />
            </section>
            <section>
                <FinancialCommitmentsForm />
            </section>
        </OnboardingLayout>
    )
}

export default FinancialCommitments