import axios from "axios";
import { PagingQuery, PagingResponse } from "../types/api.type";
import { GetProductResponse } from "../types/commerce.type";

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_COMMERCE_SERVICE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

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
