import { Box, Heading, Text, VStack } from "@chakra-ui/react"
import * as React from "react"
import CustomImage from "../components/CustomImage"
import CustomLink from "../components/CustomLink"
import Layout from "../components/Layout"
import { IMAGE_URL_02 } from "../constants/links"

export default function HomePage() {
  return (
    <Box>
      <Layout pageTitle='Fernando Belotto'
        subTitle='Software developer Based in São Paulo, Brazil'>
        <CustomImage imageUrl={IMAGE_URL_02} />
        <Heading fontSize={'xl'} mt='5' fontWeight={'medium'}>
          Welcome to my personal website, here you can checkout a bit about me, my articles and my pass projects
        </Heading>
        <VStack spacing={2} mt='5' align='flex-start'>
          <Text fontSize={'xl'} >
            1. If you want to checkout my writing, head up to the <CustomLink to='blog'> blog</CustomLink> page
          </Text>
          <Text fontSize={'xl'}>
            2. In case you want to see some open source code, go to <CustomLink to='projects'> projects</CustomLink>
          </Text>
          <Text fontSize={'xl'}>3. To know about me and my history, the <CustomLink to='about'> about</CustomLink> is the place</Text>
          <Text fontSize={'xl'}>4. Finally, you can talk see how to reach me at the
            <CustomLink to='contact'> contact page</CustomLink>
          </Text>
        </VStack>
      </Layout>
    </Box >
  )
}