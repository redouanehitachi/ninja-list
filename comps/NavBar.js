import Image from "next/image"
import Link from "next/link"
Image

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src='/logo.png' width={128} height={77} />

            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ninjas">Ninja listing</Link>
        </nav>
    )
}
export default Navbar