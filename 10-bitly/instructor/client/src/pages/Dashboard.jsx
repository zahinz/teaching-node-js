import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import Header from "../components/Header";
import Container from "../components/Container";
import { listAllLinks } from "../utils/api/link";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const fetchLinks = async () => {
    try {
      const response = await listAllLinks();
      setData(response.data.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleCopyShortLink = (link) => {
    alert(`${link} Copied to clipboard`);
    navigator.clipboard.writeText(
      `${import.meta.env.VITE_API_BASE_URL}/${link}`
    );
  };

  useEffect(() => {
    fetchLinks();
  }, []);
  return (
    <Page>
      <Header />
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <h5>Clonely Dashboard</h5>
          <button>New link</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Destination</th>
              <th>Shortned link</th>
              <th>Visit count</th>
              <th>Created</th>
              <th>Updated</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* LOOP HERE */}
            {data.map((link, index) => (
              <tr key={index}>
                <td>{link.original_link}</td>
                <td>{`${import.meta.env.VITE_API_BASE_URL}/${
                  link.shortened_link
                }`}</td>
                <td>{link.visit_count}</td>
                <td>{link.createdAt}</td>
                <td>{link.updatedAt}</td>
                <td
                  onClick={() => handleCopyShortLink(link.shortened_link)}
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  Copy
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </Page>
  );
};

export default Dashboard;
