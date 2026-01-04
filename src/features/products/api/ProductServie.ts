import type { ProductModel } from "../types/ProductType";

// O Vite usa import.meta.glob (sem .env) para carregar arquivos
const productFiles = import.meta.glob("../../../content/products/*.json", {
  eager: true,
});

// Mapa para manter compatibilidade com lógica baseada em ID
const CATEGORY_IDS: Record<string, number> = {
  Interior: 1,
  Exterior: 2,
  Orquídeas: 3,
  Mudas: 4,
  Vasos: 5,
};

export class ProductService {
  static getProducts(): ProductModel[] {
    return Object.keys(productFiles).map((filePath, index) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fileContent = productFiles[filePath] as any;
      const data = fileContent.default || fileContent;

      // Adapter
      return {
        id: index + 1, // ID temporário baseado no índice
        name: data.name,
        price: Number(data.price),
        description: data.description,
        stock: Number(data.stock || 0),

        // Mocks para campos que o CMS não tem
        category_id: CATEGORY_IDS[data.category] || 99,
        category: {
          name: data.category || "Categoria Desconhecida",
        },

        images: Array.isArray(data.images)
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data.images.map((img: any) => ({ url: img.url || img }))
          : [{ url: data.image || "" }],

        // Campos obrigatórios do ProductModel
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      } as ProductModel;
    });
  }
}
