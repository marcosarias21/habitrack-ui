import { Route, Routes, useNavigate } from 'react-router-dom'
import { Login } from './pages/Login'
import { useEffect } from 'react'
import { useAuthStore } from './store/authStore'
import { Dashboard } from './pages/Dashboard'
import './App.css'

const App = () => {
  const navigate = useNavigate()
  const { token } = useAuthStore()

  useEffect(() => {
    token && navigate('/dashboard')
  }, [])

  return (
    <Routes>
      <Route path="/auth" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
