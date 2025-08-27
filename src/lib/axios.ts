
// import { config } from "@/Config";

import { config } from "@/Config/config";
import axios from "axios";
import { any } from "zod";

export const instanceAxios = axios.create({
  baseURL: config.baseUrl,
  withCredentials:true
  
});

console.log(config.baseUrl)


// Add a request interceptor
instanceAxios.interceptors.request.use(function (config) {
    // Do something before request is sent
     const token = localStorage.getItem("token");
     console.log("catch the token",token) // token stored in localStorage
  if (token) {
    config.headers = {
      ...config.headers as any,
      authorization: `${token}`,
    };
  }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instanceAxios.interceptors.response.use(function onFulfilled(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function onRejected(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
