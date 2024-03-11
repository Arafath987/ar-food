import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

export const CartIcon = () => {
  return (
    <Flex
      
      justifyContent="center"
      alignItems="center"
      width="4.5vh"
      height="4.5vh"
      rounded="md"
      borderRadius="1vw"
    >
      <Link href="/cart">
        <MdOutlineProductionQuantityLimits size="2.5vh" />
      </Link>
    </Flex>
  );
};
