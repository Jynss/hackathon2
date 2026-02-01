import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function NextStep() {
  const navigate = useNavigate(); // inside the component

  return (
    <div className="login-page">
      <div className="form-card">
        <h1>Next Step</h1>
        <p
          style={{
            textAlign: "center",
            color: "var(--muted-text)",
            marginBottom: "12px",
          }}
        >
          Where would you like to go next?
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexDirection: "column",
          }}
        >
          <button className="btn" onClick={() => navigate("/")}>
            Go to Home
          </button>
          <button className="btn" onClick={() => navigate("/businessSignUp")}>
            Register Business
          </button>
        </div>

        <div className="bottom-container">
          <p className="copy-right">© 2026 Capital Styles</p>
        </div>
      </div>
    </div>
  );
}
