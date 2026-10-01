import { useState } from "react";
import LoginButton from "../components/LoginButton";
import { Lock, Eye, EyeOff, User, LockKeyholeOpen } from "lucide-react";

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isShow, setIsShow] = useState(false)

    console.log(username)
    console.log(password)

    return (
        <div className="max-w-lg mx-auto flex flex-col space-y-7 bg-white p-5 rounded-2xl shadow-md">
            <div className="flex flex-col justify-center items-center space-y-3">
                <div className="flex gap-1.5 items-center px-3 py-1 bg-[#F0F9FF] rounded-full border border-[#E0F2FE]">
                    <LockKeyholeOpen className="shrink-0" size={12} color="#004B93" />
                    <span className="flex-1 text-xs text-[#004B93]">Portal ClaimMBG</span>
                </div>
                <h1 className="text-lg sm:text-3xl font-bold">Masuk ke ClaimMBG</h1>
                <p className="text-xs text-[#64748B]">MAN 1 Kota Kediri</p>
            </div>
            <form onSubmit={handleLogin} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2 text-sm">
                    <label>Username</label>
                    <div className="flex gap-2 items-center bg-[#EFF4FF] px-3 rounded-xl hover:ring-1 ring-red-500 focus-within:ring-1 focus-within:ring-red-500">
                        <User className="w-5 h-5 shrink-0" />
                        <input 
                            type="text" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="flex-1 py-3 focus:outline-0" 
                            placeholder="Masukkan Username"  
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-sm">
                    <label>Password</label>
                    <div className="flex gap-2 items-center bg-[#EFF4FF] px-3 rounded-xl hover:ring-1 ring-red-500 focus-within:ring-1 focus-within:ring-red-500">
                        <Lock className="w-5 h-5 shrink-0" />
                        <input 
                            type={isShow ? 'text' : 'password'} 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="flex-1 py-3 focus:outline-0" 
                            placeholder="Masukkan Password"  
                        />
                        <button
                            type="button"
                            onClick={() => setIsShow((prev) => !prev)}
                            className="transition-colors"
                        >
                            { isShow ? (
                                <EyeOff className="w-5 h-5 shrink-0 cursor-pointer" /> 
                            ) : (
                                <Eye className="w-5 h-5 shrink-0 cursor-pointer" /> 
                            )}
                        </button>
                    </div>
                </div>
                <LoginButton />
            </form>
        </div>
    )
}