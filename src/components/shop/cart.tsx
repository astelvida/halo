import {
  Heading,
  VStack,
  Text,
  Button,
  HStack,
  AspectRatio,
  Image,
  Stack,
  Divider,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

type Props = {};
const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secondaryColor = useColorModeValue("gray.800", "gray.100");

  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bg={bgColor}>
      <VStack spacing={3} alignItems="flex-start">
        <Heading>Cart</Heading>
        <Text>
          checkout this:{" "}
          <Button variant="link" colorScheme="black" onClick={toggleColorMode}>
            Toggle Theme
          </Button>
        </Text>
      </VStack>

      <HStack alignItems="center" w="full" spacing={6}>
        <AspectRatio ratio={1} w={24}>
          <Image src="/images/jeans.jpg" alt="jeans" />
        </AspectRatio>
        <Stack
          spacing={0}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack alignItems="flex-start">
            <Heading size="md">Jeans</Heading>
            <Text color="gray.500">Awesome pair of jeans</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            £100.00
          </Heading>
        </Stack>
      </HStack>

      <VStack alignItems="stretch" w="full" spacing={2}>
        <HStack justifyContent="space-between">
          <Text color={secondaryColor}>Subtotal</Text>
          <Heading size="sm">$120.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryColor}>Shpping</Text>
          <Heading size="sm">$20.00</Heading>
        </HStack>
      </VStack>
      <Divider color={secondaryColor} />
      <VStack alignItems="stretch" w="full" spacing={2}>
        <HStack justifyContent="space-between" w="full">
          <Text color={secondaryColor}>Total</Text>
          <Heading size="lg">$220.00</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Cart;
