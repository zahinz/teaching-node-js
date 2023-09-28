import React from "react";
import Page from "../components/Page";
import Header from "../components/Header";
import Container from "../components/Container";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const cookies = new Cookies(null, { path: "/" });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // get all values from form
    const email = e.target[0].value;
    const password = e.target[1].value;
    const reqBody = { email: email, password: password };

    // send request to server
    try {
      // success scope
      const res = await axios.post("http://localhost:8080/login", reqBody);
      console.log(res);
      alert("Login successful!");
      // store jwt token into cookie
      cookies.set("token", res.data.token);
      // redirect to admin page
      navigate("/admin");
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
        <form style={formContainer} onSubmit={(e) => handleSubmit(e)}>
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
