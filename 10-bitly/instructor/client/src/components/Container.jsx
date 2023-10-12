import React from "react";

const Container = ({ children, ...rest }) => {
  return (
    <div
      {...rest}
      style={{
        flexGrow: 1,
        ...rest.style,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
