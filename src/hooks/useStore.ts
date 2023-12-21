import { useQuery } from "@tanstack/react-query";
import { Store } from "../entities/Store";
import APIClient from "../services/api-client";

const useStore=(store_Id:number)=>{
    const apiclient=new APIClient<Store>(`/stores`);

    return useQuery({
        queryKey:['stores', store_Id],
        queryFn: ()=> apiclient.get(store_Id)
    })
}

export default useStore;