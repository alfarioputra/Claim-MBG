import { useEffect } from "react"
import { MapPin, Clock3, PackageCheck } from "lucide-react"
import AOS from "aos"
import 'aos/dist/aos.css'

export default function Informasi() {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true
        })
    }, [])

    return (
        <section id="informasi" className="scroll-mt-30 bg-[#e7f1fa] px-5 py-14 sm:py-16">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8 max-w-2xl">
                    <p 
                        className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#0876ba]"
                        data-aos="fade-right"
                    >
                        Informasi layanan
                    </p>
                    <h2 
                        className="mt-2 text-2xl font-extrabold text-[#10243d] sm:text-3xl"
                        data-aos="fade-left"
                    >
                        Hal kecil yang perlu disiapkan.
                    </h2>
                    <p 
                        className="mt-3 text-sm leading-6 text-[#647b91]"
                        data-aos="fade-up"
                        >
                            Perhatikan jadwal dan kelengkapan wadah agar proses pengambilan dan pengembalian berjalan lancar.
                        </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2 overflow-hidden">
                    <article 
                        className="flex items-start gap-4 rounded-lg border border-[#cfdfed] bg-white p-5 sm:p-6"
                        data-aos="fade-up-right"
                    >
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#eaf4fc] text-[#07518c]"><Clock3 size={21} /></span>
                        <div>
                            <h3 className="font-bold text-[#203b54]">Batas pengambilan</h3>
                            <p className="mt-1 text-sm leading-6 text-[#647b91]">Konfirmasi pengambilan MBG paling lambat pukul <strong className="font-bold text-[#173957]">13.00 WIB</strong>.</p>
                        </div>
                    </article>
                    <article 
                        className="flex items-start gap-4 rounded-lg border border-[#cfdfed] bg-white p-5 sm:p-6"
                        data-aos="fade-up-left"
                    >
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#eaf4fc] text-[#07518c]"><MapPin size={21} /></span>
                        <div>
                            <h3 className="font-bold text-[#203b54]">Lokasi pengembalian</h3>
                            <p className="mt-1 text-sm leading-6 text-[#647b91]">Kembalikan ompreng ke <strong className="font-bold text-[#173957]">Serambi Aula Lama</strong> dalam kondisi lengkap.</p>
                        </div>
                    </article>
                </div>
                <p 
                    className="mt-4 flex items-center gap-2 text-xs leading-5 text-[#647b91]"
                    data-aos="fade-right"
                >
                    <PackageCheck className="shrink-0 text-[#0876ba]" size={16} />
                    Pastikan wadah dan tutup sudah lengkap sebelum mengirim konfirmasi pengembalian.
                </p>
            </div>
        </section>
    )
}