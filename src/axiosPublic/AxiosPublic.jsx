import axios from "axios";
import React from "react";
const axiosInstance = axios.create({
  baseURL: "https://trade-linker-server-side.vercel.app",
});

const AxiosPublic = () => {
  return axiosInstance;
};

export default AxiosPublic;
