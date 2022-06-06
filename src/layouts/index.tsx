import { Box, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";
import { Footer } from "../components/Footer/Footer";
import NavBar from "../components/NavBar";
export default ({ children, pageContext }) => {
  return (
    <>
    <Box bg={useColorModeValue('gray.200', 'gray.900')}>

      <NavBar />
      {children}
      <Footer />
    </Box>
    </>
  );
};
