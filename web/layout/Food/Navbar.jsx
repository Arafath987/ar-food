import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <Flex
      minW="400px"
      justifyContent="space-between"
      borderTopLeftRadius="60px"
      bgColor="#31A5A5"
      height="20vh"
      padding="20px"
    >
      <Box>
        <Heading
          marginLeft="20px"
          fontSize=""
          fontWeight="normel"
          color="#000000"
        >
          <Link href="/">All</Link>
        </Heading>
      </Box>

      <Heading
        marginLeft="3%"
        width="20%"
        fontSize=""
        fontWeight="light"
        color="#000000"
      >
        <Link href="/catagory/breakfast">Breakfast</Link>
      </Heading>
      <Heading
        marginLeft="1%"
        width="15%"
        lineHeight="20px"
        fontSize=""
        fontWeight="light"
        color="#000000"
      >
        <Link href="/catagory/lunch">Lunch</Link>
      </Heading>
      <Heading
        marginLeft="1%"
        width="15%"
        lineHeight="20px"
        fontSize=""
        fontWeight="normel"
        color="#000000"
      >
        <Link href="/catagory/dinner">Dinner</Link>
      </Heading>
      <Heading
        marginLeft="20px"
        width="15%"
        lineHeight="20px"
        fontSize=""
        fontWeight="normel"
        color="#000000"
      >
        <Link href="/catagory/desert">Desert</Link>
      </Heading>
    </Flex>
  );
};
