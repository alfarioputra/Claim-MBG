import { useState, useEffect } from "react";
import LoginButton from "../components/LoginButton";
import { Lock, Eye, EyeOff, User, LockKeyholeOpen } from "lucide-react";
import { useSignIn, useAuth } from "@clerk/react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isShow, setIsShow] = useState(false)
    const [error, setError] = useState('')
    const { isLoaded: authLoaded, isSignedIn } = useAuth()
    const { signIn } = useSignIn()
    const navigate = useNavigate()

    useEffect(() => {
        if (authLoaded && isSignedIn) {
            navigate('/redirect', { replace: true })
        }
    }, [authLoaded, isSignedIn, navigate])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        if (!username || !password) {
            setError('Username dan password wajib diisi')
            return
        }

        if (!signIn) {
            setError("Layanan login sedang dimuat. Coba lagi sebentar.")
            return
        }

        try {
            const { error } = await signIn.password({
                identifier: username,
                password,
            })
    
            if (error) {
                setError(error.message)
                return
            }
    
            if (signIn.status === 'complete') {
                await signIn.finalize({
                    navigate: () => {
                        navigate('/redirect', { replace: true })
                    },
                })
                return
            }

            setError(`Login belum selesai: ${signIn.status}`)
        } catch (error) {
            setError(error.message || "Login gagal. Periksa koneksi lalu coba lagi.")
        }


    }

    return (
        <>
        <div className="flex min-h-screen items-center justify-center bg-[#F1F7FF] px-4 py-6">
            <div className="w-full max-w-lg mx-auto flex flex-col space-y-7 bg-white p-5 rounded-2xl shadow-md">
                <div className="flex flex-col justify-center items-center space-y-3">
                    <div className="flex gap-1.5 items-center px-3 py-1 bg-[#F0F9FF] rounded-full border border-[#E0F2FE]">
                        <LockKeyholeOpen className="shrink-0" size={12} color="#004B93" />
                        <span className="flex-1 text-xs text-[#004B93]">Portal ClaimMBG</span>
                    </div>
                    <h1 className="text-lg sm:text-3xl font-bold">Masuk ke ClaimMBG</h1>
                    <p className="text-xs text-[#64748B]">MAN 1 Kota Kediri</p>

                    {error && (
                        <div className="rounded bg-red-50 p-3 text-sm text-red-600">
                            {error}
                        </div>
                    )}
                    
                </div>
                <form 
                    onSubmit={handleSubmit} 
                    className="flex flex-col gap-5"
                >
                    <div className="flex flex-col gap-2 text-sm">
                        <label>Username</label>
                        <div className="flex gap-2 items-center bg-[#EFF4FF] px-3 rounded-xl hover:ring-1 ring-red-500 focus-within:ring-1 focus-within:ring-red-500">
                            <User className="shrink-0" size={20} />
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
                            <Lock className="shrink-0" size={20} />
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
                                    <EyeOff className="shrink-0 cursor-pointer" size={20} /> 
                                ) : (
                                    <Eye className="shrink-0 cursor-pointer" size={20} /> 
                                )}
                            </button>
                        </div>
                    </div>
                    <LoginButton />
                </form>
            </div>
        </div>
        <Footer />
        </>
    )
}
