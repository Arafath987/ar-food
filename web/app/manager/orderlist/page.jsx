"use client";

import { Box, Flex, Button, Heading, Card, Img } from "@chakra-ui/react";
import { Mdashboard } from "../../../layout/Food/Mdashboard";
import { CartCard, OrderingCard } from "../../../views/dashboard";

const page = () => {
  return (
    <Flex>
      <Mdashboard />

      <Flex
        marginTop="100px"
        padding="10px"
        width="30%"
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
          Order list
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
        <OrderingCard />
      </Flex>

      <Flex
        justifyContent="flex-start"
        alignItems="space-between"
        mt="100px"
        ml="20px"
        width="52%"
        flexDirection="column"
      >
        <Flex
          height="60px"
          borderRadius="20px"
          justifyContent="space-between"
          alignItems="center"
          bgColor="#FFFFFF"
        >
          <Box ml="20px">
            <Heading fontSize="30px" fontWeight="bold">
              Order info
            </Heading>
          </Box>
          <Box>
            <Heading>Prepare Time</Heading>
            <Heading>time</Heading>
          </Box>
          <Box mr="20px">
            <Heading>Table</Heading>
            <Heading>T2</Heading>
          </Box>
        </Flex>
        <CartCard />
      </Flex>
    </Flex>
  );
};

export default page;
