import React from "react";
import Page from "../components/Page";
import Header from "../components/Header";
import Container from "../components/Container";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // get all values from form
    const email = e.target[0].value;
    const username = e.target[1].value;
    const password = e.target[2].value;
    const reqBody = { email: email, username: username, password: password };

    // send request to server
    try {
      // success scope
      const res = await axios.post("http://localhost:8080/register", reqBody);
      console.log(res);
      alert("Registration successful!");
      // redirect to login page
      navigate("/login");
    } catch (error) {
      // error scope
      console.error(error);
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
        <form style={formContainer} onSubmit={(event) => handleSubmit(event)}>
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
