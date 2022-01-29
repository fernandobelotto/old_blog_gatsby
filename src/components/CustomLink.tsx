import React from 'react'
import { Link as ChakraLink } from '@chakra-ui/react'
import { Link } from 'gatsby'
export default function CustomLink({ children, to, ...props }: any) {
    return (
        <>
            <ChakraLink as={Link} color='blue.500' _hover={{ textDecor: 'none' }} to={to}>{children}</ChakraLink>
        </>
    )
}
