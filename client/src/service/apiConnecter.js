import axios from "axios";

// Create an axios instance
const axiosInstance = axios.create({});

//creating a function to make a api request
export const apiConnector = async( method, url, data, headers, params) =>{
    return axiosInstance({
        method: `${method}`,
        url: `${url}`,
        data: data? data: null,
        headers: headers? headers: null,
        params: params? params: null
    })
}