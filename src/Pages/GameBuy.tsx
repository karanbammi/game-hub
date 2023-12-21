import React from "react";
import GameStores from "../components/GameStores";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import imageUrlGenerator from "../services/image-url";

const GameBuy = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading marginBottom={5} textAlign={"center"}>
        {game.name} Store Links
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 2 }}>
        <GridItem
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image
            borderRadius={20}
            overflow={"hidden"}
            src={imageUrlGenerator(game.background_image)}
          />
        </GridItem>
        <GridItem>
          <GameStores game_Id={game.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameBuy;
