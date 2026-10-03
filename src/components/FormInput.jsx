import { useEffect, useState } from "react"
import { supabase } from "../supabase"
import { ChevronDown, ChevronUp } from "lucide-react"
import SubmitButton from "./SubmitButton"

export default function FormInput() {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [classroom, setClassroom] = useState('')
    const [classList, setClassList] = useState([])
    const [error, setError] = useState({})

    useEffect(() => {
        getUserClass()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        let tempError = {}

        if (!name.trim()) tempError.name = 'Nama wajib diisi'

        if (!amount.trim()) {
            tempError.amount = 'Jumlah harus diisi'
        } else if (amount <= 0) {
            tempError.amount = 'Jumlah harus lebih dari 0'
        }

        if (!classroom) tempError.classroom = 'Kelas harus diisi'

        setError(tempError)

        if (Object.keys(tempError).length > 0) return

        await createData()
        
        setName('')
        setAmount('')
        setClassroom('')
    }
    
    async function createData() {
        const { error: dbError } = await supabase
            .from('data')
            .insert({ name: name, amount: amount, classroom: classroom })

        dbError ? alert('data gagal dikirm') : alert('data berhasil dikirim')
    }

    async function getUserClass() {
        const { data } = await supabase.from('classes').select('*')

        setClassList(data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="flex flex-col gap-4 md:gap-6">
                    <div className="flex flex-col gap-2 text-sm">
                        <label className="text-[#334155] text-xs sm:text-sm">Nama Perwakilan Siswa / Piket <span className="font-blod text-[#EF4444]">*</span></label>
                        <input 
                            type="text" 
                            className="text-sm p-2.5 rounded-md border border-gray-700 hover:border-cyan-500 focus:outline-0 focus:border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 sm:text-base"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Masukkan nama perwakilan"  
                        />
                        { error.name && (
                            <div className="text-red-500 text-xs sm:text-sm">
                                <p>{error.name}</p>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row justify-between md:gap-6">
                        <div className="flex flex-col gap-2 text-sm sm:w-[60%]">
                            <label className="text-[#334155] text-xs sm:text-sm">Jumlah Yang Diambil (Porsi) <span className="font-blod text-[#EF4444]">*</span></label>
                            <input 
                                type="number" 
                                className="text-sm p-2.5 rounded-md border border-gray-700 hover:border-cyan-500 focus:outline-0 focus:border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 sm:text-base"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="Masukkan Jumlah" 
                            />
                            { error.amount && (
                                <div className="text-red-500 text-xs sm:text-sm">
                                    <p>{error.amount}</p>
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col gap-2 text-sm sm:w-[40%]">
                            <label className="text-[#334155] text-xs sm:text-sm">Pilih Kelas</label>
                            <select
                                className="text-sm p-2.5 rounded-md border border-gray-700 hover:border-cyan-500 focus:outline-0 focus:border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 sm:text-base"
                                value={classroom} 
                                onChange={(e) => setClassroom(e.target.value)}
                            >
                                <option value='' disabled>Pilih Kelas</option>
                                {classList.map((item) => (
                                    <option key={item.id} value={item.value}>{item.value}</option>
                                ))}
                            </select>
                            { error.classroom && (
                                <div className="text-red-500 text-xs sm:text-sm">
                                    <p>{error.classroom}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <SubmitButton />
                </div>
            </div>
        </form>
    )
}