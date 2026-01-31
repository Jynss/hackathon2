import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import ForgotPassword from './components/ForgotPassword'
import Profile from './components/Profile'
import Messages from './components/Messages'
import BusinessSignUp from './components/BusinessSignUp'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/businessSignUp" element={<BusinessSignUp/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/messages" element={<Messages/>} />
      </Routes>
    </Router>
  )
}

export default App
