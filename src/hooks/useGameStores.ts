
import APIClient from "../services/api-client";
import { GameStore } from "../entities/GameStore";
import { useQuery } from "@tanstack/react-query";

const useGameStores=(game_Id:number)=>{

    const apiclient=new APIClient<GameStore>(`/games/${game_Id}/stores`);

    return useQuery({
        queryKey:['stores', game_Id],
        queryFn: apiclient.getall
    })

}

export default useGameStores;