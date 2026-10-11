import AOS from "aos"
import 'aos/dist/aos.css'
import { ClipboardList, UsersRound } from "lucide-react"
import { useEffect } from "react"

export default function Penggunaan() {

    useEffect(() => {
        AOS.init(() => ({
            duration: 2000,
            once: false
        }))
    }, [])

    return (
        <section id="pengguna" className="scroll-mt-35 border-y border-[#d9e3ec] bg-white px-5 py-14 sm:py-16">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8 max-w-2xl">
                    <p 
                        className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#0876ba]"
                        data-aos="fade-right"
                    >
                        Pengguna portal
                    </p>
                    <h2 
                        className="mt-2 text-2xl font-extrabold text-[#10243d] sm:text-3xl"
                        data-aos="fade-left"
                    >
                        Satu pencatatan, peran yang jelas.
                    </h2>
                </div>
                <div className="overflow-hidden grid gap-8 border-t border-[#d9e3ec] pt-6 md:grid-cols-2 md:gap-12">
                    <article 
                        className="flex items-start gap-4"
                        data-aos="fade-up-right"
                    >
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#eaf4fc] text-[#07518c]"><ClipboardList size={21} /></span>
                        <div>
                            <h3 className="font-bold text-[#203b54]">Perwakilan kelas</h3>
                            <p className="mt-1 max-w-lg text-sm leading-6 text-[#647b91]">Mengisi nama perwakilan, kelas, dan jumlah porsi, lalu mengonfirmasi pengambilan serta pengembalian ompreng.</p>
                        </div>
                    </article>
                    <article 
                        className="flex items-start gap-4"
                        data-aos="fade-up-left"
                    >
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#eaf4fc] text-[#07518c]"><UsersRound size={21} /></span>
                        <div>
                            <h3 className="font-bold text-[#203b54]">Petugas pemantau</h3>
                            <p className="mt-1 max-w-lg text-sm leading-6 text-[#647b91]">Melihat catatan distribusi berdasarkan kelas, nama perwakilan, jumlah porsi, waktu, dan status pengembalian.</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}