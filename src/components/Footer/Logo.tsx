import {
  Heading,
  HTMLChakraProps, useToken
} from "@chakra-ui/react";
import * as React from "react";

export const Logo = (props: HTMLChakraProps<"svg">) => {
  const [white, black] = useToken("colors", ["white", "gray.800"]);
  return (
    <Heading fontSize={"2xl"}>Fernando Belotto</Heading>
  );
};
