import { Flex } from "@chakra-ui/react";
import { ReactComponent as Appstore } from "../atoms/images/appstore.svg";
import { ReactComponent as Googlestore } from "../atoms/images/googlestore.svg";

export default function Downloadlogo() {
  return (
    <Flex justify="space-around" align="center">
      <Appstore />

      <Googlestore />
    </Flex>
  );
}
