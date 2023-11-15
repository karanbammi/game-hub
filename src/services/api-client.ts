import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'747dec6ab5f148cdad4c6702e09bb6b1'
    }
})