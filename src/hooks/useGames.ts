import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
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
const useGames = (gameQuery : GameQuery, page:number|string, page_size:number) => 

useQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery,page],
  queryFn: ()=>apiClient.getall({
    params:{
      genres: gameQuery.genre?.id, 
      platforms:gameQuery.platform?.id,
      ordering: gameQuery.order,
      search: gameQuery.searchText,
      page: (page),
      page_size: page_size,
    }}),
    keepPreviousData: true
})

export default useGames;
