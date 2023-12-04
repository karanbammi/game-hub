import {
  Box,
  Button,
  ButtonGroup,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { useMediaQuery } from "react-responsive";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";
import React, { useState } from "react";
import Pagination from "./Pagination";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const page_Size = 20;
  const [page, setpage] = useState(1);
  const { data, error, isLoading, isRefetching } = useGames(
    gameQuery,
    page,
    page_Size
  );
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const page_limit = Math.floor(
    data?.count
      ? data.count % page_Size === 0
        ? data.count / page_Size
        : data.count / page_Size + 1
      : 0
  );
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  if (error) return <Text>{error.message}</Text>;

  return (
    <Box marginX="10px">
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing="7"
        paddingY={"20px"}
      >
        {(isLoading || isRefetching) &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data?.results.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
      <Pagination
        device={isPortrait ? "sm" : ""}
        page={page}
        page_limit={page_limit}
        setpage={(page) => setpage(page)}
      ></Pagination>
    </Box>
  );
};

export default GameGrid;
