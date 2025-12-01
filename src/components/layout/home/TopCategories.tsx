import CategoriesCards from "./cards/CategoriesCards";

export default function TopCategories() {
  return (
    <section className="top-categories border-t border-gray-300 px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-heading text-center">Top Categorias</h2>
      <div className="categories-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 justify-center">
        <CategoriesCards 
          title="Orquídeas" 
          img="https://images.unsplash.com/photo-1632011433298-689d8a6135a4?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        />
        <CategoriesCards 
          title="Suculentas" 
          img="https://images.unsplash.com/photo-1551893665-f843f600794e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        />
        <CategoriesCards 
          title="Samambaias" 
          img="https://images.unsplash.com/photo-1760184347560-f7463e36859a?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        />
        <CategoriesCards 
          title="Suculentas" 
          img="https://images.unsplash.com/photo-1551893665-f843f600794e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        />
      </div>
    </section>
  );
}
