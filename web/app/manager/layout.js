import React from "react";

const DashLayout = ({ children }) => {
  return (
    <div>
      <style>{"body { background-color: gray; }"}</style>
      {children}
    </div>
  );
};

export default DashLayout;
