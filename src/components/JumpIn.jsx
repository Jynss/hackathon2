import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function JumpIn() {
  return (
    <div className="welcome-page">
      <main className="welcome-content">
        <h1>Welcome to Capital Connect</h1>
        <p>Capital Talents, Capital Demand</p>

        <div className="welcome-buttons">
          <Link to="/login" className="btn-primary">Log In</Link>
          <Link to="/signup" className="btn-secondary">Sign Up</Link>
        </div>
      </main>
    </div>
  );
}

export default JumpIn;
