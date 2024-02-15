"use client";

import { TabList, TabPanel, TabPanels, Tabs, Tab, Flex, Tbody, Tr, Td, Th, Table, Tfoot, Thead, TableContainer, TableCaption } from "@chakra-ui/react";
import { Mdashboard } from "../../../layout/Food/Mdashboard";
import { OrderingCard } from "../../../views/dashboard";

const page = () => {
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

        <Tabs variant='soft-rounded' colorScheme='green' background="white" rounded="lg" w="80%">
          <TabList display="flex" justifyContent="space-around" alignItems="center">
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
                <Th>Order Info</Th>
                <Th>Preperation time</Th>
                <Th>Table</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td >30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td>0.91444</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Flex>
  );
};

export default page;
