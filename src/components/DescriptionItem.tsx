import { Heading, Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DescriptionItem = ({ term, children }: Props) => {
  return (
    <Box marginY={"10px"}>
      <Heading fontSize={"md"} as={"dt"} color={"grey"}>
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DescriptionItem;
