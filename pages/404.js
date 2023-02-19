import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"
const Notfound = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])
    return (
        <div className="not-found">
            <h1>Oooops..</h1>
            <h2>That page cannot found</h2>
            <Link href='/' className="not-foundlink">Go back to the HomePage</Link>

        </div>
    )
}
export default Notfound