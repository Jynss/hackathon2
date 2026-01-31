import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './style.css'

export default function Login() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className="login-page">
      <div className="wrapper">
        <form id="loginForm" onSubmit={handleSubmit}>
          <h1>Login</h1>

          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="bx bxs-lock-alt"></i>
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox" /> Remember Me</label>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button type="submit" className="btn">Login</button>

          <div className="register-link">
            <p>Don't have an account? <Link to="/signup">Register here</Link></p>
          </div>
        </form>
      </div>

      <div className="bottom-container">
        <Link className="footer-link" to="/">Home</Link>
        <p className="copy-right">© 2026 Capital Styles</p>
      </div>
    </div>
  )
}
