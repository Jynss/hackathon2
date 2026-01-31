import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './style.css'

export default function Signup() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/business-or-home')
  }

  return (
    <div className="login-page">
      <div className="wrapper">
        <form id="signupForm" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>

          <div className="input-box">
            <input type="text" placeholder="First Name" required />
            <i className='bx bx-font-family'></i>
          </div>

          <div className="input-box">
            <input type="text" placeholder="Last Name" required />
            <i className='bx bx-font-family'></i>
          </div>

          <div className="input-box">
            <input type="text" placeholder="Email" required />
            <i className='bx bxs-envelope'></i>
          </div>

          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className='bx bxs-user'></i>
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className='bx bxs-lock-alt'></i>
          </div>

          <div className="input-box">
            <input type="text" placeholder="Address" required />
            <i className='bx bxs-user'></i>
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox" /> Remember Me</label>
          </div>

          <button type="submit" className="btn">Sign Up</button>
        </form>
      </div>

      <div className="bottom-container">

        <Link className="footer-link" to="/">Home</Link>
        <p className="copy-right">© 2026 Capital Styles</p>
      </div>
    </div>
  )
}
