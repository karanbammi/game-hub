import React from "react";
import useStore from "../hooks/useStore";
import { Button, Link } from "@chakra-ui/react";

interface Props {
  store_Id: number;
  link: string;
}

const StoreLink = ({ store_Id, link }: Props) => {
  const { data, isLoading, error } = useStore(store_Id);
  console.log(data);
  return (
    <Link textAlign={"center"} paddingTop={7} href={link}>
      <Button colorScheme="blue" variant="outline">
        {data?.name}
      </Button>{" "}
    </Link>
  );
};

export default StoreLink;
