"use client";
const { createContext, useState } = require("react");
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const endPoint = process.env.NEXT_PUBLIC_API_BASE;

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const toast = useToast();
  const [user, setUser] = useState({});

  const login = async (email, password) => {
    try {
      const { data } = axios.post(endPoint + "/api/login", {
        email,
        password,
      });

      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch {
      toast({
        title: "Account not created.",
        description: "some error.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    console.log(data);
  };

  const logOut = async () => {};

  const value = {
    login,
    user,
    logOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
