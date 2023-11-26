import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup paddingRight={{ md: "200px" }}>
        <InputLeftElement children={<BsSearch />} />
        <Input
          focusBorderColor="#008080"
          ref={ref}
          borderRadius={"20px"}
          placeholder="Search games"
          variant={"filled"}
        ></Input>
        <Button
          type="submit"
          colorScheme="teal"
          variant="outline"
          borderRadius="20px"
        >
          Search
        </Button>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
