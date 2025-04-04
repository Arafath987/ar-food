import { Flex,Button,Box} from "@chakra-ui/react"
import { Search } from "./Search"
import { CartIcon } from "../dashboard/index";
import  {useRouter} from "next/navigation"

export const TopBar = () => {
  const router = useRouter()
  return (
    <Flex minH="20vh" justifyContent="space-between" alignItems="center" px="3px">
        <Button mt="-10vh" onClick={()=>router.push("/login")}>Login</Button>
        <Search />
        <Box mt="-10vh"><CartIcon mt="-10vh" /></Box>
      </Flex>
  )
}
