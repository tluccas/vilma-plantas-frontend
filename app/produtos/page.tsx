import { ProductsClient } from "@/components/products/ProductClient";
import { SubTitle } from "@/components/ui/SubTitle";
import { ProductService } from "@/features/products/api/ProductServie";
import { CategoryService } from "@/features/products/api/CategoryService";

export default async function ProductsPage() {
  // Busca produtos e categorias da API
  const [products, categoriesData] = await Promise.all([
    ProductService.getProducts(),
    new CategoryService().getCategories().catch(() => []),
  ]);

  // Formata categorias para o formato esperado pelo componente
  const categories = categoriesData.map((cat) => ({
    id: cat.name,
    name: cat.name,
  }));

  return (
    <div className="min-h-screen overflow-x-hidden bg-(--color-background)">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Título da página */}
        <div className="text-center mb-12">
          <SubTitle text="Nossas" highlight="Plantas" className="mb-2!"/>
          <p className="text-sm text-gray-600 mt-2 max-w-2xl mx-auto">
            Descubra nossa coleção de plantas selecionadas para deixar seu
            ambiente mais verde e acolhedor
          </p>
        </div>

        {/* Componente com filtros e grid */}
        <ProductsClient initialProducts={products} categories={categories} />
      </div>
    </div>
  );
}
