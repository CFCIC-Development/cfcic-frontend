import { FcGoogle } from "react-icons/fc"
import facebook from "../assets/images/icons/facebook.svg"
import Image from "next/image"

const FacebookGoogleAuth: React.FC = () => {

    const handleGoogleAuth = () => {

    }

    const handleFacebookAuth = () => {
        fetch("http://localhost:8000/auth/facebook")
        .then(response=> {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <section>
            <button type="button" onClick={ handleGoogleAuth } className="w-full bg-[#D9D9D9] rounded-xl flex items-center justify-center gap-3 py-[1.125rem]">
                <FcGoogle className="text-2xl" />
                <span className="font-workSans font-semibold text-[#1D1C1C] text-lg leading-6">Google</span>
            </button>
            <div className="flex gap-5 items-center py-8">
                <span className="w-full h-[1px] bg-[#D9D9D9]"></span>
                <span className="font-lato text-base leading-5 text-dark">or</span>
                <span className="w-full h-[1px] bg-[#D9D9D9]"></span>
            </div>
            <button type="button" onClick={ handleFacebookAuth } className="w-full bg-[#D9D9D9] rounded-xl flex items-center justify-center gap-3 py-[1.125rem]">
                <Image src={ facebook } alt="" width={22} height={22} />
                <span className="font-workSans font-semibold text-[#1D1C1C] text-lg leading-6">Facebook</span>
            </button>
            <div className="flex gap-5 items-center py-8">
                <span className="w-full h-[1px] bg-[#D9D9D9]"></span>
                <span className="font-lato text-base leading-5 text-dark">or</span>
                <span className="w-full h-[1px] bg-[#D9D9D9]"></span>
            </div>
        </section>
    )
}

export default FacebookGoogleAuth