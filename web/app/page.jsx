"use client";

import {
  Box,
  Flex,
  Heading,
  CircularProgress,
  useToast
} from "@chakra-ui/react";
import { FoodCard } from "../views/dashboard";
import { useEffect, useState } from "react";
import { Navbar } from "../layout/Food/Navbar";
import { Search} from "../views/common/Search"
import { CartIcon } from "../views/dashboard";
import { apiHandler} from "../handler"


const page = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const toast = useToast()

  useEffect(() => {
    (async () => {
    try{
      const {data} = await apiHandler.get("/api/get-menu-items/1")
      setData(data.menu_items);
    }catch{
        toast({
          title:"error getting data",
          status:"error",
          isClosable:true
        })
    }finally{
      setLoading(false);
    }
    })();
  }, []);

  return (
    <div>
      <Flex
        width="100%"
        height="133px"
        bgColor="white"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Heading
          fontWeight="semibold"
          fontStyle="normal"
          fontSize="20px"
          marginLeft="25px"
        >
          Menu{" "}
        </Heading>
        <Box marginLeft="-30px" marginTop="50px">
          <Search/>
        </Box>
        <CartIcon></CartIcon>
      </Flex>
      <Navbar />
      <Flex
        width="100%"
        height="100%"
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
            height="700px"
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
