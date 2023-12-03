import {
  Box,
  Button,
  ButtonGroup,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";
import SearchInput from "./SearchInput";
import React, { useState } from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const page_Size = 20;
  const [page, setpage] = useState(1);
  const { data, error, isLoading } = useGames(gameQuery, page, page_Size);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const page_limit = Math.floor(
    data?.count
      ? data.count % page_Size === 0
        ? data.count / page_Size
        : data.count / page_Size + 1
      : 0
  );
  if (error) return <Text>{error.message}</Text>;

  return (
    <Box marginX="10px">
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing="7"
        paddingY={"20px"}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data?.results.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
      <ButtonGroup>
        <Button isDisabled={page === 1} onClick={() => setpage(page - 1)}>
          Previous
        </Button>
        <Button
          isActive={page === 1 ? true : false}
          as={Link}
          onClick={() => setpage(1)}
        >
          1
        </Button>
        {page - 2 > 2 ? (
          <Button isDisabled={true}>...</Button>
        ) : (
          <Button
            isActive={page === 2 ? true : false}
            as={Link}
            onClick={() => setpage(2)}
          >
            2
          </Button>
        )}
        {page - 1 > 2 ? (
          page < page_limit - 3 ? (
            <Button as={Link} onClick={() => setpage(page - 1)}>
              {page - 1}
            </Button>
          ) : (
            <Button
              isActive={page === page_limit - 4 ? true : false}
              as={Link}
              onClick={() => setpage(page_limit - 4)}
            >
              {page_limit - 4}
            </Button>
          )
        ) : (
          <Button
            isActive={page === 3 ? true : false}
            as={Link}
            onClick={() => setpage(3)}
          >
            3
          </Button>
        )}
        {page >= 5 && page <= page_limit - 3 ? (
          <Button isActive={true}>{page}</Button>
        ) : page < 5 ? (
          <Button
            isActive={page === 4 ? true : false}
            as={Link}
            onClick={() => setpage(4)}
          >
            4
          </Button>
        ) : (
          <Button
            isActive={page === page_limit - 3 ? true : false}
            as={Link}
            onClick={() => setpage(page_limit - 3)}
          >
            {page_limit - 3}
          </Button>
        )}
        {page + 1 < page_limit - 2 ? (
          page < 5 ? (
            <Button
              isActive={page === 5 ? true : false}
              as={Link}
              onClick={() => setpage(5)}
            >
              5
            </Button>
          ) : (
            <Button as={Link} onClick={() => setpage(page + 1)}>
              {page + 1}
            </Button>
          )
        ) : (
          <Button
            isActive={page === page_limit - 2 ? true : false}
            as={Link}
            onClick={() => setpage(page_limit - 2)}
          >
            {page_limit - 2}
          </Button>
        )}
        {page + 2 < page_limit - 1 ? (
          <Button isDisabled={true}>...</Button>
        ) : (
          <Button
            isActive={page === page_limit - 1 ? true : false}
            as={Link}
            onClick={() => setpage(page_limit - 1)}
          >
            {page_limit - 1}
          </Button>
        )}
        <Button
          isActive={page === page_limit ? true : false}
          as={Link}
          onClick={() => setpage(page_limit)}
        >
          {page_limit}
        </Button>
        <Button
          isDisabled={page === page_limit}
          onClick={() => setpage(page + 1)}
        >
          Next
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default GameGrid;
