"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../context/Auth";
import {useRouter} from "next/navigation"

const url = "https://digital-photography-school.com/wp-content/uploads/2024/01/food-photography-styling-107.jpg"

const App = () => {
  const email = useRef(null);
  const password = useRef(null);
  const router = useRouter()

  const { login ,user} = useContext(AuthContext);

  const handleLogin = () => {
    login(email.current.value, password.current.value);
  };

  useEffect(()=>{
    if(user){
      router.push("/")
    }
  },[])

  return (
    <Flex
      width="100%"
      justifyContent="center"
      alignItems="center"
      backgroundImage={url}
      minH="100vh"
    >
      <Container
        mt="6%"
        ml="58%"
        maxW="lg"
        py={{ base: "12", md: "24" }}
        px={{ base: "0", sm: "8" }}
        backgroundColor="white"
        borderRadius="20px"
        boxShadow="xl"
      >
        <Stack spacing="8">
          <Stack spacing="6">
            <Stack spacing={{ base: "2", md: "3" }} textAlign="start">
              <Heading fontWeight="20px">Log in </Heading>
              <Heading size={{ base: "xs", md: "sm" }}>
                to get started
              </Heading>
            </Stack>
          </Stack>
          <Box
            py={{ base: "0", sm: "8" }}
            px={{ base: "4", sm: "10" }}
            bg={{ base: "transparent", sm: "bg.surface" }}
            boxShadow={{ base: "none", sm: "md" }}
            borderRadius={{ base: "none", sm: "xl" }}
            rounded="20px"
          >
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input id="email" type="email" ref={email} />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="pass">Password</FormLabel>
                  <Input id="pass" type="text" ref={password} />
                </FormControl>
              </Stack>
              <Stack spacing="6">
                <Button bgColor="#31A5A5" onClick={handleLogin}>
                  Continue
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>

    </Flex>

  );
};

export default App;
