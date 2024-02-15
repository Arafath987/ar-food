"use client";
import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { FoodCard } from "../../../views/dashboard";

const page = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setData(data);
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
        alignItems="center"
        justifyContent="center"
        flexDirection={{ base: "column", md: "row" }}
        gap="5px"
      >
        {!isLoading &&
          data.map((el) => (
            <FoodCard name={el.title} price={el.id} image={el.image} id={el.id} />
          ))}
        {isLoading && <h1>Loading</h1>}
      </Flex>
    </div>
  );
};

export default page;
