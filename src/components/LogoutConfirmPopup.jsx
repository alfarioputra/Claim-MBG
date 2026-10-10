import { LogOut } from "lucide-react"
import { createPortal } from "react-dom"

export default function LogoutConfirmPopup({ onCancel, onConfirm, isLoading, error }) {
    return createPortal(
        <div
            className="fixed inset-0 z-1 grid min-h-dvh place-items-center bg-black/60 px-4 py-6 backdrop-blur-sm"
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="logout-title"
                className="w-full max-w-sm rounded-xl bg-white p-6 shadow-2xl"
            >
                <h2 id="logout-title" className="text-lg font-bold text-[#173957]">
                    Keluar dari akun?
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#647b91]">
                    Anda perlu masuk kembali untuk menggunakan portal.
                </p>

                {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

                <div className="mt-6 flex justify-end gap-3">
                    <button
                        type="button"
                        onClick={onCancel}
                        disabled={isLoading}
                        className="rounded-md border border-[#d5e2ef] px-4 py-2 text-sm font-semibold text-[#52647b] cursor-pointer hover:bg-[#f5f8fc] disabled:opacity-60"
                    >
                        Batal
                    </button>
                    <button
                        type="button"
                        onClick={onConfirm}
                        disabled={isLoading}
                        className="inline-flex items-center gap-2 rounded-md bg-[#b93d2b] px-4 py-2 text-sm font-semibold text-white cursor-pointer hover:bg-[#9f3022] disabled:cursor-wait disabled:opacity-60"
                    >
                        <LogOut size={16} />
                        {isLoading ? "Keluar..." : "Keluar"}
                    </button>
                </div>
            </div>
        </div>,
        document.body
    )
}
