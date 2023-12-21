import React from "react";
import useGameStores from "../hooks/useGameStores";
import StoreLink from "./StoreLink";
import { SimpleGrid } from "@chakra-ui/react";

interface Props {
  game_Id: number;
}

const GameStores = ({ game_Id }: Props) => {
  const { data, isLoading, error } = useGameStores(game_Id);

  return (
    <SimpleGrid justifyContent={"center"} columns={{ sm: 1, md: 2, lg: 3 }}>
      {data?.results.map((s) => (
        <StoreLink key={s.id} store_Id={s.store_id} link={s.url}></StoreLink>
      ))}
    </SimpleGrid>
  );
};

export default GameStores;
