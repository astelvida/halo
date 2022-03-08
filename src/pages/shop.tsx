import { Container, Flex, Link, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Cart from "../components/shop/cart";
import Details from "../components/shop/details";
import Layout from "../components/Layout";


const Shop: NextPage = () => {
  return (
    <Layout>
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Details />
        <Cart />
      </Flex>
    </Layout>
  );
};

export default Shop;
