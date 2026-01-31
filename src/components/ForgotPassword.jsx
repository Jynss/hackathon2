import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './style.css'

export default function ForgotPassword() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className="login-page">
      <div className="wrapper">
        <form id="forgotForm" onSubmit={handleSubmit}>
          <h1>Forgot Password?</h1>

          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <i className='bx bxs-envelope'></i>
          </div>

          <button type="submit" className="btn">Find Password</button>
        </form>
      </div>

      <div className="bottom-container">
        <a className="footer-link" href="https://www.google.com/" target="_blank" rel="noreferrer">Instagram</a>
        <a className="footer-link" href="https://www.google.com/" target="_blank" rel="noreferrer">Twitter</a>
        <a className="footer-link" href="https://www.google.com/" target="_blank" rel="noreferrer">GitHub</a>
        <Link className="footer-link" to="/">Home</Link>
        <p className="copy-right">© 2026 Capital Styles</p>
      </div>
    </div>
  )
}
