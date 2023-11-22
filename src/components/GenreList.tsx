import React from "react";
import useGenres from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import imageUrlGenerator from "../services/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} padding="8px">
          <HStack>
            <Image
              borderRadius="8"
              src={imageUrlGenerator(genre.image_background)}
              boxSize="32px"
            />
            <Text fontSize="14px">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
