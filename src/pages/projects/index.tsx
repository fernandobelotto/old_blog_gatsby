import { Text } from '@chakra-ui/react'
import React from 'react'
import BlogPostCard from '../../components/BlogPostCard'
import Layout from '../../components/Layout'

export default function ProjecsPage() {
    return (
        <>
            <Layout pageTitle='Projects'>
                <Text>projetos </Text>
                <BlogPostCard />
            </Layout>

        </>
    )
}
