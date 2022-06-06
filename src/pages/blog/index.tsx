import {
  Box,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout";
import { Link, graphql } from "gatsby";

function BlogCard({ post }) {
  return (
    <Box
      p="5"
      cursor={"pointer"}
      textDecor={"none"}
      borderRadius="2xl"
      shadow={"sm"}
      border={"1px solid"}
      borderColor="gray.200"
      onClick={() => {}}
      transition="all 0.25s"
      transition-timing-function="spring(1 100 10 10)"
      _hover={{
        transform: "translateY(-4px)",
        shadow: "lg",
      }}
    >
      <VStack spacing={2} align="stretch">
        <Flex
          alignItems={"stretch"}
          flexDir={"column"}
          height="100%"
          justifyContent={"space-between"}
        >
          <Box mb="3">
            <Heading fontSize={"xl"} mb="2">
              {post.frontmatter.title}
            </Heading>
            <Text color="gray.400">{post.frontmatter.description}</Text>
          </Box>
          <Flex justifyContent={"space-between"}>
            <Text>{post.frontmatter.createdAt}</Text>
          </Flex>
        </Flex>
      </VStack>
    </Box>
  );
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            description
            createdAt
          }
          slug
        }
      }
    }
  }
`;

export default function BlogPage({ data }): ReactElement {
  const { t } = useTranslation();

  const { edges: posts } = data.allMdx;

  return (
    <>
      <Layout
        pageTitle="Blog"
        subTitle={t("Articles about software development")}
      >
        <SimpleGrid columns={2} spacing={5} minChildWidth={"300px"}>
          {posts.map(({ node: post }) => {
            return (
              <Link to={post.slug}>
                <BlogCard post={post}></BlogCard>
              </Link>
            );
          })}
        </SimpleGrid>
      </Layout>
    </>
  );
}
