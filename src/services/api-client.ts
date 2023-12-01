import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'c5d18452e4a449c29de9e2600b82b8de'
    }
})