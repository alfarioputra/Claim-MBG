import { useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ClipboardList, Clock3, PackageCheck } from "lucide-react"
import AOS from "aos"
import 'aos/dist/aos.css'

export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true
        })
    }, [])

    return (
        <section 
            id="pencatatan" 
            className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 scroll-mt-15 px-5 py-6 md:flex-row md:py-16"
        >
            <div className="max-w-2xl">
                <div 
                    className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#bfdbf3] bg-white/80 px-3.5 py-2 text-xs font-bold text-[#07518c] shadow-sm"
                    data-aos="fade-up"
                >
                    <span className="size-2 rounded-full bg-[#159bd1]" />
                    PORTAL DISTRIBUSI · MAN 1 KOTA KEDIRI
                </div>
                <h1 
                    className="max-w-2xl text-4xl font-extrabold leading-[1.08] text-[#10243d] sm:text-5xl lg:text-[3.65rem]"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Pengambilan tercatat.
                    <br className="hidden sm:block" />
                    {" "}Pengembalian terpantau.
                </h1>
                <p 
                    className="mt-6 max-w-xl text-base leading-7 text-[#4d647a] sm:text-lg sm:leading-8"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    Satu portal untuk mencatat porsi per kelas, mengonfirmasi pengambilan, dan memastikan ompreng kembali lengkap.
                </p>
                <div 
                    className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <Link
                        to="/login"
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#086cb0] px-6 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#07518c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#086cb0]"
                    >
                        Masuk untuk mencatat <ArrowRight size={17} />
                    </Link>
                </div>
                <p 
                    className="mt-6 text-sm text-[#647b91]"
                    data-aos="fade-up"
                    data-aos-delay="800"
                >
                    Untuk siswa, perwakilan kelas, dan petugas distribusi.
                </p>
            </div>

            <section 
                className="overflow-hidden rounded-xl border border-[#d5e2ef] bg-white shadow-md"
                data-aos="fade-left"
                data-aos-duration="3000"    
            >
                <div className="flex items-center justify-between gap-4 bg-[#064b83] px-5 py-4 text-white sm:px-6">
                    <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#b9dcf6]">Ringkasan status</p>
                        <h2 id="status-heading" className="mt-1 text-lg font-bold">Perjalanan wadah MBG</h2>
                    </div>
                    <PackageCheck className="shrink-0 text-[#b9e2ff]" size={25} strokeWidth={1.8} />
                </div>
                <div className="space-y-0 px-5 py-2 sm:px-6">
                    <div className="flex items-start gap-4 border-b border-[#e6edf4] py-4">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#fff4df] text-[#a56708]"><Clock3 size={18} /></span>
                        <div className="min-w-0 flex-1">
                            <h3 className="text-sm font-bold text-[#203b54]">Belum Diambil</h3>
                            <p className="mt-1 text-xs leading-5 text-[#718397]">Menunggu perwakilan kelas mengambil porsi.</p>
                        </div>
                        <span className="mt-1 size-2 shrink-0 rounded-full bg-[#e4a42c]" />
                    </div>
                    <div className="flex items-start gap-4 border-b border-[#e6edf4] py-4">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#e9f4ff] text-[#0876ba]"><ClipboardList size={18} /></span>
                        <div className="min-w-0 flex-1">
                            <h3 className="text-sm font-bold text-[#203b54]">Sudah Diambil</h3>
                            <p className="mt-1 text-xs leading-5 text-[#718397]">Waktu pengambilan tercatat di sistem.</p>
                        </div>
                        <span className="mt-1 size-2 shrink-0 rounded-full bg-[#2587c7]" />
                    </div>
                    <div className="flex items-start gap-4 py-4">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#e8f6ed] text-[#28804a]"><PackageCheck size={18} /></span>
                        <div className="min-w-0 flex-1">
                            <h3 className="text-sm font-bold text-[#203b54]">Sudah Dikembalikan</h3>
                            <p className="mt-1 text-xs leading-5 text-[#718397]">Wadah dan tutup sudah dikonfirmasi lengkap.</p>
                        </div>
                        <span className="mt-1 size-2 shrink-0 rounded-full bg-[#42a566]" />
                    </div>
                </div>
                <div className="border-t border-[#e6edf4] bg-[#f8fbfe] px-5 py-3.5 text-xs text-[#718397] sm:px-6">
                    Status mengikuti pencatatan yang dikirim melalui portal.
                </div>
            </section>
        </section>
    )
}