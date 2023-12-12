import React from "react";
import DescriptionItem from "./DescriptionItem";

import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import { Game } from "../entities/Game";
interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={3} as={"dl"}>
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
  );
};

export default GameAttributes;
