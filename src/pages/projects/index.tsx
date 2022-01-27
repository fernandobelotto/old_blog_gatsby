import { Text } from '@chakra-ui/react'
import React from 'react'
import BlogPostCard from '../../components/BlogPostCard'
import Layout from '../../components/Layout'
import ProjectCard from '../../components/ProjectCard'

export default function ProjecsPage() {
    return (
        <>
            <Layout pageTitle='Projects' subTitle='Open and closed source projects'>
                <Text>projetos </Text>
                <BlogPostCard />
                <ProjectCard name='teste' description={'teste'} />
            </Layout>

        </>
    )
}
