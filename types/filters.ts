export type FilterState = {
  search: string;
  category: string;
  priceRange: [number, number];
  inStock: boolean;
};

export type Category = {
  id: string;
  name: string;
};
