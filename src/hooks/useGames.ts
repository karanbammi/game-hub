import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
export interface Game {
  id: number;
  name: string;
  background_image:string;
}

interface FetchGamesResponnse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponnse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setErrors(err.message));
  });
  return { games, errors };
};

export default useGames;
