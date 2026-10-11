import Home from "../components/landing/Home"
import Alur from "../components/landing/Alur"
import Informasi from "../components/landing/Informasi"
import Penggunaan from "../components/landing/Penggunaan"
import Footer from "../components/layout/Footer"
import Navbar from "../components/layout/Navbar"

export default function LandingPage() {
    return (
        <main className="min-h-screen bg-[#f1f7ff] text-[#10243d]">
            <Navbar />

            <Home />

            <Alur />

            <Informasi />

            <Penggunaan />

            <Footer />
        </main>
    )
}