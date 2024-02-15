"use client";

import {
  Box,
  Flex,
  Button,
  Heading,
  Card,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { Mdashboard } from "../../../layout/Food/Mdashboard";

const page = () => {
  return (
    <Flex>
      <Mdashboard />

      <Flex
        flexDirection="column"
        ml="8%"
        width="60%"
        mt="100px"
        bgColor="white"
        borderRadius="50px"
      >
        <Flex width="100%" bgColor="red" height="15%">
          <Heading ml="4%" mt="5%">
            Add Item
          </Heading>
        </Flex>
        <Flex width="100%" height="100%">
          <FormControl>
            <Flex flexDirection="column" height="100%" width="50%">
              <Box mt="5%" bgColor="gray">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </Box>

              <Box mt="5%" bgColor="gray">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </Box>

              <Box mt="5%" bgColor="gray">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </Box>

              <Box mt="5%" bgColor="gray">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </Box>
            </Flex>
            <Flex height="100%" width="50%"></Flex>
          </FormControl>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default page;
