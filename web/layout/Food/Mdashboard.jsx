import { Flex, Button, Circle } from "@chakra-ui/react";
import { HiClipboardList, HiUserCircle } from "react-icons/Hi";
import { BiLogOutCircle } from "react-icons/bi";
import { IoFastFoodSharp } from "react-icons/io5";

import Link from "next/link";

export const Mdashboard = () => {
  return (
    <Flex
      padding="10px"
      width="130px"
      justifyContent="flex-start"
      flexDirection="column"
      backgroundColor="#31A5A5"
      height="600px"
      ml="50px"
      mt="100px"
      alignItems="center"
      borderLeftRadius="20px"
    >
      <Circle mt="30px" bgColor="red" width="100px" height="100px"></Circle>
      <Button mt="40px" width="50px" height="50px">
        <Link href="/manager/orderlist">
          <HiClipboardList size="40px"></HiClipboardList>
        </Link>
      </Button>

      <Button mt="20px" width="50px" height="50px">
        <Link href="/manager/profile">
          <HiUserCircle size="40px"></HiUserCircle>
        </Link>
      </Button>

      <Button mt="20px" width="50px" height="50px">
        <Link href="/manager/food_item">
          <IoFastFoodSharp size="40px"></IoFastFoodSharp>
        </Link>
      </Button>

      <Button mt="20px" width="50px" height="50px">
        <Link href="">
          <BiLogOutCircle size="40px"></BiLogOutCircle>
        </Link>
      </Button>
    </Flex>
  );
};
