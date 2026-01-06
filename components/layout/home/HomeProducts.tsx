import { ProductCards } from "../../../features/products/components/cards/ProductCards";
import { ProductService } from "../../../features/products/api/ProductServie";


export default function HomeProducts() {

        const products = ProductService.getProducts();
  
        return (
          <section className="top-categories px-4 sm:px-6 lg:px-8 py-6">
            <h2 className="subtitle mt-2 mb-10 text-xl sm:text-2xl font-semibold text-heading text-center">
              Vitrine{" "}
              <span className="relative">
                <span style={{ color: "#6cc24a" }}>Botânica</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,8 Q25,2 50,6 T100,4"
                    stroke="#92d050"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.7"
                  />
                </svg>
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 justify-center">
              {products.map((prd) => (
                <ProductCards
                  key={prd.id}
                  product={prd}
                  redirectUrl={`/product/${prd.id}`}
                />
              ))}
            </div>
          </section>
        );

}