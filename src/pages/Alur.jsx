import { steps } from "../utils/steps"
import { useEffect } from "react"
import AOS from "aos"
import 'aos/dist/aos.css'

export default function Alur() {

    useEffect(() => {
        AOS.init(() => ({
            duration: 2000,
            once: false
        }))
    }, [])

    return (
        <section id="alur" className="scroll-mt-30 border-y border-[#d9e7f3] bg-white px-5 py-14 sm:py-16">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8 max-w-2xl">
                    <p 
                        className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#0876ba]"
                        data-aos="fade-right"
                    >
                            Alur layanan
                        </p>
                    <h2 
                        className="mt-2 text-2xl font-extrabold text-[#10243d] sm:text-3xl"
                        data-aos="fade-left"
                    >
                        Dari data kelas sampai ompreng kembali.
                    </h2>
                </div>

                <div className="grid border-t border-[#d9e3ec] sm:grid-cols-3 sm:divide-x sm:divide-[#d9e3ec]">
                    {steps.map(({ number, icon: Icon, title, description }) => (
                        <article 
                            key={number} 
                            className="grid grid-cols-[42px_1fr] gap-3 border-b border-[#d9e3ec] py-5 sm:border-b-0 sm:px-5 sm:first:pl-0 sm:last:pr-0"
                            data-aos="fade-up"
                        >
                            <span 
                                className="flex size-9 items-center justify-center rounded-lg bg-[#eaf4fc] text-[#07518c]"
                                data-aos="fade-up"
                            >
                                <Icon size={19} strokeWidth={1.9} />
                            </span>
                            <div data-aos="fade-up">
                                <p className="text-[11px] font-bold text-[#8a9bad]">LANGKAH {number}</p>
                                <h3 className="mt-1 text-sm font-bold text-[#203b54]">{title}</h3>
                                <p className="mt-2 text-sm leading-6 text-[#647b91]">{description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}