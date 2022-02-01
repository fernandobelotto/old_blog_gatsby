import React from "react";
import {
    HStack,
    VStack,
    Text,
    useColorModeValue,
    Tag,
    Box,
    Image as ChakraImage,
    Image,
    Flex,
    Grid,
} from "@chakra-ui/react";
import { IMAGE_URL_02 } from "../constants/links";
import { map } from "core-js/core/array";

export default function ProjectCard({ name, description, tags, imageUrl }) {
    //   const { data, loading, error } = usePalette(logo[0].thumbnails.large.url);

    const getTypeColor = () => {
        return "teal"
    };

    return (
        <VStack
            // p={4}
            bg={useColorModeValue("white", "neutralD.100")}
            rounded={'lg'}
            borderWidth="1px"
            borderColor={useColorModeValue("neutral.400", "neutralD.400")}
            w="100%"
            h="100%"
            textAlign="left"
            align="start"
            spacing={0}
            transition="all 0.25s"
            transition-timing-function="spring(1 100 10 10)"
            _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
        >

            <Image
                src={imageUrl}
                width={'100%'}
                height={'100px'}
                roundedTopLeft={'lg'}
                roundedTopRight={'lg'}
                objectFit={'cover'}
                layout="fixed"
            />


            <VStack align="start" justify="flex-start" p='5'>

                <Text fontWeight="bold" fontSize="md" noOfLines={2}>
                    {name}
                </Text>
                <Flex flexWrap={'wrap'} >
                    {tags.map((tag) => {
                        return (
                            <Tag size="sm" marginX='1' mb='1' colorScheme={getTypeColor()}>
                                {tag}
                            </Tag>
                        )
                    })}

                </Flex>

                <Text
                    fontSize="sm"
                    color={useColorModeValue("neutral.1000", "neutralD.1000")}
                >
                    {description}
                </Text>

            </VStack>
        </VStack >
    );
};
