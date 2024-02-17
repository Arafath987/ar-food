"use client";
import { React, useEffect, useState } from "react";
import { Flex,Box,CircularProgress, useToast, } from "@chakra-ui/react";
import { FoodCard } from "../../../views/dashboard";

import { apiHandler } from "../../../handler";

const page = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const toast = useToast()

  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiHandler.get("/api/get-menu-items/1")
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
    <div>
      <Flex
        width="100%"
        minHeight="70vh"
        marginTop="-75px"
        bgColor="#31A5A5"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        flexDirection={{ base: "row", md: "row" }}
        gap="5px"
      >
        {!isLoading &&
          data.map((el) => (
            <FoodCard name={el.name} price={el.price} image={el.description} id={el.id} rating={el.rating} time={el.time} />
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
    </div>
  );
};

export default page;
