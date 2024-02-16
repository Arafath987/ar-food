"use client";
import React, { useContext } from "react";
import { Button, Flex, Box, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { CartCard } from "../../views/dashboard";
import { CartContext } from "../../context/Product";

const page = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      {cart.length === 0 && (
        <>
          <Box mt="300px">
            <Heading textAlign="center">your cart is empty</Heading>
          </Box>
          <Flex
            mt="30px"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Link href="/">
              <Button
                marginTop="10px"
                bgColor="#31A5A5"
                borderRadius="30px"
                height="40px"
                color="white"
                width="200px"
              >
                Add Item
              </Button>
            </Link>
          </Flex>
        </>
      )}

      {cart.length > 0 &&
        cart.map((el) => <CartCard name={el.name} image={el.description} price={el.price} />)}
    </div>
  );
};

export default page;
