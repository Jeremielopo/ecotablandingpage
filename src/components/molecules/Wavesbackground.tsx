import { ReactComponent as Wavesback } from "../atoms/images/waveback.svg";
import { ReactComponent as Wavefront } from "../atoms/images/wavefront.svg";
import { Box } from "@chakra-ui/react";

export default function Wavesbackground() {
  return (
    <>
      <Box position='relative' >
        <Box position='absolute' width='100vw' left='1.2rem'><Wavesback  /></Box>
        <Wavefront />
      </Box>
    </>
  );
}
