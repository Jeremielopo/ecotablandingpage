import { Container, Heading, Text, Flex, Box } from "@chakra-ui/react";

import Button from "./Button";

export const Block = () => {
  return (
    <Container pb="1em" mb="4em">
      <Flex
        bg="white"
        pt="5em"
        mt="6em"
        mb="1em"
        flexDirection="column"
        height="30em"
        justify="space-around"
        align="center"
      >
        <Heading
          fontSize="26px"
          textAlign="center"
          fontWeight="800"
          color="#358D8F"
          pb="1em"
        >
          Connect your Ecotab to your mobile device
        </Heading>

        <Text fontSize="12px" fontWeight="600">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle. By the same
          illusion which lifts the horizon of the sea to the level of the
          spectator on a hillside, the sable cloud beneath was dished out, and
          the car seemed to float in the middle of an immense dark sphere, whose
          upper half was strewn with silver. Looking down into the dark gulf
          below, I could see a ruddy light streaming through a rift in the
          clouds.
        </Text>
        <Box mb="6em">
          <Button name="More" />
        </Box>
      </Flex>
    </Container>
  );
};
