import axios from "axios";
import { PagingQuery, PagingResponse } from "../types/api.type";
import { GetCartResponse, GetProductResponse } from "../types/commerce.type";
import { setUpInterceptors } from "./api.interceptor";

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_COMMERCE_SERVICE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

setUpInterceptors(apiInstance);

export const getProducts = async (
  paging: PagingQuery = { page: 1, size: 10 }
): Promise<PagingResponse<GetProductResponse>> => {
  return await apiInstance
    .get("/product", { params: paging })
    .then((res) => res.data);
};

export const getProduct = async (
  productId: number
): Promise<GetProductResponse> => {
  return await apiInstance.get(`/product/${productId}`).then((res) => res.data);
};

export const getCartItems = async (): Promise<GetCartResponse> => {
  return await apiInstance.get(`/cart`).then((res) => res.data);
};

export const addToCart = async (productId: number) => {
  return await apiInstance.post(`/cart`, {}).then((res) => res.data);
};
