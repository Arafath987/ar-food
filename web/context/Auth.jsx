"use client";
const { createContext, useState, useEffect } = require("react");
import { apiHandler } from "../handler"
import { useRouter,usePathname } from 'next/navigation'
import { useToast } from "@chakra-ui/react";


export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const toast = useToast();
  const router = useRouter()
  const pathname = usePathname()
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const { data } = await apiHandler("/api/user_profile");
      setUser(data);
      return data
  } catch (error) {
      console.log("Error :", error);
   }
  
  }


  useEffect(() => {
    const initializeUser = async () => {
      try {
       const data =  await getUser();
        if (data) {
          if( pathname === "/login"){
            router.push("/manager/add");
          }else{
            router.push("/manager/samble/new");
          }
        }
      } catch (error) {
        console.log("Error :", error);
      }      
    };
  
    initializeUser();
  }, []);
  

  

  const login = async (email, password) => {
    try {
      // to get the cookie
      await apiHandler.post("/api/login", {
        email,
        password,
      });
      await getUser()
      router.push("/manager/samble/new")

      toast({
        title: "Login successful",
        description: "Welcome back",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch {
      toast({
        title: "Account does not exist",
        description: "Please signup",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const logOut = async () => { 
    try{
      await apiHandler.post("/api/logout")
      router.push("/login")
    }catch{
      toast({
        title:"error logging out",
        status:"error",
        duration:9000
      }) 
    }
  };

  const value = {
    login,
    user,
    logOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
