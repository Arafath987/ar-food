"use client";

import { Box, Flex, Button, Heading, Card } from "@chakra-ui/react";
import { Mdashboard } from "../../../layout/Food/Mdashboard";

const page = () => {
  return (
    <Flex>
      <Mdashboard />

      <Flex
        marginTop="100px"
        padding="10px"
        width="35%"
        justifyContent="flex-start"
        flexDirection="column"
        backgroundColor="#31A5A5"
        height="600px"
        alignItems="flex-start"
        borderRightRadius="20px"
      >
        <Heading
          marginLeft="10%"
          marginTop="30px"
          size="50px"
          fontSize="30px"
          fontWeight="bold"
        >
          FoodItem
        </Heading>
        <Box
          marginLeft="10%"
          mt="10px"
          bgColor="#FFFFFF"
          width="80%"
          height="40px"
          borderRadius="30px"
        >
          <Button
            mt="5px"
            ml="2%"
            borderRadius="30px"
            bgColor="#3BA9A9"
            height="30px"
            width="30%"
          >
            New
          </Button>
          <Button
            mt="5px"
            ml="2%"
            borderRadius="30px"
            height="30px"
            width="30%"
          >
            Preparing
          </Button>
          <Button
            mt="5px"
            ml="2%"
            borderRadius="30px"
            height="30px"
            width="30%"
          >
            Delivered
          </Button>
        </Box>
        <Card
          borderRadius="30px"
          padding="20px"
          marginLeft="10%"
          width="80%"
          bgColor="#FFFFFF"
          marginTop="30px"
        >
          <Flex justifyContent="space-between">
            <Box>
              <Heading>Order #300012</Heading>
              <Heading>10:27Am</Heading>
            </Box>
            <Box>
              <Heading>10/11/12</Heading>
              <Heading>180</Heading>
            </Box>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
};

export default page;
