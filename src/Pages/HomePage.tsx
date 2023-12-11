import { Box, Grid, GridItem, Show, HStack } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GameSorter from "../components/GameSorter";
import GenreList from "../components/GenreList";
import NavBar from "../components/NavBar";
import PlatformList from "../components/PlatformList";
import SearchInput from "../components/SearchInput";

const HomePage = () => {
  return (
    <Grid
      justifyContent="center"
      width="100%"
      templateAreas={{
        base: '"main"',
        lg: '"aside main"',
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
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
};

export default HomePage;
