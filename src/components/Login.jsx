import { useState } from 'react';
import './style.css';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
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
    // Handle login logic here
    console.log('Login attempt:', formData);
    // Redirect to home page
    window.location.href = '/';
  };

  return (
    <body className="login-page">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>

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

          <div className="remember-forgot">
            <label>
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              /> Remember Me
            </label>
            <a href="/forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" className="btn">Login</button>

          <div className="register-link">
            <p>Don't have an account? <a href="/signup">Register here</a></p>
          </div>
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

export default Login;
