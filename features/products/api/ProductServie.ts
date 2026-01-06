import { api } from "@/lib/api";
import type { ProductModel, ProductTypeResponse } from "../types/ProductType";

export class ProductService {
  /**
   * Busca todos os produtos da API
   */
  static async getProducts(): Promise<ProductModel[]> {
    try {
      const { data } = await api.get<ProductTypeResponse>("/product");

      // Converte price de string para number se necessário
      return data.products.map((product) => ({
        ...product,
        price:
          typeof product.price === "string"
            ? parseFloat(product.price)
            : product.price,
      })) as ProductModel[];
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      return [];
    }
  }

  /**
   * Busca um produto por ID
   */
  static async getProductById(id: number): Promise<ProductModel | null> {
    try {
      const { data } = await api.get<ProductModel>(`/product/${id}`);
      return {
        ...data,
        price:
          typeof data.price === "string" ? parseFloat(data.price) : data.price,
      } as ProductModel;
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
      return null;
    }
  }

  /**
   * Busca produtos por categoria
   */
  static async getProductsByCategory(
    categoryId: number
  ): Promise<ProductModel[]> {
    try {
      const { data } = await api.get<ProductTypeResponse>(
        `/product?category_id=${categoryId}`
      );
      return data.products.map((product) => ({
        ...product,
        price:
          typeof product.price === "string"
            ? parseFloat(product.price)
            : product.price,
      })) as ProductModel[];
    } catch (error) {
      console.error("Erro ao buscar produtos por categoria:", error);
      return [];
    }
  }
}
