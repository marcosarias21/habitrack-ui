import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login'

const App = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Login />} />
    </Routes>
  )
}

export default App
