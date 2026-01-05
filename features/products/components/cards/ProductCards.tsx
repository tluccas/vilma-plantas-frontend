import type { ProductModel } from "../../types/ProductType";
import { WhatsAppButton } from "@/components/ui/WhatsappButton"
type ProductCardProps = {
  product: ProductModel;
  redirectUrl: string;
};

export function ProductCards({ product, redirectUrl }: ProductCardProps) {
  return (
    <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md transition-transform hover:scale-103">
      <div className="relative w-full h-40 sm:h-48 lg:h-56 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={product.images[0]?.url}
          alt="Product Image"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">
          {product.description.length > 150
            ? product.description.substring(0, 147) + "..."
            : product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">${product.price}</span>
          <WhatsAppButton
            text="Comprar"
            message={`Olá, gostaria de saber mais sobre o produto: ${product.name}.`}
          />
        </div>
      </div>
    </div>
  );
}
