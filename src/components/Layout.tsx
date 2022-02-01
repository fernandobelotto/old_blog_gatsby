import { Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { Footer } from './Footer/Footer'
import NavBar from './NavBar'
import i18n from '../i18n'
import { I18nextProvider } from 'react-i18next'



export default function Layout({ children, pageTitle, subTitle }: any) {
    return (
        <>
            <I18nextProvider i18n={i18n}>
                <NavBar />
                <Container mt='10' maxW='container.lg' >
                    <Heading>{pageTitle}</Heading>
                    <Text fontSize='2xl' mb='5'>{subTitle}</Text>
                    {children}
                </Container>
                <Footer />

            </I18nextProvider>

        </>
    )
}