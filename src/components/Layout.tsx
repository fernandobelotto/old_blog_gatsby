import { Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Footer } from './Footer/Footer'
import NavBar from './NavBar'

export default function Layout({ children, pageTitle, subTitle }: any) {
    return (
        <>
            <NavBar />
            <Container mt='10' maxW='container.md' minH='100vh'>
                <Heading>{pageTitle}</Heading>
                <Text fontSize='2xl' mb='5'>{subTitle}</Text>
                {children}
            </Container>
            <Footer />
        </>
    )
}