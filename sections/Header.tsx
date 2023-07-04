import Image from "next/image"
import Link from "next/link"
import menuIcon from "../assets/images/icons/menu.svg"
import notificationsIcon from "../assets/images/icons/notifications.svg"

const Header: React.FC<ComponentProps<HeaderProps>> = ({ componentProps }) => {
    const { page } = componentProps

    return (
        <header className="w-full flex items-center justify-between relative bg-navy px-5 py-[1.625rem]">
            <button>
                <Image src={ menuIcon } width={20} alt="" />
            </button>

            <Link href="#" className="">
                <Image src={  notificationsIcon } alt="" width={20} />
            </Link>
        </header>
    )
}

export default Header