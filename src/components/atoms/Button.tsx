import { Box } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
interface appProps {
  name?: string;
  width?: string;
  height?: string;
  color?: string;
  bg?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  pb?: string;
  pl?: string;
  mt?: string;
  mb?: string;
}

export default function button({
  name = `button`,
  width = "144px",
  height = "48px",
  color = "white",
  bg = "#358D8F",
  borderRadius = "28",
  fontSize = "20",
  fontWeight = "bold",
  pb = "1.5",
  pl = "3",
  mt = "2em",
}: appProps) {
  return (
    <>
      <Box
        as="button"
        bg={bg}
        height={height}
        color={color}
        width={width}
        borderRadius={borderRadius}
        fontSize={fontSize}
        fontWeight={fontWeight}
        pb={pb}
        pl={pl}
        mt={mt}
      >
        {name} <ChevronRightIcon w={6} h={6} />{" "}
      </Box>
    </>
  );
}
