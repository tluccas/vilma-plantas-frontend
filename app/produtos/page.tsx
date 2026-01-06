import { ProductsClient } from "@/components/products/ProductClient";
import { SubTitle } from "@/components/ui/SubTitle";
import { ProductService } from "@/features/products/api/ProductServie";

// Categorias disponíveis (baseadas no ProductService)
const CATEGORIES = [
  { id: "Interior", name: "Plantas de Interior" },
  { id: "Exterior", name: "Plantas de Exterior" },
  { id: "Orquídeas", name: "Orquídeas" },
  { id: "Mudas", name: "Mudas" },
  { id: "Vasos", name: "Vasos" },
];

export default function ProductsPage() {
  const products = ProductService.getProducts();

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
        <ProductsClient initialProducts={products} categories={CATEGORIES} />
      </div>
    </div>
  );
}
