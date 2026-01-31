import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <a href="#" className="nav-logo">
          <h2 className="logo-text">UpStyled</h2>
        </a>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>

          <li className="nav-item">
            <Link to="/businessSignUp" className="nav-link">Register Business</Link>
          </li>

          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>

          <li className="nav-item">
            <Link to="/profile" className="nav-link">Profile</Link>
          </li>

          <li className="nav-item">
            <Link to="/messages" className="nav-link">Messages</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
