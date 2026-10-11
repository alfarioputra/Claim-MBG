import { LogIn } from "lucide-react"

export default function LoginButton() {

    return (
        <button
            type="submit"
            aria-label="Login"
            title="Login"
            className="w-full flex gap-2 justify-center items-center bg-[#00236F] text-white py-3 px-4 rounded-xl cursor-pointer transition-all duration-250 ease-in-out hover:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
            Masuk
            <LogIn size={18} />
        </button>
    )
}