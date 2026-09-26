import { useState, useEffect } from "react"
import { supabase } from "../supabase"

function Dashboard() {
    const [users, setUsers] = useState([])
    console.log(users)

    useEffect(() => {
        fetchUsers()
    }, [])
    
    async function fetchUsers() {
        const {data, error} = await supabase.from('users').select('*')

        console.log(error)
    
        if (data) setUsers(data)
    }

    return (
        <table className='w-full mt-5'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Classroom</th>
                </tr>
            </thead>
            
            <tbody>
                {users.map((user) =>
                <tr key={user.id} className='text-center'>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.amount}</td>
                    <td>{user.classroom}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )

}

export default Dashboard