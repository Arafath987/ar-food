import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const Navbar = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const isLinkActive = (link) => link === activeLink;

  return (
    <Flex
      minW="400px"
      justifyContent="space-between"
      borderTopLeftRadius="60px"
      bgColor="#31A5A5"
      height="7vh"
      padding="2vh"
    >
        <Link href="/">
          <Heading
            as="h2"
            marginLeft="2vw"
            fontSize=""
            fontWeight={isLinkActive("/") ? "bold" : "normal"}
            color="#000000"
            onClick={() => handleLinkClick("/")}
          >
            All
          </Heading>
        </Link>

      <Link href="/catagory/breakfast">
        <Heading
          marginLeft="2vw"
          fontSize=""
          color="#000000"
          as="h2"
          fontWeight={isLinkActive("/catagory/breakfast") ? "bold" : "light"}
          onClick={() => handleLinkClick("/catagory/breakfast")}
        >
          Breakfast
        </Heading>
      </Link>
      <Link href="/catagory/lunch">
        <Heading
          marginLeft="2vw"
          fontSize=""
          color="#000000"
          as="h2"
          fontWeight={isLinkActive("/catagory/lunch") ? "bold" : "light"}
          onClick={() => handleLinkClick("/catagory/lunch")}
        >
          Lunch
        </Heading>
      </Link>

      <Link href="/catagory/dinner">
        <Heading
          marginLeft="2vw"
          fontSize=""
          color="#000000"
          as="h2"
          fontWeight={isLinkActive("/catagory/dinner") ? "bold" : "light"}
          onClick={() => handleLinkClick("/catagory/dinner")}
        >
          dinner
        </Heading>
      </Link>

      <Link href="/catagory/desert">
        <Heading
          marginLeft="2vw"
          fontSize=""
          color="#000000"
          as="h2"
          fontWeight={isLinkActive("/catagory/desert") ? "bold" : "light"}
          onClick={() => handleLinkClick("/catagory/desert")}
        >
          Desert
        </Heading>
      </Link>



      
    </Flex>
  );
};
