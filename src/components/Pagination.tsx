import { Button, ButtonGroup, Link } from "@chakra-ui/react";
import React from "react";

interface Props {
  device: string;
  page: number;
  page_limit: number;
  setpage: (a: number) => void;
}

const Pagination = ({ device, page, page_limit, setpage }: Props) => {
  return device != "sm" ? (
    <ButtonGroup textAlign="center" w="100%">
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
  ) : (
    <ButtonGroup textAlign="center" w="100%">
      <Button isDisabled={page === 1} onClick={() => setpage(page - 1)}>
        Previous
      </Button>
      <Button
        isDisabled={page === page_limit}
        onClick={() => setpage(page + 1)}
      >
        Next
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;
