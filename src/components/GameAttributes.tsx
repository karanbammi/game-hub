import React from "react";
import DescriptionItem from "./DescriptionItem";
import { Game } from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={3} as={"dl"}>
      <DescriptionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text>{platform.name}</Text>
        ))}
      </DescriptionItem>
      <DescriptionItem term="Metacritic Score">
        <CriticScore score={game.metacritic} />
      </DescriptionItem>
      <DescriptionItem term="Publishers">
        {game.publishers.map((p) => (
          <Text>{p.name}</Text>
        ))}
      </DescriptionItem>
      <DescriptionItem term="Genres">
        {game.genres.map((g) => (
          <Text>{g.name}</Text>
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
  );
};

export default GameAttributes;
