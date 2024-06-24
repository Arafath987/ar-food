"use client";

import { TabList,TabPanel,TabPanels, Tabs, Tab, Flex, Tbody, Tr, Td, Th, Table,  Thead, TableContainer, TableCaption,useToast } from "@chakra-ui/react";
import { Mdashboard } from "../../../../layout/Food/Mdashboard";
import { OrderingCard } from "../../../../views/dashboard";
import { useEffect, useState } from "react";
import { apiHandler } from "../../../../handler";
import { OrderingBar } from "../../../../views/common/orderingBar";


const page = () => {
  const [data, setData] = useState([]);
  const toast = useToast()
  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiHandler.get("")
        setData(data.menu_items);
      } catch {
        toast({
          title: "error getting data",
          status: "error",
          isClosable: true
        })
      } finally {
        console.log("data",data);
      }
    })();
  }, []);


  return (
    <Flex>
      <Mdashboard />

      <Flex
        marginTop="10vh"
        padding="1vw"
        justifyContent="flex-start"
        flexDirection="column"
        backgroundColor="#31A5A5"
        width="25vw"
        height="75vh"
        alignItems="center"
        borderRightRadius="20px"
      >

        <OrderingBar/>
        <OrderingCard />
      </Flex>

      <Flex
        justifyContent="flex-start"
        alignItems="space-between"
        mt="10vh"
        ml="2vw"
        width="52vw"
        flexDirection="column"
      >
        <TableContainer bg="white" rounded="md">
          <Table variant='simple'>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>Item name</Th>
                <Th>Preperation time</Th>
                <Th>Quantity</Th>
                <Th>Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>biriyani</Td>
                <Td>00:10:00</Td>
                <Td>2</Td>
                <Td rowSpan="2" >3</Td>
              </Tr>
              <Tr>
                <Td>manthi</Td>
                <Td>00:10:00</Td>
                <Td  >3</Td>
                
              </Tr>
              <Tr>
                <Td>friedrice</Td>
                <Td>00:10:00</Td>
                <Td>2</Td>
                <Td>2</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Flex>
  );
};

export default page;
