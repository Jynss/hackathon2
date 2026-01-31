import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';



export default function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <a href="#" className="nav-logo">
          <h2 className="logo-text">Capital Connect</h2>
          <img src="src/assets/logo_png.png" alt="logo" />
        </a>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/home" className="nav-link">Home</Link>
          </li>

          <li className="nav-item">
            <Link to="/messages" className="nav-link">Messages</Link>
          </li>

          <li className="nav-item">
            <Link to="/profile" className="nav-link">Profile</Link>
          </li>


        </ul>
      </nav>
    </header>
  )
}
