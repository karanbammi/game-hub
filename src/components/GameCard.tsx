import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import imageUrlGenerator from "../services/image-url";
import { Link } from "react-router-dom";
import { Game } from "../entities/Game";

interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
    >
      <Card height={"100%"} overflow={"hidden"} borderRadius={"10px"}>
        <Link
          style={{ color: "inherit", textDecoration: "inherit" }}
          to={"/games/" + game.slug}
        >
          <Image src={imageUrlGenerator(game.background_image)} />
          <CardBody paddingY={"10px"} paddingX={"15px"}>
            <HStack justifyContent={"space-between"}>
              <PlatformIconList
                platform={game.parent_platforms.map((p) => p.platform)}
              />
              <CriticScore score={game.metacritic}></CriticScore>
            </HStack>
            <Heading
              paddingBottom="2px"
              paddingTop={"5px"}
              fontSize={"2xl"}
              textAlign={"left"}
            >
              {game.name}
            </Heading>

            <Text fontSize="12px" opacity="50%">
              Release Date:{" "}
              {game.released
                ? game.released.split("-").reverse().join("-")
                : "Not Known"}
            </Text>
          </CardBody>
        </Link>
      </Card>
    </Box>
  );
};

export default GameCard;
