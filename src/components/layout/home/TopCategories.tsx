import CategoriesCards from "./cards/CategoriesCards";

export default function TopCategories() {
  return (
    <section className="top-categories border-t border-gray-300 px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-heading text-center">Top Categorias</h2>
      <div className="categories-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 justify-center">
        <CategoriesCards 
          title="Orquídeas" 
          img="/images/plants/orquidea-card.jpg" 
        />
        <CategoriesCards 
          title="Suculentas" 
          img="/images/plants/suculentas-card.jpg" 
        />
        <CategoriesCards 
          title="Samambaias" 
          img="/images/plants/samambaia-card.jpg" 
        />
        <CategoriesCards 
          title="Rosas" 
          img="/images/plants/rose-card.jpg" 
        />
      </div>
    </section>
  );
}
