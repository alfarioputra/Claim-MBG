import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RoleRedirect from './components/RoleRedirect'
import ProtectedRoute from './components/ProtectedRoute'

import Form from './pages/Form'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import LandingPage from './pages/LandingPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/redirect' element={<RoleRedirect />} />
                <Route path='/login' element={<Login />} />
                <Route 
                    path='/form' 
                    element={
                        <ProtectedRoute>
                            <Form />
                        </ProtectedRoute>
                    } 
                />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path='*'
                    element={
                        <Suspense>
                            <NotFoundPage />
                        </Suspense>
                    }
                />
            </Routes>
        </Router>
    )
}

export default App
