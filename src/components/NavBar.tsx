import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  InputGroup,
} from "@chakra-ui/react";
import logo from "../assets/gb-logo (1).jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <Box>
      <HStack
        background="teal"
        marginBottom="10px"
        justifyContent="space-between"
        padding="10px"
      >
        <Image src={logo} borderRadius="15" boxSize="60px"></Image>
        <Heading>Game-Bar</Heading>
        <ColorModeSwitch />
      </HStack>
    </Box>
  );
};

export default NavBar;
