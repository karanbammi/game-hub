import React from "react";
import useTrailer from "../hooks/useTrailers";
import { Heading, Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailer(gameId);
  if (isLoading) return null;
  if (error) throw error;
  if (!data?.results[0]) return null;
  return (
    <>
      <Heading paddingBottom={"10px"} fontSize={"2xl"}>
        Latest Trailer
      </Heading>
      <video
        src={data?.results[0].data[480]}
        poster={data?.results[0].preview}
        controls
      />
    </>
  );
};

export default GameTrailer;
