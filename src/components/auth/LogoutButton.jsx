import { useState } from "react";
import { useClerk } from "@clerk/react";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LogoutConfirmPopup from "./LogoutConfirmPopup";

export default function LogoutButton() {
    const { signOut } = useClerk()
    const navigate = useNavigate()
    const [showPopup, setShowPopup] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const openPopup = () => {
        setError("")
        setShowPopup(true)
    }

    const handleLogout = async () => {
        setIsLoading(true)

        try {
            await signOut()
            navigate("/", { replace: true })
        } catch {
            setError("Logout gagal. Coba lagi.")
            setIsLoading(false)
        }
    }

    return (
        <>
            <button
                type="button"
                onClick={openPopup}
                aria-label="Logout"
                title="Logout"
                className='flex cursor-pointer items-center gap-2 rounded-lg border border-[#e5ebf2] px-3 py-2 text-[#52647b] transition-colors hover:bg-white/10 sm:px-4 sm:py-3'
            >
                <p className='text-sm text-white'>Logout</p>
                <LogOut size={18} color="white" />
            </button>

            {showPopup && (
                <LogoutConfirmPopup
                    onCancel={() => setShowPopup(false)}
                    onConfirm={handleLogout}
                    isLoading={isLoading}
                    error={error}
                />
            )}
        </>
    )
}