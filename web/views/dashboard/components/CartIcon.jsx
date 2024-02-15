import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

export const CartIcon = () => {
  return (
    <Flex
      marginTop="10px"
      justifyContent="center"
      alignItems="center"
      width="45px"
      height="45px"
      boxShadow="dark-lg"
      rounded="md"
      borderColor="#00000040"
      borderWidth="2px"
      borderRadius="10px"
    >
      <Link href="/cart">
        <MdOutlineProductionQuantityLimits size="25px" />
      </Link>
    </Flex>
  );
};
