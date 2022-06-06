import { extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto";
import "@fontsource/libre-baskerville";
import "@fontsource/inter";

const theme = {
  fonts: {
    heading: "Libre Baskerville",
    body: "Inter",
  },
};

export default extendTheme(theme);
