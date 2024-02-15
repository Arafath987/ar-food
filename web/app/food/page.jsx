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
          { <Image src={data.image} height="200" width="400" /> }
        </Box>
        <Box border="1px solid black" pl="30px">
          <h4>{data.name}</h4>
          <h4>Price : {data.price}$</h4>
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
          <Button
            marginTop="10px"
            bgColor="#31A5A5"
            borderRadius="30px"
            height="55px"
            color="white"
            width="220px"
          >
            Buy Now
          </Button>
        </Flex>
      </Card>
    </div>
  );
};

export default page;
