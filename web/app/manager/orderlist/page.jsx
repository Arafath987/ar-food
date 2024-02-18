"use client";

import { TabList, Tabs, Tab, Flex, Tbody, Tr, Td, Th, Table,  Thead, TableContainer, TableCaption,useToast } from "@chakra-ui/react";
import { Mdashboard } from "../../../layout/Food/Mdashboard";
import { OrderingCard } from "../../../views/dashboard";
import { useEffect, useState } from "react";
import { apiHandler } from "../../../handler";


const page = () => {
  const [data, setData] = useState([]);
  const toast = useToast()
  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiHandler.get("/api/get-menu-items/1")
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
        marginTop="100px"
        padding="10px"
        justifyContent="flex-start"
        flexDirection="column"
        backgroundColor="#31A5A5"
        height="600px"
        alignItems="center"
        borderRightRadius="20px"
      >

        <Tabs variant='soft-rounded' colorScheme='green' background="white" rounded="lg" w="100%">
          <TabList  display="flex" justifyContent="space-around" alignItems="center">
            <Tab w="full">New</Tab>
            <Tab w="full">Preparing</Tab>
            <Tab w="full">Delivered</Tab>
          </TabList>
        </Tabs>
        <OrderingCard />
      </Flex>

      <Flex
        justifyContent="flex-start"
        alignItems="space-between"
        mt="100px"
        ml="20px"
        width="52%"
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
