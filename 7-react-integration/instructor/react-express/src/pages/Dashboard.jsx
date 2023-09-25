import React from "react";
import Page from "../components/Page";
import Header from "../components/Header";
import Container from "../components/Container";

const Dashboard = () => {
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
        <h2>Hello admin!</h2>
      </Container>
    </Page>
  );
};

export default Dashboard;
