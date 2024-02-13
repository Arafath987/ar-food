import { Text, Card, Image } from "@chakra-ui/react";
import Link from "next/link";

export const FoodCard = ({ name, price, image, id }) => {
  return (
    <Link href={`/food/?id=${id}`}>
      <Card
        borderRadius="40px"
        mt="30px"
        width="180px"
        height="250px"
        bgColor="white"
        border="red"
        borderWidth="2px"
      >
        <Image src={image} w="100px" height="100px" m="15px" />
        <Text className="">{name}</Text>
        <Text color="red">{price}</Text>
      </Card>
    </Link>
  );
};
