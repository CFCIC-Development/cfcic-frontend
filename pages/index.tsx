import Link from "next/link"
import OnboardingLayout from "../layout/OnboardingLayout"
import Navbar from "../components/Navbar"

const Home: React.FC = () => {
  return (
    <OnboardingLayout>
    <>
      <Navbar />
      <section className="w-full h-screen grid place-items-center">
        <Link href="/login" className="font-lato font-bold text-xl text-navy hover:text-orange active:text-orange
          text-center hover:underline active:underline active:underline-offset-8 transition-all duration-300 ease-in
          tracking-wider"
        >
          Login
        </Link>
      </section>
      </>
    </OnboardingLayout>
  )
}

export default Home