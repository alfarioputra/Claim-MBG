import { useState, useEffect } from "react"
import { supabase } from "../supabase"
import { Search, Check, Clock, CheckCheck, CircleAlert, LayoutDashboard } from "lucide-react";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";

function Dashboard() {
    const [data, setData] = useState([])
    const [selectedClass, setSelectedClass] = useState("Semua")
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        const { data } = await supabase.from('data').select('*')
    
        if (data) setData(data)
    }

    let filteredData = data

    if (selectedClass !== "Semua") {
        filteredData = filteredData
            .filter((item) => item.classroom.split("-")[0] === selectedClass)
    }

    filteredData = filteredData
        .filter((item) => 
            item.classroom.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )

    const renderStatusBadge = (status) => {
        switch (status) {
            case 'Belum Diambil':
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                        <Clock size={14} />
                        Belum Diambil
                    </span>
                )
            case 'Sudah Diambil':
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-200">
                        <Check size={14} />
                        Sudah Diambil
                    </span>
                )
            case 'Sudah Dikembalikan':
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200">
                        <CheckCheck size={14} />
                        Wadah Lengkap
                    </span>
                )
            default:
                return null
        }
    }

    return (
        <div className="min-h-screen bg-[#F1F7FF] px-4 py-6">
            {/* desktop view */}
            <div className="hidden md:flex flex-col gap-5 max-w-5xl mx-auto bg-white p-8 rounded-3xl shadow-md">
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-5">
                        <div className="w-10 h-10 flex items-center justify-center bg-[#E3EFFB] rounded-xl">
                            <LayoutDashboard size={20} color="#0066B2" />
                        </div>
                        <div>
                            <p className="font-bold text-[#2684df]">Dashboard</p>
                            <h1 className="font-extrabold text-2xl">Monitoring Distribusi MBG</h1>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <LogoutButton />
                    </div>
                </div>
                <div className="w-full flex items-center justify-between">
                    <div className="flex gap-4">
                            {["Semua", "X", "XI", "XII"].map((grade) => (
                                <button
                                    key={grade}
                                    type="button"
                                    onClick={() => setSelectedClass(grade)}
                                    aria-pressed={selectedClass === grade}
                                    className={`px-4 py-1.5 rounded-full cursor-pointer text-xs ${selectedClass === grade ? "bg-[#0A3F7D] text-white shadow-sm" : "bg-[#F1F5F9] shadow-sm text-[#475569]"}`}
                                >
                                    {grade === "Semua" ? "Semua" : `Kelas ${grade}`}
                                </button>
                            ))}
                    </div>
                    <div className="flex gap-2">
                        <div className="flex gap-2 w-65 items-center py-2 px-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-full shadow-sm">
                            <Search size={16} className="shrink-0 text-[#8a9ab0]" />
                            <input 
                                type="text" 
                                    value={searchTerm}
                                    onChange={(event) => setSearchTerm(event.target.value)}
                                className="w-full text-xs focus:outline-0"
                                placeholder="Cari nama kelas atau siswa..."  
                            />
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden border border-[#E2E8F0] rounded-xl">
                    <table className='w-full border-collapse text-left'>
                        <thead>
                            <tr className="h-12 bg-[#F8FAFCCC] border-b border-[#E2E8F0] text-xs text-[#64748B] text-left">
                                <th className="px-3 text-center">No.</th>
                                <th className="px-3">Kelas</th>
                                <th className="px-3">Nama Perwakilan</th>
                                <th className="px-3 font-bold text-center">Alokasi Porsi</th>
                                <th className="px-3 font-bold text-center">Waktu Log</th>
                                <th className="px-3 font-bold text-center">Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            { filteredData.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="h-20 text-center text-sm text-[#64748B]">
                                        Tidak ada data yang cocok dengan filter.
                                    </td>
                                </tr>
                            ) : filteredData.map((item) => (
                                <tr className="h-16 text-sm border-b border-[#e7edf3]" key={item.id}>
                                    <td className="px-3 font-medium text-center">{item.id}.</td>
                                    <td className="px-3 font-medium">{item.classroom}</td>
                                    <td className="px-3 font-medium text-[#1E293B]">{item.name}</td>
                                    <td className="px-3 font-bold text-center">{item.amount} <span className="font-normal text-[#64748B]">Porsi</span></td>
                                    <td className="px-3 font-normal text-center text-[#64748B]">{item.logtime}</td>
                                    <td className="px-3 text-center">{renderStatusBadge(item.status)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


            {/* mobile card view */}
            <div className="w-full flex flex-col gap-6 md:hidden">
                <div className="flex items-center justify-between mb-5 py-2 px-3 bg-[#F8FAFC] shadow-sm rounded-2xl">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-[#E3EFFB] rounded-xl">
                            <LayoutDashboard size={20} color="#0066B2" />
                        </div>
                        <div>
                            <p className="font-bold text-xs text-[#2684df]">Dashboard</p>
                            <h1 className="font-semibold text-sm">Monitoring Distribusi MBG</h1>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <LogoutButton />
                    </div>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row justify-between ">
                    <div className="flex gap-2">
                            {["Semua", "X", "XI", "XII"].map((grade) => (
                                <button
                                    key={grade}
                                    type="button"
                                    onClick={() => setSelectedClass(grade)}
                                    aria-pressed={selectedClass === grade}
                                    className={`px-3 py-1.5 rounded-full cursor-pointer text-xs ${selectedClass === grade ? "bg-[#0A3F7D] text-white shadow-sm" : "bg-[#F1F5F9] border border-[#E2E8F0] shadow-sm text-[#475569]"}`}
                                >
                                    {grade === "Semua" ? "Semua" : `Kelas ${grade}`}
                                </button>
                            ))}
                    </div>
                    <div className="flex gap-2">
                        <div className="w-full flex gap-2 sm:w-65 items-center py-2 px-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-full shadow-sm">
                            <Search size={16} className="shrink-0 text-[#8a9ab0]" />
                            <input 
                                type="text" 
                                    value={searchTerm}
                                    onChange={(event) => setSearchTerm(event.target.value)}
                                className="w-full text-xs focus:outline-0"
                                placeholder="Cari nama kelas atau siswa..."  
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    { filteredData.length === 0 ? (
                        <p className="col-span-full rounded-xl bg-white p-6 text-center text-sm text-[#64748B]">
                            Tidak ada data yang cocok dengan filter.
                        </p>
                    ) : filteredData.map((item) => (
                        <div className="flex flex-col border border-slate-200 rounded-xl p-4 gap-3 bg-white shadow-sm" key={item.id}>
                            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                                <div className="p-2 flex items-center justify-center rounded-lg bg-[#E5EEFF] font-bold text-[#00236F]">
                                    <p className="font-medium">{item.classroom}</p>
                                </div>
                                <p>
                                    {renderStatusBadge(item.status)}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-xs">
                                <div className="flex flex-col gap-1.5">
                                    <p className="text-[#64748B] block">Siswa Piket</p>
                                    <p className="font-medium text-slate-700">{item.name}</p>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <p className="text-[#64748B] block">Alokasi Porsi</p>
                                    <p className="font-bold text-slate-800">{item.amount} Porsi</p>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <p className="text-[#64748B] block">Waktu Log</p>
                                    <p className="text-slate-500">{item.logtime}</p>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <p className="text-[#64748B] block">Status</p>
                                    <p className="font-medium text-slate-700">{item.status}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default Dashboard