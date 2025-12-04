import { ProductService } from "../../../features/products/api/ProductServie";
import type { ProductModel } from "../../../features/products/types/ProductType";
import { useState, useEffect } from "react";
import { ProductCards } from "../../../features/products/components/cards/ProductCards";

const productService = new ProductService();

export default function HomeProducts() {
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        async function loadProducts(){
            const res = await productService.getProducts(1);
            setProducts(res);
        }

        loadProducts();
    }, []);
  
        return (
           <section className="top-categories px-4 sm:px-6 lg:px-8 py-6">
                <h2 className="mt-2 mb-10 text-xl sm:text-2xl font-semibold text-heading text-center">Vitrine <span className="text-(--color-primary) font-bold">Botânica</span></h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 justify-center">
                            { products.map(prd => (
                                <ProductCards 
                                key={prd.id} 
                                product={prd}
                                redirectUrl={`/product/${prd.id}`} />
                            ))}                   
                    </div>
            </section>
    )

}