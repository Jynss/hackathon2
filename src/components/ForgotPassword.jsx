import { useState } from 'react';
import './style.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Password reset email:', email);
    // Redirect to home or login page
    window.location.href = '/';
  };

  return (
    <body className="login-page">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Forgot Password?</h1>

          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <i className='bx bxs-envelope'></i>
          </div>

          <button type="submit" className="btn">Find Password</button>
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

export default ForgotPassword;
