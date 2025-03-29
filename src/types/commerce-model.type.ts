import { OrderStatus } from "./commerce.type";

export type ProductModel = {
  id: number;
  name: string;
  price: number;
  images: string[];
  description?: string;

  category?: null;

  createdAt?: Date;
  updatedAt?: Date;
};

export type CartModel = {
  id: number;
  productId: number;
  name: string;
  quantity: number;
  product?: ProductModel;
};

export type OrderItemModel = {
  createdAt: Date;
  createdById: number;
  id: number;
  orderId: 7;
  product: ProductModel;
  productId: 28;
  productName: "모던 레더 숄더백";
  productPrice: 99000;
  quantity: 1;
  updatedAt: "2025-03-27T04:38:39.575Z";
  updatedById: null;
};

export type OrderModel = {
  id: number;
  orderNo: string;
  totalPrice: number;
  status: OrderStatus;
  createdAt: Date;
  orderItems: OrderItemModel[];
};
