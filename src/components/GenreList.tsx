import useGenres, { Genre } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import imageUrlGenerator from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading)
    return (
      <Spinner
        style={{
          position: "fixed",
          top: "50%",
          left: "5%",
          transform: "translate(-50%, -50%)",
        }}
      />
    );

  return (
    <>
      <Heading marginBottom="10px">Genres</Heading>
      <List paddingRight={"10px"}>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px" paddingX="10px">
            <HStack>
              <Image
                borderRadius="8"
                src={imageUrlGenerator(genre.image_background)}
                objectFit="cover"
                boxSize="32px"
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                color={genre.id === selectedGenre?.id ? "rgb(0, 255, 186)" : ""}
                onClick={() => onSelectGenre(genre)}
                variant="link"
                fontSize="14px"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
