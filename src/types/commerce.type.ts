export type GetProductResponse = {
  id: number;
  name: string;
  price: number;
  images: string[];

  category?: null; // TODO CategoryResponse

  createdAt: Date;
  updatedAt?: Date;
};

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
