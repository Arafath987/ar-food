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
        <Flex width="100%" bgColor="" height="15%">
          <Heading ml="4%" mt="5%">
            Add Item
          </Heading>
        </Flex>

        <FormControl>
          <Flex FlexDirection="row" ml="4%" width="100%" height="100%">
            <Flex flexDirection="column" height="100%" width="45%">
              <Box mt="5%" bgColor="#EAEAEA">
                <FormLabel>Item Name</FormLabel>
                <Input type="string" />
              </Box>

              <Box mt="5%" bgColor="#EAEAEA">
                <FormLabel>Price</FormLabel>
                <Input type="number" />
              </Box>

              <Box mt="5%" bgColor="#EAEAEA">
                <FormLabel>Category</FormLabel>
                <Input type="string" />
              </Box>

              <Box mt="5%" bgColor="#EAEAEA">
                <FormLabel>Discription</FormLabel>
                <Input height="100%" type="text" />
              </Box>
              <Button
                width="70%"
                height="40px"
                mt="15%"
                ml="15%"
                boxShadow="dark-lg"
                rounded="md"
                borderColor="#00000040"
                borderWidth="2px"
                borderRadius="10px"
                bgColor="white"
              >
                Back
              </Button>
            </Flex>
            <Flex
              flexDirection="column"
              ml="4%"
              bgColor=""
              height="100%"
              width="45%"
            >
              <Box mt="5%" bgColor="#EAEAEA">
                <FormLabel>Prepration Time</FormLabel>
                <Input type="number" />
              </Box>

              <Box mt="5%" bgColor="#EAEAEA">
                <FormLabel>Add Image</FormLabel>
                <Input type="file" />
              </Box>

              <Box mt="5%" bgColor="#EAEAEA">
                <FormLabel>Add 3d Image</FormLabel>
                <Input type="file" />
              </Box>

              <Button
                width="70%"
                height="40px"
                mt="35%"
                ml="15%"
                boxShadow="dark-lg"
                rounded="md"
                borderColor="#00000040"
                borderWidth="2px"
                borderRadius="10px"
                bgColor="#3BA9A9"
              >
                Save
              </Button>
            </Flex>
          </Flex>
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default page;
