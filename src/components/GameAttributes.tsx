import React from "react";
import DescriptionItem from "./DescriptionItem";

import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import { Game } from "../entities/Game";
import { Link } from "react-router-dom";
interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  return (
    <>
      <SimpleGrid marginY={5} columns={3} as={"dl"}>
        <DescriptionItem term="Platforms">
          {game.parent_platforms?.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </DescriptionItem>
        <DescriptionItem term="Metacritic Score">
          <CriticScore score={game.metacritic} />
        </DescriptionItem>
        <DescriptionItem term="Publishers">
          {game.publishers.map((p) => (
            <Text key={p.id}>{p.name}</Text>
          ))}
        </DescriptionItem>
        <DescriptionItem term="Genres">
          {game.genres.map((g) => (
            <Text key={g.id}>{g.name}</Text>
          ))}
        </DescriptionItem>
        <DescriptionItem term="Release Date">
          <Text>
            {game.released
              ? game.released.split("-").reverse().join("-")
              : "Not Known"}
          </Text>
        </DescriptionItem>
      </SimpleGrid>

      <Link to={"/games/" + game.slug + "/buy"}>
        <Button colorScheme="blue">Buy Now</Button>
      </Link>
    </>
  );
};

export default GameAttributes;
