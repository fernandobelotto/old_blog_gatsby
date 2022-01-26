import { Box, Container, Heading, Text } from "@chakra-ui/react"
import * as React from "react"
import Layout from "../components/Layout"
import NavBar from "../components/NavBar"

export default function Index() {
  return (
    <Box>
      <Layout pageTitle='Home'>
        <Text>Algum conteúdo normal</Text>
      </Layout>
    </Box>
  )
}