import axios from "axios";
import Cookies from "universal-cookie";

// METHOD 1: Using using default axios
// const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// export const apiRegister = async (data) => {
//   return await axios.post(`${BASE_URL}/auth/register`, data);
// };

// export const apiLogin = async (data) => {
//   return await axios.post(`${BASE_URL}/auth/login`, data);
// };

// METHOD 2: Using axios.create
// auth api
const cookies = new Cookies(null, { path: "/" });
const apiAuth = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/auth`,
});

apiAuth.interceptors.response.use(
  (response) => {
    // check if there any token in the response insert it in the cookies
    const token = response.data.token;
    if (token) {
      cookies.set("token", token);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const apiRegister = async (data) => {
  return await apiAuth.post("/register", data);
};

export const apiLogin = async (data) => {
  return await apiAuth.post("/login", data);
};
