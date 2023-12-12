import { useQuery } from "@tanstack/react-query";

import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";






const apiClient=new APIClient<Game>('/games')

const useGames = ( page:number|string, page_size:number) => {
const gameQuery= useGameQueryStore(s=> s.gameQuery)
return useQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery,page],
  queryFn: ()=>apiClient.getall({
    params:{
      genres: gameQuery.genreId, 
      platforms:gameQuery.platform?.id,
      ordering: gameQuery.order,
      search: gameQuery.searchText,
      page: (page),
      page_size: page_size,
    }}),
    keepPreviousData: true,
    staleTime: 24*60*60*1000
})
}
export default useGames;
