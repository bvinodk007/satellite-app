import { useLocation, Outlet } from "react-router-dom"
import Footer from "./footer"
import Navbar from "./navbar"
import LandingPage from "../pages/landing-page"

const Layout = () => {
    const location = useLocation()

    return (
        <div className="w-full min-h-screen antialiased bg-neutral-950 text-gray-50 font-mono">
            <Navbar />
            { location.pathname === '/' ? <LandingPage /> : <Outlet />}
            <Footer />
        </div>
    )
}

export default Layout