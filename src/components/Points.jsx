import React from "react";
import "./style.css";

function Points() {
  return (
    <div className="points-wrapper">
      <header>
        {/* Navbar can go here if needed */}
      </header>

      <main className="points-content">
        <h1 className="points-amount">1.5k</h1>
        <h1 className="points-title">Community Points</h1>

        <p>For the people, by the people</p>

        {/* Search Bar */}
        {/* <div className="search-bar">
          <input
            type="text"
            placeholder="Search businesses, talents, or investors..."
          />
          <button>Search</button>
        </div> */}
      </main>

    </div>
  );
}

export default Points;

