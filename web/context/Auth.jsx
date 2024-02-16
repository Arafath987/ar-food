"use client";
const { createContext, useState } = require("react");
import {apiHandler} from "../handler"
import { useRouter } from 'next/navigation'
import { useToast } from "@chakra-ui/react";


export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const toast = useToast();
  const router = useRouter()
  const [user, setUser] = useState({});

  const getUser = async()=>{
    const {data} = await apiHandler("/api/user_profile")
    setUser(data)
  }


  const login = async (email, password) => {
    try {
      const { data } = await apiHandler.post("/api/login", {
        email,
        password,
      });
      setUser(data)
      console.log(data.jwt)
      await getUser(data.jwt)
      router.push("/manager/orderlist")
      
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
  };

  const logOut = async () => {};

  const value = {
    login,
    user,
    logOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
