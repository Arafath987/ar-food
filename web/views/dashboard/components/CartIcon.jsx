import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

export const CartIcon = () => {
  return (
    <Flex
      marginTop="-10vh"
      justifyContent="center"
      alignItems="center"
      width="4.5vw"
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
