import { Text, Card, Image,Flex,Box } from "@chakra-ui/react";
import { BsClock } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

export const FoodCard = ({ name, price, image, id,rating,time }) => {
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
        <Image src={image} w="100%" height="180px"  />
       <Flex justifyContent="space-around">
        <Box>
          <Text >{name}</Text>
          <Text color="gray">₹{price}</Text>
        </Box>
        <Box>
        <Text color="red"><Flex padding="3px" flexDirection="row"><FaStar />{rating}</Flex></Text>
        <Text color="green"><Flex flexDirection="row"><BsClock />{time}</Flex></Text>
        </Box>
          
  
       </Flex>

      </Card>
    </Link>
  );
};
