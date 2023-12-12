import useScreenshot from "../hooks/useScreenshot";
import { Heading, Image, SimpleGrid, Spinner } from "@chakra-ui/react";

interface Props {
  game_Id: number;
}

const GameScreenshots = ({ game_Id }: Props) => {
  const { data, isLoading, error } = useScreenshot(game_Id);

  if (isLoading) return null;
  if (!data?.results) return null;

  return (
    <>
      <Heading marginTop={"10px"} paddingBottom={"10px"} fontSize={"2xl"}>
        Screenshots
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5}>
        {data.results.map((i) => (
          <Image key={i.id} src={i.image} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
