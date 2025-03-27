export type GetProductResponse = ProductModel;

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

export type GetCartResponse = Omit<CartModel, "product"> & {
  product?: ProductModel;
};

export type OrderProductModel = {
  product: ProductModel;
  quantity: number;
};

export type RequestPaymentResponse = {
  paymentKey: string;
};

export type OrderProductData = {
  productId: number;
  quantity: number;
};

export type OrderData = {
  orderProducts: OrderProductData[];
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
