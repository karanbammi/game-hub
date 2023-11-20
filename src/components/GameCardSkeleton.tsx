import { Card, CardBody, Skeleton, Text } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <>
      <Card width={"280px"} overflow={"hidden"} borderRadius={"10px"}>
        <Skeleton height={"238px"} />
        <CardBody>
          <Text />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCardSkeleton;
