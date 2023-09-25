import React from "react";
import Page from "../components/Page";
import Header from "../components/Header";
import Container from "../components/Container";

const Dashboard = ({ userId }) => {
  return (
    <Page>
      <Header />
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Hello admin!</h2>
        <h4>User id : {userId}</h4>
      </Container>
    </Page>
  );
};

export default Dashboard;
