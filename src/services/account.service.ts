import axios from "axios";

export const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const postSignUp = async (data: any) => {
  return await apiInstance.post("/accounts/signup", data);
};
