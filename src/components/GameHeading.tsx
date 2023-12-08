import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const { data: genres } = useGenres();
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platform = useGameQueryStore((S) => S.gameQuery.platform);
  const genre = genres?.results.find((g) => g.id === genreId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as={"h1"} marginY="5">
      {heading}
    </Heading>
  );
};

export default GameHeading;
