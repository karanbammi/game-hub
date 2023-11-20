import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
  return (
    <Card overflow={"hidden"} borderRadius={"10px"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"1xl"} textAlign={"left"}>
          {game.name}
        </Heading>
        <PlatformIconList
          platform={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
