import React from "react";
import { Link as ChakraLink, useColorModeValue } from "@chakra-ui/react";
import { Link } from "gatsby";
export default function CustomLink({ children, to, ...props }: any) {
  return (
    <>
      <ChakraLink
        as={Link}
        color={useColorModeValue("teal.500", "teal.200")}
        _hover={{ textDecor: "none" }}
        to={to}
      >
        {children}
      </ChakraLink>
    </>
  );
}
