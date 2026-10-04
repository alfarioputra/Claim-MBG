import { CircleCheck } from 'lucide-react'

export default function PickupStep() {

    return (
        <div className="flex flex-col gap-4 sm:gap-6 bg-white p-5 rounded-lg shadow-md">
            <h2 className="font-bold text-lg border-b border-[#F1F5F9] pb-2 sm:text-xl">Pengambilan MBG</h2>
            <p className="font-normal text-sm">Batas Waktu hingga 13:00 WIB</p>
            <button
                type="button"
                className="w-full flex gap-2 justify-center items-center bg-[#0A3F7D] text-white text-xs sm:text-sm py-3 px-3 rounded-xl cursor-pointer transition-all duration-250 ease-in-out hover:bg-gray-400"

            >
                <CircleCheck size={18} />
                Konfirmasi Pengambilan
            </button>
        </div>
    )
}