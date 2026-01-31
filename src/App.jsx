import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import ForgotPassword from './components/ForgotPassword'
import Home from './components/Home'
import Profile from './components/Profile'
import Messages from './components/Messages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </Router>
  )
}

export default App
