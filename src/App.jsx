import React from 'react'
import Form from './pages/Form'
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
        <div className='h-full bg-[#F1F7FF] px-4 py-6'>
            <Routes>
                <Route path='/' element={<Form />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
        </div>
    </Router>
  )
}

export default App
