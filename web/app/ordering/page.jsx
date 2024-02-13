"use client";

import { Box, Flex, Button, Link, Text } from "@chakra-ui/react";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const page = () => {
  return (
    <div>
      <Flex justifyContent="flex-end" marginRight="10px">
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
          <Link href="../cart">
            <MdOutlineProductionQuantityLimits size="25px" />
          </Link>
        </Flex>
      </Flex>
      <Flex
        spacing={3}
        justifyContent="center"
        alignItems="center"
        height="500px"
      >
        <Text fontWeight="bold" fontSize="xxx-large">
          &nbsp; &nbsp; order &nbsp; placed &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;successfully
        </Text>
      </Flex>
      <Flex
        alignContent="space-between"
        height="284px"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Button
          boxShadow="2xl"
          rounded="md"
          borderTopColor="WHITE"
          borderWidth="3px"
          borderRadius="50px"
          margin="10px"
          width="300px"
          height="60px"
        >
          Add item
        </Button>
        <Button
          boxShadow="2xl"
          rounded="md"
          borderTopColor="WHITE"
          borderWidth="3px"
          borderRadius="50px"
          margin="10px"
          width="300px"
          height="60px"
        >
          Cancel order
        </Button>
        <Button
          boxShadow="2xl"
          rounded="md"
          borderTopColor="WHITE"
          borderWidth="3px"
          borderRadius="50px"
          margin="10px"
          width="300px"
          height="60px"
          backgroundColor="#3BA9A9"
        >
          Pay now
        </Button>
      </Flex>
    </div>
  );
};

export default page;
