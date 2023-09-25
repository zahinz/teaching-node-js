import React from "react";

const Page = ({ children }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      {children}
    </div>
  );
};

export default Page;
