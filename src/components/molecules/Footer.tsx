import { Box,UnorderedList,ListItem, Flex, Center,Spacer } from "@chakra-ui/react";
import { ReactComponent as Facebook } from "../atoms/images/facebook.svg";
import { ReactComponent as Instagram } from "../atoms/images/instagram.svg";
 
export default function Footer() {
  return (
    <Flex
    bg="#012130"
    flexDir='column'
    alignItems='center'   
    >
     <Center> <Box textStyle="h2" marginTop='63px' marginBottom='13px'>LEGAL</Box> </Center> 
      <UnorderedList textAlign='center' >
  
  <ListItem textStyle='li' listStyleType='none' color='white'>Privacy</ListItem>
  <ListItem textStyle='li' listStyleType='none' color='white'>Terms</ListItem>
  <ListItem textStyle='li' listStyleType='none' color='white'>Cookie Policy</ListItem>
  <ListItem textStyle='li' listStyleType='none' color='white'>Intellectual property</ListItem>
</UnorderedList>


<Center> <Box textStyle="h2" marginTop='58px' marginBottom='20px'>SOCIAL</Box> </Center> 
      
 <Flex width='15vw'
 paddingLeft='1rem'
 paddingBottom='10vh'
 >
   <Box><Facebook/></Box>
  
  <Spacer/>
  <Box><Instagram/></Box>
  </Flex>
  <Box width='60vw'opacity='0.26' marginBottom='44px'  height='1px' backgroundColor='white'  ></Box>
  <Box textStyle="h2" marginTop='58px' marginBottom='91px'>FAQ</Box>    
  <Box textStyle='credits'>© 2022 Thefaktory, LLC, All Rights Reserved.</Box>
    
    
    </Flex>
  );
}
