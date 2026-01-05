import { api } from "../../../lib/api";
import type { CategoryResponse, CategoryRequest } from "../types/CategoryType";

export class CategoryService {
  async getCategories(): Promise<CategoryResponse[]> {
    const { data } = await api.get("/category");
    return data;
  }

  async getCategoryById(categoryId: number): Promise<CategoryResponse> {
    const { data } = await api.get(`/category/${categoryId}`);
    return data;
  }

  async createCategory(category: CategoryRequest): Promise<CategoryResponse> {
    const res = await api.post("/category", category);
    
    if (res.status !== 201) {
      console.error("Failed to create category");
    }
    console.log("Category created successfully" + res.data);
    return res.data;
    
  }

  async deleteCategory(categoryId: number): Promise<void> {
    await api.delete(`/category/${categoryId}`);
  }

  async updateCategory(categoryId: number, category: CategoryRequest): Promise<CategoryResponse> {
    const { data } = await api.patch(`/category/${categoryId}`, category);
    return data;
  }
}
