import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://trade-linker-server-side.vercel.app",
});

const AxiosSecure = () => {
  const { user } = useContext(AuthContext);
  axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${user?.accessToken}`;
    return config;
  });
  return  axiosInstance;
};

export default AxiosSecure;
