import React from "react";
import {
  Box,
  Flex,
  Heading,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { Input } from "@chakra-ui/react";
import { Navbar } from "app/layout/Food/Navbar";
import Link from "next/link";

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
        >
          Menu{" "}
        </Heading>
        <Box marginLeft="-30px" marginTop="50px">
          <InputGroup>
            <InputLeftElement mr="30px" pointerEvents="none">
              <BsSearch size="30px" color="#D9D9D9" />
            </InputLeftElement>
            <Input
              borderTop="2px"
              borderLeft="1px"
              borderRight="1px"
              borderWidth="3px"
              borderColor="#D9D9D9"
              width="300px"
              height="40px"
              type="search"
              placeholder="&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;search"
            />
          </InputGroup>
        </Box>
        <Flex
          marginTop="10px"
          justifyContent="center"
          alignItems="center"
          width="45px"
          height="45px"
          boxShadow="dark-lg"
          rounded="md"
          borderColor="#00000040"
          borderWidth="2px"
          borderRadius="10px"
        >
          <Link href="/cart">
            <MdOutlineProductionQuantityLimits size="25px" />
          </Link>
        </Flex>
      </Flex>
      <Navbar />

      {children}
    </div>
  );
};

export default DashLayout;
