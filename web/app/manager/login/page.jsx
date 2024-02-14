"use client";

import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { AuthContext } from "../../../context/Auth";

const App = () => {
  const email = useRef(null);
  const password = useRef(null);

  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login(email.current.value, password.current.value);
  };

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
      backgroundColor="white"
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>
              Log in to your account
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
              <Button onClick={handleLogin}>Sign in</Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default App;
