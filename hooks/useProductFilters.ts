"use client";
import { useState, useMemo } from "react";
import { ProductModel } from "@/features/products/types/ProductType";
import { FilterState } from "@/types/filters";

export function useProductFilters(products: ProductModel[]) {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: "all",
    priceRange: [0, 200],
    inStock: false,
  });

  const filteredProducts = useMemo(() => {
    if (!products || !Array.isArray(products)) return [];

    return products.filter((product) => {
      // Busca por nome/descrição
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        const matchesName = product.name?.toLowerCase().includes(searchTerm);
        const matchesDescription = product.description
          ?.toLowerCase()
          .includes(searchTerm);

        if (!matchesName && !matchesDescription) {
          return false;
        }
      }

      // Filtro categoria
      if (
        filters.category !== "all" &&
        product.category?.name !== filters.category
      ) {
        return false;
      }

      // Filtro preço
      if (
        product.price < filters.priceRange[0] ||
        product.price > filters.priceRange[1]
      ) {
        return false;
      }

      // Filtro estoque
      if (
        filters.inStock &&
        (product.stock === 0 || product.stock === undefined)
      ) {
        return false;
      }

      return true;
    });
  }, [products, filters]);

  return {
    filters,
    setFilters,
    filteredProducts,
    updateFilter: (key: keyof FilterState, value: any) =>
      setFilters((prev) => ({ ...prev, [key]: value })),
  };
}
