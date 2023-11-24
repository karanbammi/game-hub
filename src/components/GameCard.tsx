import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import imageUrlGenerator from "../services/image-url";

interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
  return (
    <Card overflow={"hidden"} borderRadius={"10px"}>
      <Image src={imageUrlGenerator(game.background_image)} />
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
        <Text opacity="50%">
          Release Date:{" "}
          {game.released
            ? game.released.split("-").reverse().join("-")
            : "Not Known"}
        </Text>
      </CardBody>
    </Card>
  );
};

export default GameCard;
