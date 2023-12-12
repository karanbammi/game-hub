import { useQuery } from "@tanstack/react-query";
import { Screenshot } from "../entities/Screenshot"
import APIClient from "../services/api-client"


const useScreenshot=(game_Id:number)=>{

    const apiclient=new APIClient<Screenshot>(`/games/${game_Id}/screenshots`);

    return useQuery({
        queryKey:['screenshots', game_Id],
        queryFn: apiclient.getall
    })

}

export default useScreenshot;