import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Genre{
  id: number;
  name: string;
  image_background : string;
}
const apiClient=new APIClient<Genre>('/genres');
const useGenres = () =>useQuery({
  queryKey:['genre'],
  queryFn: apiClient.getall,
  staleTime: 24*60*60*1000
})

export default useGenres;