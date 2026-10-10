import React from "react";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
    const handleGoBack = () => {
        window.history.back()
    }
    
    const handleGoHome = () => {
        window.location.href = "/"
    }
    
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
            <div className="text-center">
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-gray-800 mb-4">404</h1>
                    <div className="w-24 h-1 bg-[#0A3F7D] mx-auto rounded-full"></div>
                </div>
                
                <div className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-700 mb-4">Oops! Halaman Tidak Ditemukan</h2>
                    <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
                        Halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau tidak pernah ada.
                    </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={handleGoBack}
                        className="flex items-center gap-2 px-6 py-3 bg-[#0F172A] cursor-pointer text-white rounded-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:opacity-60"
                    >
                        <ArrowLeft size={20} />
                        Kembali
                    </button>

                    <button
                        onClick={handleGoHome}
                        className="flex items-center gap-2 px-6 py-3 bg-[#0A3F7D] cursor-pointer text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:opacity-60"
                    >
                        <Home size={20} />
                        Beranda
                    </button>
                </div>
            </div>
        </div>
    )
}
