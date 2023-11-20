import { Badge } from "@chakra-ui/react";

interface props {
  score: number;
}

const CriticScore = ({ score }: props) => {
  let color =
    score > 80 ? "green" : score > 60 ? "yellow" : score < 40 ? "red" : "";

  return (
    <Badge
      colorScheme={color}
      fontSize={"14px"}
      borderRadius={"5px"}
      marginTop={"10px"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
