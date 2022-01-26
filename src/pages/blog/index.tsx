import { Heading, Text } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import Layout from '../../components/Layout'


export default function BlogPage(): ReactElement {
    return (
        <>
            <Layout pageTitle='Blog Page'>
                <Text>Algum conteúdo normal</Text>
            </Layout>
        </>
    )
}
