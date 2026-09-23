import React from 'react'
import Form from './pages/Form.jsx'
import { useState, useEffect } from 'react'
import { supabase } from './supabase.js'

function App() {
  const [users, setUsers] = useState([])
  console.log(users)

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    const {data, error} = await supabase.from('users').select('*')
    
    if (data) setUsers(data)
  }

  return (
    <>
      <div className='h-full bg-[#F1F7FF] px-4 py-6'>
        <Form />
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
      </div>
    </>
  )
}

export default App
