import { Heading, Card, Box, Image } from "@chakra-ui/react";

import React from "react";

export const CartCard = () => {
  return (
    <Card
      borderRadius="30px"
      padding="20px"
      width="100%"
      marginTop="20px"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      bgColor="#FFFFFF"
      height="120px"
    >
      <Box ml="20px">
        <Image src="Fried-Rice-9-500x500 1"></Image>
      </Box>
      <Box>
        <Heading>fried race</Heading>
      </Box>
      <Box>
        <Heading>x 2</Heading>
      </Box>
      <Box mr="20px">
        <Heading>₹160</Heading>
      </Box>
    </Card>
  );
};
