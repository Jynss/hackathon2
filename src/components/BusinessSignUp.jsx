import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './style.css'

export default function BusinessSignUp() {
  const navigate = useNavigate()
  const [selectedType, setSelectedType] = useState('')

  const businessTypes = [
    'Hair Salon',
    'Barbershop',
    'Nail Salon',
    'Spa & Wellness',
    'Makeup Artist',
    'Skincare',
    'Other'
  ]

  const handleTypeChange = (e) => setSelectedType(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className="login-page">
      <div className="wrapper">
        <form id="businessSignupForm" onSubmit={handleSubmit}>
          <h1>Business Sign Up</h1>

          <div className="input-box">
            <input type="text" placeholder="Business Name" required />
            <i className='bx bx-font-family'></i>
          </div>

          <div className="input-box">
            <select value={selectedType} onChange={handleTypeChange} required>
              <option value="">Select Business Type</option>
              {businessTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <i className='bx bx-chevron-down'></i>
          </div>

          <div className="input-box">
            <input type="text" placeholder="Business Address" required />
            <i className='bx bxs-user'></i>
          </div>

          <div className="input-box">
            <input type="text" placeholder="Phone Number" required />
            <i className='bx bxs-phone'></i>
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
