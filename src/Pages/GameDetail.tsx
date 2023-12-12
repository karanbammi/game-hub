import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Box,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import GameAttributes from "../components/GameAttributes";

import parse from "html-react-parser";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetail = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  const descript = parse(game.description);
  return (
    <Box padding={"15px"}>
      <Heading paddingBottom={7}>{game.name}</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <div>{descript}</div>
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id} />
          <GameScreenshots game_Id={game.id} />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default GameDetail;
