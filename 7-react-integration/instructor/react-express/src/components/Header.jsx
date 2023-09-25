import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header
      style={{
        height: "80px",
        width: "100vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        borderBottom: "1px solid gray",
      }}
    >
      <h6 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        App
      </h6>
      <div>
        <button onClick={() => navigate("/register")}>Register</button>
        <button
          onClick={() => navigate("/login")}
          className="btn-secondary"
          style={{ marginLeft: "0.5rem" }}
        >
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
