import React from "react";
import Page from "../components/Page";
import Header from "../components/Header";
import Container from "../components/Container";

const Login = () => {
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
        <div style={formContainer}>
          <h5>Login</h5>
          <div style={inputContainer}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div style={inputContainer}>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" />
          </div>
          <button type="button">Login</button>
          <button type="button" className="btn-secondary">
            Register as new user
          </button>
        </div>
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
