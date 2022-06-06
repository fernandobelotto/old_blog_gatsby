import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import * as React from "react";
import { useTranslation } from "react-i18next";
import CustomImage from "../components/CustomImage";
import Layout from "../components/Layout";
import { IMAGE_URL_02 } from "../constants/links";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <Box>
      <Layout
        pageTitle="Fernando Belotto"
        subTitle={t("Software developer based in São Paulo, Brazil")}
      >
        <CustomImage imageUrl={IMAGE_URL_02} />
        <Heading fontSize={"xl"} mt="5" fontWeight={"medium"}>
          {t(
            "Welcome to my personal website, here you can checkout a bit about me, my articles and my pass projects"
          )}
        </Heading>
        <VStack spacing={2} mt="5" align="flex-start">
          <Text fontSize={"xl"}>
            1.{" "}
            {t(
              "If you want to checkout my writing, head up to the blog's page"
            )}
          </Text>
          <Text fontSize={"xl"}>
            2.{" "}
            {t(
              "In case you want to see some open source code, go to the projects page"
            )}
          </Text>
          <Text fontSize={"xl"}>
            3.{" "}
            {t("To know about me and my history, the about page is the place")}
          </Text>
          <Text fontSize={"xl"}>
            4. {t("Finally, see how to reach me at the  contact page")}
          </Text>
        </VStack>
      </Layout>
    </Box>
  );
}
