import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Arial,sans-serif",
    heading: "'Roboto', sans-serif",
  },

  styles: {
    global: {
      "html, body": {
        height: "100%",
        bg: "#F6F9FC",
      },
    },
  },

  textStyles: {
    h1: {
      fontSize: ["48px", "72px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-2%",
      fontFamily: "'Roboto', sans-serif",
    },
    h2: {
      fontSize: ["36px", "48px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
    p: {
      margin: "2em",
    },
  },
});

export default theme;
