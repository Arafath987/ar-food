import React from "react";
import {
  Box,
  Flex,
  Heading,
  Grid,
  GridItem,
  InputGroup,
  InputLeftElement,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Divider,
  ButtonGroup,
  Button

} from "@chakra-ui/react";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { Input } from "@chakra-ui/react";

const page = () => {
  return (
    <div>
      <Box width="100%" height="133px" bgColor="white" paddingTop="20px">
        <Heading
          fontWeight="semibold"
          fontStyle="normal"
          fontSize="20px"
          marginLeft="25px"
        >
          Menu{" "}
        </Heading>
        <Flex
          justifyContent="center"
          alignItems="center"
          marginLeft="335px"
          marginTop="-35px"
          width="45px"
          height="45px"
          boxShadow="dark-lg"
          p="6"
          rounded="md"
          borderColor="#00000040"
          borderWidth="2px"
          borderRadius="10px"
        >
          <MdOutlineProductionQuantityLimits size="25px" />
        </Flex>
        <Box marginLeft="50px">
          <InputGroup>
            <InputLeftElement mr="30px" pointerEvents="none">
              <BsSearch size="30px" color="#D9D9D9" />
            </InputLeftElement>
            <Input
              borderTop="2px"
              borderLeft="1px"
              borderRight="1px"
              borderWidth="3px"
              borderColor="#D9D9D9"
              width="300px"
              height="40px"
              type="search"
              placeholder="&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;search"
            />
          </InputGroup>
        </Box>
      </Box>
      <Flex
        spacebetween="center"
        borderLeftRadius="60px"
        bgColor="#31A5A5"
        width="100%"
        height="150px"
        padding="20px"
      >
        <Box>
          <Heading
            marginLeft="20px"
            lineHeight="40px"
            fontSize="25px"
            fontWeight="light"
            color="#000000"
          >
            All
          </Heading>
          <Grid
            justifyContent="center"
            alignItems="center"
            marginLeft="17px"
            marginTop="-5px"
          >
            <GridItem width="34px" h="1.5" bg="#000000" />
          </Grid>
        </Box>

        <Heading
          marginLeft="20px"
          width="260px"
          lineHeight="40px"
          fontSize="2xl"
          fontWeight="light"
          color="#000000"
        >
          Breakfast
        </Heading>
        <Heading
          marginLeft="20px"
          width="260px"
          lineHeight="40px"
          fontSize="2xl"
          fontWeight="light"
          color="#000000"
        >
          Lunch
        </Heading>
        <Heading
          marginLeft="20px"
          width="260px"
          lineHeight="40px"
          fontSize="2xl"
          fontWeight="light"
          color="#000000"
        >
          Dinner
        </Heading>
        <Heading
          marginLeft="20px"
          width="260px"
          lineHeight="40px"
          fontSize=""
          fontWeight="normel"
          color="#000000"
        >
          Desert
        </Heading>
      </Flex>
      <Flex
        justifyContent="flex-start"
        alignItems="flex-start"
        height="1000px"
        width="100%"
        marginTop="-75px"
        bgColor="#31A5A5"
      >
        <Card borderRadius="25px" ml="10px" mt="30px" width="200px" height="250px" bgColor="white" >
          <CardBody>
            <Image borderRadius="10px"
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              
            />
            <Stack mt="6" spacing="3">
              <Heading color="#000000" size="md">Fried rice</Heading>
           
              <Text color="#000000" fontSize="4xl">
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
          </CardFooter>
        </Card>
      </Flex>
    </div>
  );
};

export default page;
