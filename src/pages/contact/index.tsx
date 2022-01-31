import { Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { ContactForm } from '../../components/Contact'
import CustomImage from '../../components/CustomImage'
import Layout from '../../components/Layout'
import { SocialIconList } from '../../components/SocialIconList'
import { IMAGE_URL_04 } from '../../constants/links'


export default function ContactPage() {
    return (
        <>
            <Layout pageTitle='Contact' subTitle='There many ways to get in touch with me' >
                <CustomImage imageUrl={IMAGE_URL_04} />
                <VStack mt='7' spacing={10}>

                    <SocialIconList />
                    <ContactForm />
                </VStack>
            </Layout>
        </>
    )
}
