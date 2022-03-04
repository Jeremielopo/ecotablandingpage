import MenuMobile from "../atoms/menuMobile";
import { Flex, Box, Center } from "@chakra-ui/react";
import Logo from "../atoms/images/logo";

function Header() {
  return (
    <>
      <Flex
        direction="column"
        justify="space-around"
        align="end"
        height="245px"
      >
        <Box mr="2em">
          <MenuMobile />
        </Box>
      </Flex>

      <Center>
        <Logo />
      </Center>
    </>
  );
}

export default Header;
