import { BsArrowLeft } from "react-icons/bs"
import useKidsDetailsStore from "../store/kidsDetailsStore"
import { useRouter } from "next/router"

const OnboardHeading = ({ headingProps }) => {
    const { hasBackButton, page } = headingProps

    const router = useRouter()
    const { id } = router.query

    const kidsDetails = useKidsDetailsStore(state => state.kidsDetails)

    const backHandler = () => {
        if (page === "center-details") {
            if (kidsDetails.length === 0){
                router.replace(`/onboarding/biodata/${id}`)
            } else router.replace(`/onboarding/kids-details/${id}`)
        } else if (page === "kids-details") {
            router.replace(`/onboarding/biodata/${id}`)
        } else if (page === "financial-commitments") {
            router.replace(`/onboarding/center-details/${id}`)
        }
    }

    return (
        <div className="grid grid-cols-[1.25rem_1fr_1.25rem] items-center mt-[3.125rem] mb-6">
            <div>
                { hasBackButton ? (
                    <BsArrowLeft className="text-[#10171B] text-xl cursor-pointer" onClick={ backHandler } />
                ): null
                }
            </div>
            <h1 className="text-[1.5625rem] leading-[1.875rem] text-[#10171B] text-center font-lato">
                Set Up Your Profile
            </h1>
        </div>
    )
}

export default OnboardHeading