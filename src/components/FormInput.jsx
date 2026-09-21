import { useState } from "react"

export default function FormInput() {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [classroom, setClassroom] = useState('')
    
    const nameHandleChange = (e) => {
        setName(e.target.value)
    }

    const amountHandleChange = (e) => {
        setAmount(e.target.value)
    }

    const classroomHandleChange = (e) => {
        setClassroom(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setName(e.target.value = '')
        setAmount(e.target.value = '')
        setClassroom(e.target.value = '')

        console.log(`
        name = ${name}, 
        jumlah = ${amount}, 
        kelas = ${classroom}
        `)   
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="bg-white p-5 rounded-md shadow-md">
                <div className="flex flex-col gap-2 md:gap-4">
                    <div className="flex flex-col gap-2">
                        <label>Nama Perwakilan</label>
                        <input 
                            type="text" 
                            className="p-2 rounded-md border border-gray-700 focus:outline-blue-400" 
                            value={name}
                            onChange={nameHandleChange}
                            placeholder="Nama Lengkap" 
                        />
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row justify-between md:gap-4">
                        <div className="flex flex-col gap-2 md:w-[60%]">
                            <label>Jumlah</label>
                            <input 
                                type="number" 
                                className="p-2 rounded-md border border-gray-700 focus:outline-blue-400"
                                value={amount}
                                onChange={amountHandleChange}
                                placeholder="Jumlah" 
                            />
                        </div>
                        <div className="flex flex-col gap-2 md:w-[40%]">
                            <label>Kelas</label>
                            <input 
                                type="text" 
                                className="p-2 rounded-md border border-gray-700 focus:outline-blue-400" 
                                value={classroom}
                                onChange={classroomHandleChange}
                                placeholder="Kelas" 
                            />
                        </div>
                    </div>
                    <div className="flex justify-end mt-5">
                        <button 
                            type="submit" 
                            className="py-2 px-4 rounded-md bg-blue-500 text-white"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}