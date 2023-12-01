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

interface Props {
  onClick: () => void;
}

const NavBar = ({ onClick }: Props) => {
  return (
    <Box>
      <HStack
        background="teal"
        marginBottom="10px"
        justifyContent="space-between"
        padding="10px"
      >
        <button onClick={onClick}>
          <HStack>
            <Image src={logo} borderRadius="15" boxSize="60px"></Image>

            <Heading>Game-Bar</Heading>
          </HStack>
        </button>
        <ColorModeSwitch />
      </HStack>
    </Box>
  );
};

export default NavBar;
