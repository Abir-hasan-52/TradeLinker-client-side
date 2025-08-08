 

import axios from 'axios';
import React from 'react';
const axiosInstance = axios.create({
  baseURL: "https://trade-linker-server-side.vercel.app", // Change to your API URL
//   withCredentials: true, // if using cookies/JWT
});

const AxiosPublic = () => {
    return axiosInstance; // Return the axios instance for public use
};

export default AxiosPublic;
