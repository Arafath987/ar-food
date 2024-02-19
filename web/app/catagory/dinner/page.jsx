"use client";
import { useEffect, useState } from "react";
import { Flex,Box,CircularProgress, useToast } from "@chakra-ui/react";
import { FoodCard } from "../../../views/dashboard";
import { apiHandler } from "../../../handler";

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



      <Flex
        width="100%"
        bgColor="#31A5A5"
        flexWrap="wrap"
        mt="-.5vh"
        minHeight="70vh"
        alignItems="center"
        justifyContent="center"
        flexDirection={{ base: "row", md: "row" }}
        gap="1vh"
      >
        {!isLoading &&
          data
          .filter((el) => el.category === 7)
          .map((el) => (
            <FoodCard name={el.name} price={el.price} image={el.description} id={el.id} rating={el.rating} time={el.time} />
          ))}
          {isLoading && (
            <Box
              height="calc(100%-5vh)"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <CircularProgress value={80} isIndeterminate />
            </Box>
          )}
      </Flex>
  );
};

export default page;
