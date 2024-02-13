import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <Flex
      spacebetween="center"
      borderTopLeftRadius="60px"
      bgColor="#31A5A5"
      width="100%"
      height="150px"
      padding="20px"
    >
      <Box>
        <Heading
          marginLeft="20px"
          lineHeight="40px"
          fontSize="25px"
          fontWeight="light"
          color="#000000"
        >
          <Link href="/">All</Link>
        </Heading>
      </Box>

      <Heading
        marginLeft="20px"
        width="260px"
        lineHeight="40px"
        fontSize="2xl"
        fontWeight="light"
        color="#000000"
      >
        <Link href="/catagory/breakfast">Breakfast</Link>
      </Heading>
      <Heading
        marginLeft="20px"
        width="260px"
        lineHeight="40px"
        fontSize="2xl"
        fontWeight="light"
        color="#000000"
      >
        <Link href="/catagory/lunch">Lunch</Link>
      </Heading>
      <Heading
        marginLeft="20px"
        width="260px"
        lineHeight="40px"
        fontSize="2xl"
        fontWeight="light"
        color="#000000"
      >
        <Link href="/catagory/dinner">Dinner</Link>
      </Heading>
      <Heading
        marginLeft="20px"
        width="260px"
        lineHeight="40px"
        fontSize=""
        fontWeight="normel"
        color="#000000"
      >
        <Link href="/catagory/desert">Desert</Link>
      </Heading>
    </Flex>
  );
};
