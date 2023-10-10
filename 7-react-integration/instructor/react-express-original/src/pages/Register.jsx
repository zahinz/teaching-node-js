import React from "react";
import Page from "../components/Page";
import Header from "../components/Header";
import Container from "../components/Container";

const Register = () => {
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
        <form style={formContainer}>
          <h5>Register</h5>
          {/* email */}
          <div style={inputContainer}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          {/* username */}
          <div style={inputContainer}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>
          {/* password */}
          <div style={inputContainer}>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" />
          </div>
          <button type="submit">Register</button>
          <button type="button" className="btn-secondary">
            Login as existing user
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

export default Register;
