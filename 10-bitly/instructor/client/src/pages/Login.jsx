import React from "react";
import Page from "../components/Page";
import Header from "../components/Header";
import Container from "../components/Container";
import { apiLogin } from "../utils/api/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    try {
      const response = await apiLogin(data);
      alert(response.data.message);
      navigate("/admin");
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  return (
    <Page>
      <Header />
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form style={formContainer} onSubmit={handleSubmit}>
          <h5>Login</h5>
          <div style={inputContainer}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div style={inputContainer}>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" />
          </div>
          <button type="submit">Login</button>
          <button type="button" className="btn-secondary">
            Register as new user
          </button>
        </form>
      </Container>
    </Page>
  );
};

const formContainer = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "400px",
  gap: "1rem",
};

const inputContainer = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "400px",
  gap: "0.5rem",
};

export default Login;
