import { useState } from "react";

import "./App.css";
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformList, { ParentPlatform } from "./components/PlatformList";
import GameSorter from "./components/GameSorter";
import GameHeading from "./components/GameHeading";
import SearchInput from "./components/SearchInput";

export interface GameQuery {
  genre: Genre | null;
  platform: ParentPlatform | null;
  order: string;
  searchText: string;
}

const initialState = {} as GameQuery;

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>(initialState);

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
        <NavBar onClick={() => setGameQuery(initialState)}></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box marginX="10px">
          <SearchInput
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
          <GameHeading gameQuery={gameQuery} />
          <HStack>
            <PlatformList
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <GameSorter
              onSelectedOrder={(order) => setGameQuery({ ...gameQuery, order })}
              selectedOrder={gameQuery.order}
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
