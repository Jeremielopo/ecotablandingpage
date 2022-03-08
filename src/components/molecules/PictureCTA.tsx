import { Player } from "@lottiefiles/react-lottie-player";
import { ReactComponent as Handphone } from "../atoms/images/hand.svg";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Button from "../atoms/Button";
export default function PictureCTA() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box position="relative" height="33em">
        <Box position="absolute" left="5.5em" bottom="0" zIndex="1000">
          <Handphone />

          <Box position="absolute" bottom="8em" left="5.5em">
            <Box onClick={onOpen}>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Test</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <iframe
                      style={{
                        border: "1px solid rgba(0, 0, 0, 0.1)",
                      }}
                      max-width="450"
                      height="450"
                      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FT77jSBqMh3RzGwZfFdg9aB%2FEcotab-App%3Fnode-id%3D1%253A690%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A690%26show-proto-sidebar%3D1"
                      
                    ></iframe>
                  </ModalBody>
                </ModalContent>
              </Modal>
              <Button
                color="#225B5C"
                bg="#6CA1A2"
                width="6em"
                fontSize="1em"
                pb="-1em"
                name="Try it "
              />
            </Box>
          </Box>
        </Box>
        <Box position="absolute" zIndex="-1" bottom="-20rem">
          <Player
            autoplay
            controls
            loop
            src="https://assets7.lottiefiles.com/packages/lf20_6agdxcel.json"
            style={{ height: "auto", width: "100vw" }}
          ></Player>
        </Box>
      </Box>
    </>
  );
}
