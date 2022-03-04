import { extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
  textStyles: {
    h1: {

      fontSize: ['48px', '72px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-2%',
      fontFamily:"'Roboto', sans-serif",
    },
    h2: {
      fontSize: ['36px', '48px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
    fonts:{
      
      body:"'Roboto, sans-serif",
    },


  },
})





export default theme 