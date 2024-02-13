"use client";

import { Box, Flex, Button, Heading, Card, Circle } from "@chakra-ui/react";
import { Mdashboard } from "../../../layout/Food/Mdashboard";

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
          Profile
        </Heading>

        <Flex
          width="100%"
          flexDirection="column"
          alignItems="center"
          justifyItems="center"
        >
          <Circle
            marginTop="30px"
            bgColor="red"
            height="200px"
            width="200px"
          ></Circle>
          <Heading
            marginTop="30px"
            size="50px"
            fontSize="30px"
            fontWeight="bold"
          >
            name
          </Heading>
          <Button
            width="50%"
            height="40px"
            mt="20%"
            borderRadius="10px"
            bgColor="white"
          >
            Edit Profile
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default page;
