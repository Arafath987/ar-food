import React from "react";
import { Button, Flex, Box, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { CartCard } from "../../views/dashboard";

const page = () => {
  return (
    <div>
      <Box mt="300px" ml="100px">
        <Heading>your cart is empty</Heading>
      </Box>
      <Box></Box>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Link href="/">
          <Button
            marginTop="10px"
            bgColor="#31A5A5"
            borderRadius="30px"
            height="40px"
            color="white"
            width="200px"
          >
            Add Item
          </Button>
        </Link>
      </Flex>
      <CartCard></CartCard>
    </div>
  );
};

export default page;
