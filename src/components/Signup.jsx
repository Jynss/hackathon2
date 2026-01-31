import { useState } from 'react';
import './style.css';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    address: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt:', formData);
    // Redirect to home page
    window.location.href = '/';
  };

  return (
    <body className="login-page">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>

          <div className="input-box">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <i className='bx bx-font-family'></i>
          </div>

          <div className="input-box">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <i className='bx bx-font-family'></i>
          </div>

          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <i className='bx bxs-envelope'></i>
          </div>

          <div className="input-box">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <i className='bx bxs-user'></i>
          </div>

          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <i className='bx bxs-lock-alt'></i>
          </div>

          <div className="input-box">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <i className='bx bxs-user'></i>
          </div>

          <div className="remember-forgot">
            <label>
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              /> Remember Me
            </label>
          </div>

          <button type="submit" className="btn">Sign Up</button>
        </form>
      </div>

      <div className="bottom-container">
        <a className="footer-link" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a className="footer-link" href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a className="footer-link" href="https://www.github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="footer-link" href="/">Home</a>
        <p className="copy-right">© 2026 Capital Styles</p>
      </div>
    </body>
  );
}

export default Signup;
