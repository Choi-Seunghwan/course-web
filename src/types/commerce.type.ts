import { CartModel, OrderModel, ProductModel } from "./commerce-model.type";

export type GetProductResponse = ProductModel;

export type GetCartResponse = Omit<CartModel, "product"> & {
  product?: ProductModel;
};

export type RequestPaymentResponse = {
  paymentKey: string;
};

export type OrderProductData = {
  product: ProductModel;
  quantity: number;
};

export type OrderData = {
  orderProducts: ProductModel[];
  totalPrice: number;
};

export type OrderResponse = {
  status: string;
  id: number;
  customerId: number;
  orderNo: string;
  totalPrice: number;
  createdAt: Date;
  createdById: number;
};

export type GetOrdersResponse = OrderModel[];

export type OrderStatus = "PENDING" | "READY" | "COMPLETED" | "CANCELED";
