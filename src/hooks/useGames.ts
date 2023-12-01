import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import  { FetchResponse } from "../services/api-client";
import APIClient from "../services/api-client";


export interface Platform{
id:number;
name:string;
slug:string;
}

export interface Game {
  id: number;
  name: string;
  background_image:string;
  parent_platforms: {platform:Platform}[];
  metacritic: number;
  released: string;

}

const apiClient=new APIClient<Game>('/games')
const useGames = (gameQuery : GameQuery) => 

useQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: ()=>apiClient.getall({
    params:{
      genres: gameQuery.genre?.id, 
      platforms:gameQuery.platform?.id,
      ordering: gameQuery.order,
      search: gameQuery.searchText
    }})
})

export default useGames;
