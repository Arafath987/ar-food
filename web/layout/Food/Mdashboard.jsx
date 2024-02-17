import { Flex, Button, WrapItem, Avatar } from "@chakra-ui/react";
import { HiClipboardList, HiUserCircle } from "react-icons/Hi";
import { BiLogOutCircle } from "react-icons/bi";
import { IoFastFoodSharp } from "react-icons/io5";
import { AuthContext } from "../../context/Auth";
import { useContext } from "react";
import Link from "next/link";

export const Mdashboard = () => {
  const { logOut } = useContext(AuthContext);

const handleLogin = () => {
  logOut();
};
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
      <WrapItem>
        <Avatar
          size='lg'
          name='Prosper Otemuyiwa'
          src='https://bit.ly/prosper-baba'
        />
      </WrapItem>
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
        <Link href="/manager/add">
          <IoFastFoodSharp size="40px"></IoFastFoodSharp>
        </Link>
      </Button>

      <Button mt="20px" width="50px" height="50px" onClick={handleLogin}>
        <Link href="">
          <BiLogOutCircle size="40px"></BiLogOutCircle>
        </Link>
      </Button>
    </Flex>
  );
};
