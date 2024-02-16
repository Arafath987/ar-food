import React from "react";
import { Heading, Card, Box, Flex } from "@chakra-ui/react";

export const OrderingCard = () => {
  return (
    <Card
      borderRadius="30px"
      padding="20px"
      width="80%"
      bgColor="#FFFFFF"
      marginTop="30px"
    >
      <Flex justifyContent="space-between">
        <Box>
          <Heading fontSize="15px" >Order #300012</Heading>
          <Heading  fontSize="15px">10:27Am</Heading>
        </Box>
        <Box>
          <Heading  fontSize="15px">10/11/12</Heading>
          <Heading  fontSize="15px">180</Heading>
        </Box>
      </Flex>
    </Card>
  );
};
