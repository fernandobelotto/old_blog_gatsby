import { EmailIcon } from '@chakra-ui/icons';
import { Box, useColorModeValue, VStack, FormControl, Input, FormLabel, InputGroup, InputLeftElement, Textarea, Button } from '@chakra-ui/react'
import React from 'react'

import { BsPerson } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
export function ContactForm() {
    return <>
        <Box
            bg={'transparent'}
            borderRadius="lg"
            p={8}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.300', 'gray.500')}
            color={useColorModeValue('gray.700', 'whiteAlpha.900')}
            shadow="base"
            width={['100%', '53%']}

        >
            <VStack spacing={5}>
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>

                    <InputGroup>
                        <InputLeftElement children={<BsPerson />} />
                        <Input colorScheme={'gray'} type="text" name="name" placeholder="Your Name" />
                    </InputGroup>
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                        <InputLeftElement children={<EmailIcon />} />
                        <Input type="email" name="email" placeholder="Your Email"></Input>
                    </InputGroup>
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Message</FormLabel>

                    <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        resize="none"
                    />
                </FormControl>

                <Button
                    colorScheme="gray"
                    isFullWidth>
                    Send Message
                </Button>
            </VStack>
        </Box>

    </>;
}
