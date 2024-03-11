"use client";

import React, { useState, useEffect, useContext } from "react";
import { Card, Box, Flex, Button, Image,Text } from "@chakra-ui/react";
import { useSearchParams,useRouter } from "next/navigation";
import { CartContext } from "../../context/Product";
import { CartIcon } from "../../views/dashboard";
import { BsClock } from "react-icons/bs";
import { FaStar } from "react-icons/fa";


const page = () => {
  const [data, setData] = useState();
  const params = useSearchParams();
  const { addCart } = useContext(CartContext);
  const router = useRouter()

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
      
      <Card width="100vw" borderRadius="40px" bgColor="white" border="red" borderWidth="2px">
      <Box ml="80vw"><CartIcon /></Box>
        <Box
          mt="2vh"
          height="22vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
           
           <Image src={data.description}  height="25vh" width="100vw"  >
           </Image>
        </Box>
        <Button mt="10vh" onClick={()=>router.push("/Ar")}>view on table</Button>
        <Flex mt="20%" justifyContent="space-around">
        <Box>
          <Text >{data.name}</Text>
        </Box>
        <Box>
        <Text color="red"><Flex padding="3px" flexDirection="row"><FaStar></FaStar>{data.rating}</Flex></Text>
        <Text color="green"><Flex flexDirection="row"><BsClock />{data.time}</Flex></Text>
        </Box>
       </Flex>
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
