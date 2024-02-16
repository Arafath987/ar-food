"use client";
import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { FoodCard } from "../../../views/dashboard";
import { apiHandler } from "../../../handler";

const page = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const {data} = await apiHandler.get("/api/get-menu-items/1")
        setData(data.menu_items);
      } catch {
        console.log("ERROR")
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      <Flex
        width="100%"
        height="100%"
        bgColor="#31A5A5"
        flexWrap="wrap"
        mt="-75px"
        alignItems="center"
        justifyContent="center"
        flexDirection={{ base: "row", md: "row" }}
        gap="5px"
      >
        {!isLoading &&
          data.map((el) => (
            <FoodCard name={el.name} price={el.price} image={el.description} id={el.id} rating={el.rating} time={el.time} />
          ))}
        {isLoading && <h1>Loading</h1>}
      </Flex>
    </div>
  );
};

export default page;
