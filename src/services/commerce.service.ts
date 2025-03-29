import axios from "axios";
import { PagingQuery, PagingResponse } from "../types/api.type";
import {
  GetCartResponse,
  GetProductResponse,
  OrderData,
  OrderResponse,
  RequestPaymentResponse,
} from "../types/commerce.type";
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

export const addToCart = async (productId: number, quantity: number) => {
  return await apiInstance
    .post(`/cart`, { productId, quantity })
    .then((res) => res.data);
};

export const updateCartQuantity = async (cartId: number, quantity: number) => {
  return await apiInstance
    .patch(`/cart/${cartId}`, { quantity })
    .then((res) => res.data);
};

export const removeFromCart = async (cartId: number) => {
  return await apiInstance.delete(`/cart/${cartId}`).then((res) => res.data);
};

export const getOrders = async () => {
  return await apiInstance.get("/order").then((res) => res.data);
};

export const order = async (data: OrderData): Promise<OrderResponse> => {
  return await apiInstance.post("/order", data).then((res) => res.data);
};

export const requestPayment = async (
  orderId: number
): Promise<RequestPaymentResponse> => {
  return await apiInstance
    .post("/payment/request", { orderId })
    .then((res) => res.data);
};

export const completePayment = async (paymentKey: string) => {
  return await apiInstance
    .post("/payment/complete", { paymentKey })
    .then((res) => res.data);
};
