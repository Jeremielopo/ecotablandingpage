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
        overflowx:'hidden',
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
      fontSize: ["16px", "48px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
      paddingLeft:'20px',
      color: 'white',
      fontFamily:'arial Nova'
    },
    li: {
      fontFamily:'arial Nova',
      fontWeight : '100',
      fontSize : ["12px"]
    },
    credits: {
      fontSize:'10px',
      color:'white',
      marginBottom:'43px'
    },
    modalstext: {
      fontFamily:'Montserrat'
    }
    
  },
});

export default theme;
