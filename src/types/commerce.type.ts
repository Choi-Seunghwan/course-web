export type GetProductResponse = ProductModel;

export type ProductModel = {
  id: number;
  name: string;
  price: number;
  images: string[];
  description?: string;

  category?: null;

  createdAt: Date;
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
