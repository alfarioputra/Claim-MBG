import { CircleArrowLeft, MapPin } from "lucide-react"

export default function ReturnStep() {

    return (
        <div className="flex flex-col gap-4 sm:gap-6 bg-white p-5 rounded-lg shadow-md">
            <h2 className="font-bold text-lg border-b border-[#F1F5F9] pb-2 sm:text-xl">Pengembalian Ompreng</h2>
            <div className="flex items-center justify-between p-3 sm:p-3.5 bg-[#F8FAFC] border border-[#E2E8F0CC] rounded-xl">
                <div className="flex gap-2 items-center">
                    <input 
                        type="checkbox"
                        className="cursor-pointer"
                    />
                    <p className="font-bold text-xs sm:text-sm">Ompreng Lengkap (wadah + tutup)</p>
                </div>
                <div className="hidden sm:flex items-center gap-1 bg-white border border-[#E2E8F0] py-1 px-3 rounded-md">
                    <MapPin size={12} />
                    <p className="font-medium text-xs">Serambi Aula Lama</p>
                </div>
            </div>
            <button
                type="button"
                className="w-full flex gap-2 justify-center items-center bg-[#0F172A] text-white text-xs sm:text-sm py-3 px-3 rounded-xl cursor-pointer transition-all duration-250 ease-in-out hover:bg-gray-400"

            >
                <CircleArrowLeft size={18} />
                Konfirmasi Pengembalian Ompreng
            </button>
        </div>
    )
}