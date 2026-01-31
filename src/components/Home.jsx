import './style.css';

function Home() {
  return (
    <body>
      <header>
        <nav className="navbar">
          <a href="/" className="nav-logo">
            <h2 className="logo-text">Upstyle</h2>
          </a>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/signup" className="nav-link">SignUp</a>
            </li>
            <li className="nav-item">
              <a href="/profile" className="nav-link">Profile</a>
            </li>
            <li className="nav-item">
              <a href="/messages" className="nav-link">Messages</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="home-content">
        <h1>Welcome to Upstyle</h1>
        <p>Discover the latest fashion trends and styles</p>
      </main>
    </body>
  );
}

export default Home;
