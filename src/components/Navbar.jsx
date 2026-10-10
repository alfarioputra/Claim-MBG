import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import icon from '../assets/icon.svg'
import LogoutButton from "./LogoutButton"
import { LogIn } from "lucide-react"

const navItems = [
    { label: "Pencatatan", href: "#pencatatan" },
    { label: "Alur layanan", href: "#alur" },
    { label: "Informasi", href: "#informasi" },
    { label: "Pengguna", href: "#pengguna" },
]

export default function Navbar({ compact = false }) {
    const [activeNav, setActiveNav] = useState("#pencatatan")

    function handleNavClick(event, navItem) {
        event.preventDefault()
        setActiveNav(navItem.href)

        const sectionId = navItem.href.replace("#", "")
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <header className="sticky top-0 z-1 bg-[#07508cd8] text-white shadow-md backdrop-blur-md">
            <div className="max-w-6xl mx-auto min-h-17 flex items-center justify-between gap-4 px-4">
                <Link to="/" className="flex shrink-0 items-center gap-2">
                    <img src={icon} className="w-12 md:w-15" alt="claim mbg icon" />
                    <p className="text-lg font-bold">ClaimMBG</p>
                </Link>

                {compact ? (
                    <LogoutButton />
                ) : (
                    <>
                        <nav className="hidden items-center gap-4 text-sm font-semibold md:flex">
                            {navItems.map((navItem) => (
                                <a
                                    key={navItem.href}
                                    href={navItem.href}
                                    onClick={(event) => handleNavClick(event, navItem)}
                                    className={activeNav === navItem.href
                                        ? "rounded-full bg-white px-4 py-2.5 text-[#173957]"
                                        : "rounded-full px-4 py-2.5 text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                                    }
                                >
                                    {navItem.label}
                                </a>
                            ))}
                        </nav>

                        <Link
                            to="/login"
                            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-white px-4 text-sm font-bold text-[#173957] transition-colors hover:bg-[#e3f0ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-5"
                        >
                            Masuk
                            <LogIn size={18} />
                        </Link>
                    </>
                )}
            </div>
        </header>
    )
}