import React from "react";
import {
  Box,
  Flex,
  Heading,

} from "@chakra-ui/react";
import { Navbar } from "../../layout/Food/Navbar";
import { CartIcon } from "../../views/dashboard";
import { Search } from "../../views/common/Search"

const DashLayout = ({ children }) => {
  return (
    <div>
      <Flex
        width="100%"
        height="133px"
        bgColor="white"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Heading
          fontWeight="semibold"
          fontStyle="normal"
          fontSize="20px"
          marginLeft="25px"
          mt={5}
        >
          Menu
        </Heading>
        <Box marginTop="50px">
          <Search />
        </Box>
        <CartIcon />
      </Flex>
      <Navbar />
      {children}
    </div>
  );
};

export default DashLayout;
