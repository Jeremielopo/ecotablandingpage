import { Flex,Box } from "@chakra-ui/react";
import { ReactComponent as Appstore } from "../atoms/images/appstore.svg";
import logo from '../atoms/images/googlebadge.png'
export default function ToAppCTA() {
  return (
    <Flex justify="space-around" align="center">
      <Appstore />
       <Box><img src={logo} width='150px' alt="googleBadge" /></Box>
      
    </Flex>
  );
}
