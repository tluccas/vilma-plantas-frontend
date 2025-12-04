export interface ProductResponse {
  id: number;
  name: string;
  price: string;
  description: string;
  category_id: number;
  stock: number;
  createdAt: string;
  updatedAt: string;
  category: {
    name: string;
  };
  images: ProductImage[];
}

export interface ProductTypeResponse {
  products: ProductResponse[];
  total: number;
}

export interface ProductModel {
  id: number;
  name: string;
  price: number;
  description: string;
  category_id: number;
  stock: number;
  createdAt: string;
  updatedAt: string;
  category: {
    name: string;
  };
  images: ProductImage[];
}

export interface ProductImage {
  url: string;
}
