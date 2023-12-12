import { Box, HStack, Heading, Image } from "@chakra-ui/react";
import logo from "../assets/gb-logo (1).jpg";
import useGameQueryStore from "../store";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link } from "react-router-dom";

const NavBar = () => {
  const setInitialState = useGameQueryStore((s) => s.setInitialState);
  return (
    <Box>
      <HStack
        background="teal"
        marginBottom="10px"
        justifyContent="space-between"
        padding="10px"
      >
        <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
          <HStack>
            <Image src={logo} borderRadius="15" boxSize="60px"></Image>

            <Heading>Game-Bar</Heading>
          </HStack>
        </Link>
        <ColorModeSwitch />
      </HStack>
    </Box>
  );
};

export default NavBar;
