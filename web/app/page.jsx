"use client";

import {
  Box,
  Flex,
  CircularProgress,
  useToast,
} from "@chakra-ui/react";
import { FoodCard } from "../views/dashboard";
import { useEffect, useState } from "react";
import { Navbar } from "../layout/Food/Navbar";
import { apiHandler } from "../handler"
import {TopBar } from "../views/common/TopBar"



const page = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const toast = useToast()

  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiHandler.get("/api/get-menu-items/2")
        setData(data.menu_items);
      } catch {
        toast({
          title: "error getting data",
          status: "error",
          isClosable: true
        })
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Box>
     <TopBar/>

        <Navbar />
        <Flex
          minW="400px"
          width="100%"
          minHeight="80vh"
          mt="-.5vh"
          bgColor="#31A5A5"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          flexDirection={{ base: "row", md: "row" }}
          gap=".5vh"
        >
          {!isLoading &&
            data.map((el) => (
              <FoodCard
                name={el.name}
                price={el.price}
                image={el.description}
                id={el.id}
                rating={el.rating}
                time={el.time}
              />
            ))}
          {isLoading && (
            <Box
              height="calc(100%-50px)"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <CircularProgress value={80} isIndeterminate />
            </Box>
          )}
        </Flex>

    </Box>
  );
};

export default page;
