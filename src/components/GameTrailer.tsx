import React from "react";
import useTrailer from "../hooks/useTrailers";
import { Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailer(gameId);
  console.log(data);
  if (isLoading) return <Spinner />;
  if (error) throw error;
  if (!data?.results[0]) return null;
  return (
    <video
      src={data?.results[0].data[480]}
      poster={data?.results[0].preview}
      controls
    />
  );
};

export default GameTrailer;
