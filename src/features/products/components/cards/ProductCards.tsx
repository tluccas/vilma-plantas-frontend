import type { ProductModel } from "../../types/ProductType";

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
          <a
            href={redirectUrl}
            className="inline-flex items-center text-white! bg-(--button-primary-bg) box-border border border-transparent rounded-3xl hover:bg-(--button-secondary-hover-bg) focus:ring-4 focus:ring-brand-medium shadow-xl font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none transition duration-300 ease-in-out select-none"
          >
            Comprar
            <svg
              className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
