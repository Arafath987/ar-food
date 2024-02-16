"use client"
import React from "react";
import { Box } from "@chakra-ui/react"

const url = "https://digital-photography-school.com/wp-content/uploads/2024/01/food-photography-styling-107.jpg"



const DashLayout = ({ children }) => {
  return (
    <Box bg="red" minH="100vh" backgroundImage={url}>
      {children}
    </Box>
  );
};

export default DashLayout;
