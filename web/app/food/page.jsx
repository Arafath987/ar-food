"use client";

import React, { useState, useEffect, useContext } from "react";
import { Card, Box, Flex, Button, Image } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { CartContext } from "../../context/Product";
import { CartIcon } from "../../views/dashboard";

const page = () => {
  const [data, setData] = useState();
  const params = useSearchParams();
  const { addCart } = useContext(CartContext);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `http://127.0.0.1:8000/api/menuitems/detail/${params.get("id")}`
      );
      const data = await res.json();
      setData(data);
      setLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Card borderRadius="40px" bgColor="white" border="red" borderWidth="2px">
        <Flex ml="85%">
          <CartIcon></CartIcon>
        </Flex>
        <Box
          height="200px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          { <Image src={data.description} mt="10%" height="250px" width="100%" /> }
        </Box>
        <Box mt="11%" border="1px solid black" pl="30px">
          <h2>Price : ₹{data.price}</h2>
        </Box>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gap="5px"
        >
          <Button
            marginTop="10px"
            bgColor="#31A5A5"
            borderRadius="30px"
            height="55px"
            color="white"
            width="220px"
            onClick={() => addCart(data)}
          >
            Add to cart
          </Button>
      
        </Flex>
      </Card>
    </div>
  );
};

export default page;
