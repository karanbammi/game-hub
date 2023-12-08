import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";

import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GameSorter from "./components/GameSorter";
import GenreList from "./components/GenreList";
import PlatformList from "./components/PlatformList";
import SearchInput from "./components/SearchInput";

function App() {
  return (
    <Grid
      justifyContent="center"
      width="100%"
      templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav" " aside main"',
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box marginX="10px">
          <SearchInput />
          <GameHeading />
          <HStack>
            <PlatformList />
            <GameSorter />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
