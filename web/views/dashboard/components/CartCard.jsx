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
      <Box ml="20px">
        <Image src={image} height="100" width="200" />
      </Box>
      <Box>
        <Heading>{name}</Heading>
      </Box>
      <Box>
        <Heading>x 1</Heading>
      </Box>
      <Box mr="20px">
        <Heading>{price}</Heading>
      </Box>
    </Card>
  );
};
