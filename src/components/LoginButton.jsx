import { LogIn } from "lucide-react"

export default function LoginButton() {
    return (
        <button
            type="submit"
            className="w-full flex gap-2 justify-center items-center bg-[#00236F] text-white py-3 px-4 rounded-2xl cursor-pointer transition-all duration-250 ease-in-out hover:bg-gray-400" 
        >
            Masuk
            <LogIn className="w-4.5 h-4.5" />
        </button>
    )
}