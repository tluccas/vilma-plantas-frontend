import { api } from "../../../lib/api";
import type { ProductResponse, ProductModel, ProductTypeResponse } from "../types/ProductType";


export class ProductService {

    async getProducts(page: number, category?: number, minPrice?: number, maxPrice?: number): Promise<ProductModel[]> {
        try {
        const res = await api.get(
            `/product?page=${page}&category=${category ?? ""}&minPrice=${
            minPrice ?? ""
            }&maxPrice=${maxPrice ?? ""}`
        );

        const data = res.data as ProductTypeResponse;

        return data.products.map(mapProduct);
        } catch (error: unknown) {
        if (typeof error === "object" && error !== null && "response" in error) {
            const err = error as { response?: { data?: { message?: string } } };
            throw new Error(err.response?.data?.message);
        }
            throw new Error("Erro desconhecido.");
        }
    } 
}

export function mapProduct(product: ProductResponse) {
    return {
    id: product.id,
    name: product.name,
    price: parseFloat(product.price),
    description: product.description,
    category_id: product.category_id,
    stock: product.stock,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
    category: {
        name: product.category.name,
    },
    };
}
