import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import {
  Code,
  Container,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Container mt="10" maxW="container.md">
      <Heading mb="10">{mdx.frontmatter.title}</Heading>
      <MDXProvider
        components={{
          Link: Link,
          h1: (props) => <Heading {...props} mt="10" />,
          h2: (props) => <Heading {...props} mt="10" />,
          h3: (props) => <Heading {...props} mt="10" />,
          h4: (props) => <Heading {...props} mt="10" />,
          h5: (props) => <Heading {...props} mt="10" />,
          p: (props) => <Text {...props} marginY="5" fontSize={"lg"} />,
          code: (props) => (
            <Code
              {...props}
              w="full"
              shadow={"lg"}
              p={"5"}
              borderRadius={"lg"}
            />
          ),
          ul: UnorderedList,
          li: ListItem,
          ol: OrderedList,
        }}
      >
        <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </Container>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;
