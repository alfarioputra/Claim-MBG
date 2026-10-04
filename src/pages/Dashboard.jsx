import { useState, useEffect } from "react"
import { supabase } from "../supabase"
import { Bell } from "lucide-react"

function Dashboard() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])
    
    async function fetchData() {
        const { data } = await supabase.from('data').select('*')
    
        if (data) setData(data)
    }

    return (
        <>
        {/* desktop view */}
        <div className="hidden md:block max-w-5xl mx-auto bg-white p-8 rounded-3xl shadow-md">
            <div className="overflow-hidden border border-[#E2E8F0] rounded-2xl">
                <table className='w-full border-collapse text-left'>
                    <thead>
                        <tr className="bg-[#F8FAFCCC] border-b border-[#E2E8F0] text-xs text-[#64748B] text-left">
                            <th className="p-4">No.</th>
                            <th className="p-4">Kelas</th>
                            <th className="p-4">Nama Perwakilan</th>
                            <th className="p-4 font-bold text-center">Alokasi Porsi</th>
                            <th className="p-4 font-bold text-center">Waktu Log</th>
                            <th className="p-4 font-bold text-center">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item) =>
                        <tr className="text-sm" key={item.id}>
                            <td className="p-4 font-medium">{item.id}.</td>
                            <td className="p-4 font-medium">{item.classroom}</td>
                            <td className="p-4 font-medium text-[#1E293B]">{item.name}</td>
                                <td className="p-4 font-bold text-center">{item.amount} <span className="font-normal text-[#64748B]">Porsi</span></td>
                            <td className="p-4 font-normal text-center text-[#64748B]">{item.logtime}</td>
                            <td className="p-4 text-center">{item.status}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>


        {/* mobile card view */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:hidden">
            {data.map((item) => (
                <div className="flex flex-col border border-slate-200 rounded-xl p-4 gap-3 bg-white shadow-sm" key={item.id}>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <div className="flex items-center gap-2 font-bold text-slate-800">
                            <input type="checkbox" />
                        </div>
                        <p className="px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-600 border border-amber-200">
                            {item.status}
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-xs">
                        <div className="flex flex-col gap-1.5">
                            <p className="text-[#64748B] block">Kelas</p>
                            <p className="font-medium text-slate-700">{item.classroom}</p>
                        </div>
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
                    </div>
                    
                    <div className="pt-2 border-t border-slate-100">
                        <button className="w-full py-2 border border-amber-300 text-amber-600 rounded-xl text-xs font-semibold hover:bg-amber-50 transition-colors flex items-center justify-center gap-1">
                            <Bell size={16} />
                            Ingatkan
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </>
    )

}

export default Dashboard