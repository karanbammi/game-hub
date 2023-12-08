import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
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
