"use client"
import React from "react";
import { Box } from "@chakra-ui/react"

const url = "https://images.unsplash.com/photo-1707850975372-f0e6c12274e4?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

import { Box } from "@chakra-ui/react"

const DashLayout = ({ children }) => {
  return (
    <Box bg="red" minH="100vh" backgroundImage={url}>
      {children}
    </Box>
  );
};

export default DashLayout;
