import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }


const axiosInstance=
    axios.create({
        baseURL:'https://api.rawg.io/api',
        params:{
            key:'c5d18452e4a449c29de9e2600b82b8de'
        }
    })


class APIClient<T>{
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint=endpoint;
    }

    getall=(config? : AxiosRequestConfig)=>{
        return axiosInstance
        .get<FetchResponse<T>>(this.endpoint,config).then(res=>res.data)
    }
}

export default APIClient