import { SimpleGrid, VStack } from '@chakra-ui/react'
import React from 'react'
import Layout from '../../components/Layout'
import ProjectCard from '../../components/ProjectCard'

export default function ProjecsPage() {


    const projects = [...Array(100).keys()]
    return (
        <>
            <Layout pageTitle='Projects' subTitle='Open source projects'>
                <SimpleGrid columns={3} spacing='5'>
                    {projects.map((project) => {
                        return (
                            <ProjectCard name={`CRUD's`} description={'A collection of simple proof of concepts '} />

                        )
                    })}

                </SimpleGrid>
            </Layout>
        </>
    )
}
