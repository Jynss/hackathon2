import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import JumpIn from './components/JumpIn'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import ForgotPassword from './components/ForgotPassword'
import Profile from './components/Profile'
import Messages from './components/Messages'
import BusinessSignUp from './components/BusinessSignUp'
import BusinessOrHome from './components/BusinessorHome'
//import Bookings from './components/Bookings'


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<JumpIn/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/businessSignUp" element={<BusinessSignUp/>} />
        <Route path="/business-or-home" element={<BusinessOrHome/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/messages" element={<Messages/>} />
       {/* <Route path="/bookings" element={<Bookings/>} /> */} 
      </Routes>
    </Router>
  )
}

export default App
