import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import GameAttributes from "../components/GameAttributes";

import parse from "html-react-parser";

const html = "<div>Hello World</div>";
const reactElement = parse(html);

const GameDetail = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  const descript = parse(game.description);
  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{descript}</Text>
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetail;
