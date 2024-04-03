"use client";
import React, { useContext } from "react";
import {
  Flex,
  Button,
  Box,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { CartCard } from "../../views/dashboard";
import { CartContext } from "../../context/Product";
import { apiHandler } from "../../handler";
import { useRouter } from "next/navigation"

const Page = () => {
  const router = useRouter();
  const { handleSubmit, register, formState: { errors }, reset } = useForm({
    mode: "all",
  });

  const { cart,setPaymentProvider } = useContext(CartContext);
  console.log(errors);
  const dataSubmit = async (info) => {
    try {
      const orderData = {
        item_quantities: cart.map((el) => ({
          item_id: el.id,
          quantity: 1
        })),
        table_number: Number(info.table_number),
      };

      const { data } = await apiHandler.post("/api/place-order", orderData);
      setPaymentProvider(data);
      reset();
      router.push("/order")
    } catch (e) {
      console.error('Error sending data to the backend:', e);
    }
  };

  return (
    <div>
      {
        cart.length === 0 ? (
          <div>
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
          </div>
        ):(
          <form onSubmit={handleSubmit(dataSubmit)}>
         <FormControl isInvalid={errors.table_number} mt={10}>
            <FormLabel htmlFor='table_number'>Table Number</FormLabel>
            <Input
              id='table_number'
              type="number"
              placeholder='Table Number'
              {...register('table_number', {
                required: 'Table number is required',
              })}
            />
  
            <FormErrorMessage>
              {errors.table_number && errors.table_number.message}
            </FormErrorMessage>
          </FormControl>
          {
            cart.map((el) => (
              <CartCard name={el.name} image={el.description} price={el.price} />
            ))
          }
          <Button
            type="submit"
            marginTop="20px"
            marginLeft="20vw"
            bgColor="#31A5A5"
            borderRadius="30px"
            height="55px"
            color="white"
            width="220px"
          >
            Order Now
          </Button>
        </form>
        )
      }
   
    </div>
  )
};

export default Page;
