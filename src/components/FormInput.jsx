import { useEffect, useState } from "react"
import { supabase } from "../supabase"

export default function FormInput() {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [classroom, setClassroom] = useState('')
    const [error, setError] = useState({})

    const nameHandleChange = (e) => {
        setName(e.target.value)
    }

    const amountHandleChange = (e) => {
        setAmount(e.target.value)
    }

    const classroomHandleChange = (e) => {
        setClassroom(e.target.value)
    }

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
            .from('users')
            .insert({ name: name, amount: amount, classroom: classroom })

        dbError ? alert('data gagal dikirm') : alert('data berhasil dikirim')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="bg-white p-5 rounded-md shadow-md">
                <div className="flex flex-col gap-2 md:gap-4">
                    <div className="flex flex-col gap-2">
                        <label>Nama Perwakilan</label>
                        <input 
                            type="text" 
                            className="p-2 rounded-md border border-gray-700 hover:border-cyan-500 focus:outline-0 focus:border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50" 
                            value={name}
                            onChange={nameHandleChange}
                            placeholder="Nama Lengkap"  
                        />
                        { error.name && (
                            <div className="text-red-500">
                                <p>{error.name}</p>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row justify-between md:gap-4">
                        <div className="flex flex-col gap-2 md:w-[60%]">
                            <label>Jumlah</label>
                            <input 
                                type="number" 
                                className="p-2 rounded-md border border-gray-700 hover:border-cyan-500 focus:outline-0 focus:border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50"
                                value={amount}
                                onChange={amountHandleChange}
                                placeholder="Jumlah" 
                            />
                            { error.amount && (
                                <div className="text-red-500">
                                    <p>{error.amount}</p>
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col gap-2 md:w-[40%]">
                            <label>Kelas</label>
                            <input 
                                type="text" 
                                className="p-2 rounded-md border border-gray-700 hover:border-cyan-500 focus:outline-0 focus:border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50" 
                                value={classroom}
                                onChange={classroomHandleChange}
                                placeholder="Kelas" 
                            />
                            { error.classroom && (
                                <div className="text-red-500">
                                    <p>{error.classroom}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-end mt-5">
                        <button 
                            type="submit" 
                            className="py-2 px-4 rounded-md bg-blue-500 text-white cursor-pointer"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}