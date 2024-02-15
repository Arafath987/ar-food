"use client";

import {  Flex, Button, Heading,WrapItem,Avatar} from "@chakra-ui/react";
import { Mdashboard } from "../../../layout/Food/Mdashboard";

const page = () => {
  return (
    <Flex>
      <Mdashboard />

      <Flex
        marginTop="100px"
        padding="10px"
        width="30%"
        flexDirection="column"
        backgroundColor="#31A5A5"
        height="600px"
        alignItems="center"
        borderRightRadius="20px"
      >
        <Heading
        textAlign="center"
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
          <WrapItem>
        <Avatar
          size='2xl'
          name='Prosper Otemuyiwa'
          src='https://bit.ly/prosper-baba'
        />
      </WrapItem>
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
            mt="20px"
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
