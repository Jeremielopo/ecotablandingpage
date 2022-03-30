import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import Featureone  from "../atoms/images/feature1.png";
import Featuretwo  from "../atoms/images/feature2.png";
import  Featurethree  from "../atoms/images/feature3.png";
import Featurefour  from "../atoms/images/feature4.png";

interface appProps {
  text?: string;
  title?: string;
  feature?: string;
}

export default function Textbloc({
  title = `Feature`,
  text = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem`,
  feature = "three",
}: appProps) {
  return (
    <>
      <Flex
        position="relative"
        flexDirection="column"
        alignItems="center"
        height="540px"
        mt="23rem"
        mb="350px"
        bg="rgba(57,148,151,0.39)"
      >
        <Heading mt="71px" mb="60px" color="#144E50" fontSize="26px">
          {title}
        </Heading>
        
        <Text width="80vw" fontSize="12px"  fontWeight="600">
          {text}
        </Text>
        <Box position="absolute" bottom="-300">
          {feature === "one" ?
                      <img
                      src={Featureone}
                      alt="Phone with ecotab logo"
                    />
           : feature === "two" ? 
           <img
           src={Featuretwo}
           alt="Phone with ecotab logo"
         />
           : feature === "three" ? 
           <img
           src={Featurethree}
           alt="Phone with ecotab logo"
         />
           : feature === "four" ? 
           <img
           src={Featurefour}
           alt="Phone with ecotab logo"
         />
           :                       <img
           src={Featureone}
           alt="Phone with ecotab logo"
         />}
        </Box>
      </Flex>
    </>
  );
}
