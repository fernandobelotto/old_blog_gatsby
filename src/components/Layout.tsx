import { Container, Heading } from '@chakra-ui/react'
import React from 'react'
import NavBar from './NavBar'

export default function Layout({ children, pageTitle }: any) {
    return (
        <>
            <NavBar />
            <Container mt='10'>

                <Heading>{pageTitle}</Heading>
                {children}
            </Container>

        </>
    )
}
