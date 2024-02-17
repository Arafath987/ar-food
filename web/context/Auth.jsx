"use client";
const { createContext, useState, useEffect } = require("react");
import { apiHandler } from "../handler"
import { useRouter } from 'next/navigation'
import { useToast } from "@chakra-ui/react";


export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const toast = useToast();
  const router = useRouter()
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const { data } = await apiHandler("/api/user_profile");
      setUser(data);
  } catch (error) {
      console.log("Error :", error);

  }
  
  }

  useEffect(()=>{
     getUser()
  },[])

  const login = async (email, password) => {
    try {
      // to get the cookie
      await apiHandler.post("/api/login", {
        email,
        password,
      });
      await getUser()
      router.push("/manager/orderlist")

      toast({
        title: "Account existed.",
        description: "We've confirm your account existed.",
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

  const logOut = async () => { 
    router.push("/login")
  };

  const value = {
    login,
    user,
    logOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
