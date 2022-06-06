import { Container, Stack } from "@chakra-ui/react";
import * as React from "react";
import LanguageToggle from "../LanguageToggle";
import { Copyright } from "./Copyright";
import { Logo } from "./Logo";
import { SocialMediaLinks } from "./SocialMediaLinks";

export const Footer = () => (
  <Container maxW="container.lg" py="10">
    <Stack>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Logo />
        <SocialMediaLinks />
      </Stack>
      <Copyright alignSelf={{ base: "center", sm: "start" }} />
    </Stack>
  </Container>
);
