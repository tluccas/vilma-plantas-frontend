"use client";
import { FilterState, Category } from "@/types/filters";

type ProductsFiltersProps = {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: any) => void;
  categories: Category[];
};

export function ProductsFilters({
  filters,
  onFilterChange,
  categories,
}: ProductsFiltersProps) {
  const inputStyle =
    "w-full h-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-sm transition-all";

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8 w-full">
      <div className="grid grid-cols-1 gap-6 md:flex md:flex-row md:items-end md:justify-between w-full">
        {/* BUSCA (ESQUERDA) */}
        <div className="w-full md:max-w-xs lg:max-w-md">
          <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">
            Pesquisar
          </label>
          <input
            type="text"
            placeholder="Buscar plantas..."
            value={filters.search}
            onChange={(e) => onFilterChange("search", e.target.value)}
            className={inputStyle}
          />
        </div>

        {/* RESTANTE (DIREITA) */}
        <div className="w-full md:w-auto grid grid-cols-1 gap-4 md:flex md:flex-row md:items-end">
          {/* Categoria */}
          <div className="w-full md:w-44">
            <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">
              Categoria
            </label>
            <select
              value={filters.category}
              onChange={(e) => onFilterChange("category", e.target.value)}
              className={inputStyle}
            >
              <option value="all">Todas</option>
              {categories?.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Preço */}
          <div className="w-full md:w-48">
            <div className="flex justify-between mb-2 px-1">
              <label className="text-xs font-bold text-gray-400 uppercase">
                Preço
              </label>
              <span className="text-xs font-bold text-green-600">
                R$ {filters.priceRange[1]}
              </span>
            </div>
            <div className="h-10 flex items-center">
              <input
                type="range"
                min="0"
                max="200"
                value={filters.priceRange[1]}
                onChange={(e) =>
                  onFilterChange("priceRange", [0, parseInt(e.target.value)])
                }
                className="w-full accent-green-600"
              />
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-center h-10">
            <label className="flex items-center cursor-pointer whitespace-nowrap">
              <input
                type="checkbox"
                checked={filters.inStock}
                onChange={(e) => onFilterChange("inStock", e.target.checked)}
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <span className="ml-2 text-sm font-medium text-gray-600">
                Em estoque
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
