"use client";
import { useProductFilters } from "@/hooks/useProductFilters";
import { ProductsFilters } from "@/components/products/ProductFilters";
import { ProductCards } from "@/features/products/components/cards/ProductCards";
import { ProductModel } from "@/features/products/types/ProductType";
import { Category } from "@/types/filters";

type ProductsClientProps = {
  initialProducts: ProductModel[];
  categories: Category[];
};

export function ProductsClient({
  initialProducts,
  categories,
}: ProductsClientProps) {
  const { filters, filteredProducts, updateFilter } =
    useProductFilters(initialProducts);

  return (
    <>
      <ProductsFilters
        filters={filters}
        onFilterChange={updateFilter}
        categories={categories}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCards
            key={product.id}
            product={product}
            redirectUrl={`/produtos/${product.id}`}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">Nenhum produto encontrado</p>
        </div>
      )}
    </>
  );
}
