import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
  // baseURL: "https://strapi-6kbz.onrender.com/api",
  headers: {
    "Content-Type": "application/json"
  }
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    return response?.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
