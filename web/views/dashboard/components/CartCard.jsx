import { Heading, Card, Box, Image } from "@chakra-ui/react";

export const CartCard = ({ image, name, price }) => {
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
      <Box >
        <Image src={image} height="100px" width="200" />
      </Box>
      <Box>
        <Heading fontSize="20px" >{name}</Heading>
      </Box>
      <Box>
        <Heading fontSize="20px">x 1</Heading>
      </Box>
      <Box mr="20px">
        <Heading fontSize="20px">₹{price}</Heading>
      </Box>
    </Card>
  );
};
