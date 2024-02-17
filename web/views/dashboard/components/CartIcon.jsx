import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

export const CartIcon = () => {
  return (
    <Flex
      marginTop="-25%"
      justifyContent="center"
      alignItems="center"
      width="45px"
      height="45px"
      rounded="md"
      borderRadius="10px"
    >
      <Link href="/cart">
        <MdOutlineProductionQuantityLimits size="25px" />
      </Link>
    </Flex>
  );
};
