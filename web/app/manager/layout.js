"use client"
import React, { useContext, useEffect } from "react";
import { Box } from "@chakra-ui/react"
import {AuthContext } from "../../context/Auth"
import { useRouter } from "next/navigation"

const url = "https://digital-photography-school.com/wp-content/uploads/2024/01/food-photography-styling-107.jpg"



const DashLayout = ({ children }) => {
  const { user } = useContext(AuthContext)
  const router = useRouter()

 useEffect(()=>{
   if(!user){
    router.push("/login")
   }
 },[user])

  return (
    <Box bg="red" minH="100vh" backgroundImage={url}>
      {children}
    </Box>
  );
};

export default DashLayout;
