import Navbar from "../components/Navbar"
import Home from "./Home"
import Alur from "./Alur"
import Informasi from "./Informasi"
import Penggunaan from "./Penggunaan"
import Footer from "../components/Footer"

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