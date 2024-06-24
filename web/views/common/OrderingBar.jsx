import { TabList, Tabs, Tab, Flex } from "@chakra-ui/react";
import Link from "next/link";


export const  OrderingBar= () => {
    
    return (
        <Flex>

            <Tabs variant='soft-rounded' bgColor="#31A5A5" background="white" rounded="lg" w="100%">
              <TabList borderRadius="25px"  display="flex" justifyContent="space-around" alignItems="center">
              <Link w="full" href="/samble/new">
                <Tab w="full">New</Tab>
            </Link>
            <Link href="/samble/preparing">
            <Tab w="full">Preparing</Tab>
            </Link>
            <Link href="/samble/delivered">
            <Tab w="full">Delivered</Tab>
            </Link>    
              </TabList>
            </Tabs>
          
        </Flex>
    )
  }
  

