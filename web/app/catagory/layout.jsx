"use client"
import React from "react";
import { Box} from "@chakra-ui/react";
import { Navbar } from "../../layout/Food/Navbar";

import {TopBar } from "../../views/common/TopBar"

const DashLayout = ({ children }) => {
  return (
    <Box >
      <TopBar/>
      <Navbar />

      {children}

    </Box>

  );
};

export default DashLayout;
