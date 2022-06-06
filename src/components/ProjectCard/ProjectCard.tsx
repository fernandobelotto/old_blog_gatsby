import {
  Flex,
  Image,
  Tag,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export default function ProjectCard({ name, description, tags, imageUrl }) {
  return (
    <VStack
      bg={useColorModeValue("white", "blue.900")}
      rounded={"lg"}
      borderWidth="1px"
      borderColor={useColorModeValue("blue.400", "blue.300")}
      color={useColorModeValue("blue.900", "white")}
      w="100%"
      h="100%"
      textAlign="left"
      align="start"
      spacing={0}
      transition="all 0.25s"
      transition-timing-function="spring(1 100 10 10)"
      _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
      className="btn-3"
    >
      <Image
        src={imageUrl}
        width={"100%"}
        height={"100px"}
        roundedTopLeft={"lg"}
        roundedTopRight={"lg"}
        objectFit={"cover"}
        layout="fixed"
      />

      <VStack align="start" justify="flex-start" p="5">
        <Text fontWeight="bold" fontSize="md" noOfLines={2}>
          {name}
        </Text>
        <Flex flexWrap={"wrap"}>
          {tags.map((tag) => {
            return (
              <Tag size="sm" marginX="1" mb="1" colorScheme="blue">
                {tag}
              </Tag>
            );
          })}
        </Flex>

        <Text
          fontSize="sm"
          color={useColorModeValue("neutral.1000", "neutralD.1000")}
        >
          {description}
        </Text>
      </VStack>
    </VStack>
  );
}
