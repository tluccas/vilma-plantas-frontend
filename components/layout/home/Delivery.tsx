import DeliveryCard from "./cards/DeliveryCard";

export default function Delivery() {
  return (
    <section className="top-categories border-t border-gray-300 px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-heading text-center">Entregamos <span className="font-bold text-(--color-secondary)">Para</span></h2>
      <div className="categories-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 justify-center">
        <DeliveryCard 
          title="Sumé-PB" 
        />
        <DeliveryCard 
          title="Caraúbas-PB" 
        />
        <DeliveryCard 
          title="Camalaú-PB" 
        />
        <DeliveryCard 
          title="Serra Branca-PB" 
        />
      </div>
    </section>
  );
}
