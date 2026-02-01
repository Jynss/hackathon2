import React from 'react'
import "./style.css";

function Home() {
  return (
    <div className="home-wrapper">
      <header>
        {/* Navbar can go here if needed */}
      </header>

      <main className="home-content">
        <h1 className="home-title">Capital Connect</h1>
        <p>Capital Talents, Capital Demand</p>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search businesses, talents, or investors..."
          />
          <button>Search</button>
        </div>
      </main>
    </div>
  );
}

export default Home;
