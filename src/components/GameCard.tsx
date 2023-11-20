import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

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
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
