import React from "react";
import Header from "../components/Header";
import Page from "../components/Page";
import Container from "../components/Container";

const Home = () => {
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
        <h2>Hello world!</h2>
      </Container>
    </Page>
  );
};

export default Home;
