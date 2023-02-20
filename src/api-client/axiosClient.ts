import axios from "axios";

const axiosClient = axios.create({
  // baseURL: "http://localhost:1337/api",
  baseURL: "https://strapi-6kbz.onrender.com/api",
  headers: {
    "Content-Type": "application/json"
  }
});

const axiosClientMusic = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    "Content-Type": "application/json"
  }
});

const axiosAccountSpotify = axios.create({
  baseURL: "https://accounts.spotify.com/api",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  async (config) => {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

(axiosClientMusic || axiosAccountSpotify).interceptors.request.use(
  async (config) => {
    const acceessToken = sessionStorage.getItem("access_token");
    const access_token =
      "BQAHq6mWyqEf7fa6pmCe9qsXIS60ONtNWRuDChUNsu4J5R3-nacYP5ec_yVEfVRggwptNLTp0yv2RlvjqGyAMHSC8KcpqkTFSXozNMT_y4gyrvIT34q1";
    if (acceessToken) {
      config.headers!.Authorization = `Bearer ${acceessToken}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
(
  axiosClient ||
  axiosClientMusic ||
  axiosAccountSpotify
).interceptors.response.use(
  function (response) {
    return response?.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { axiosClient, axiosClientMusic, axiosAccountSpotify };
