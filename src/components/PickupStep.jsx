import { useState } from "react"
import { CircleCheck } from 'lucide-react'
import { supabase } from "../supabase"
import { getFormattedTimeWIB } from "../utils/timeFormatted"

export default function PickupStep({ recordId, onSuccess }) {
    const [isSubmiting, setIsSubmiting] = useState(false)

    async function handleConfirm() {
        if (!recordId || isSubmiting) return

        setIsSubmiting(true)

        const { error } = await supabase
            .from('data')
            .update({ 
                logtime: getFormattedTimeWIB(),
                status: 'Sudah Diambil'
            })
            .eq('id', recordId)

        setIsSubmiting(false)

        if (error) {
            alert('Konfirmasi gagal disimpan')
            return
        }

        alert('Pengambilan berhasil dikonfirmasi')

        if (onSuccess) {
            onSuccess()
        }
    }

    return (
        <div className="flex flex-col gap-4 sm:gap-6 bg-white p-5 rounded-lg shadow-md">
            <h2 className="font-bold text-lg border-b border-[#F1F5F9] pb-2 sm:text-xl">Pengambilan MBG</h2>
            <p className="font-normal text-xs sm:text-sm">Batas Waktu hingga 13:00 WIB</p>
            <button
                type="button"
                className="w-full flex gap-2 justify-center items-center bg-[#0A3F7D] text-white text-xs sm:text-sm py-3 px-3 rounded-xl cursor-pointer transition-all duration-250 ease-in-out hover:opacity-60 disabled:opacity-60 disabled:cursor-not-allowed"
                onClick={handleConfirm}
                disabled={!recordId || isSubmiting}

            >
                <CircleCheck size={18} />
                { isSubmiting ? 'Memproses...' : 'Konfirmasi Pengambilan Sekarang' }
            </button>
        </div>
    )
}