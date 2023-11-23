import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import imageUrlGenerator from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List paddingTop="15px">
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px" paddingX="10px">
          <HStack>
            <Image
              borderRadius="8"
              src={imageUrlGenerator(genre.image_background)}
              boxSize="32px"
            />
            <Button
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
  );
};

export default GenreList;
