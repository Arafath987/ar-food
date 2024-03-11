"use client";
import React, { useContext } from "react";
import { Button, Flex, Box, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { CartCard } from "../../views/dashboard";
import { CartContext } from "../../context/Product";
import { apiHandler } from "../../handler"


const page = () => {
  const dataSubmit = async (cart) => {
    try {
      await apiHandler.post("/api/place-order", cart);

      console.log('cart:', cart);
      reset();
    } catch (e) {
      console.error('Error sending data to the backend:', e);
    }
  }
  const { cart } = useContext(CartContext);
  return (
    <div>
      {cart.length === 0 && (
    <>
      <Box mt="300px">
        <Heading textAlign="center">Your cart is empty</Heading>
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
    cart.map((el) => (
      <CartCard name={el.name} image={el.description} price={el.price} />
    ))}

  {cart.length > 0 && (
    <Button
      onClick={() => dataSubmit(cart)}
      type="submit"
      marginTop="20px" // Adjust the margin top as needed
      marginLeft="20vw"
      bgColor="#31A5A5"
      borderRadius="30px"
      height="55px"
      color="white"
      width="220px"
    >
      Order Now
    </Button>
  )}
    </div>
  );
};

export default page;
