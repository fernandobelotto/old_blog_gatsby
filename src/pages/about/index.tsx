import { Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import CustomImage from '../../components/CustomImage'
import Layout from '../../components/Layout'
import { TechList } from '../../components/TechList'

export default function AboutPage() {
    const { t } = useTranslation()
    return (
        <>
            <Layout pageTitle={t('About')} subTitle={t('Who is Fernando Belotto?')} >
                <CustomImage imageUrl={`https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80`} />
                <Text fontSize={'xl'} p='10'>Fernando is a software developer passionated about creating unique web experiences. He started his carrear in an software house base in Campinas city and there he work on Angular, React and Vue projects for both small and large brazilian companies. There he worked using all sorts of libraries, patterns and techniques. After that he start working at dLocal, integrating the first brazilian tech team in the uruguayan company. Fernando focus his develeping in performance, acessibility and responsiviness</Text>
                <Heading mt='5'>Techs and Tools</Heading>
                <TechList mt='3' />
            </Layout>
        </>
    )
}
