import DashboardCard from "../DashboardCard";

export default function Overview() {
    // Implementar a lógica para estatiscas reais aqui
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Visão Geral</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard title="Total de Pedidos" value="12" />
        <DashboardCard title="Itens no Carrinho" value="4" />
        <DashboardCard title="Último Login" value="Hoje às 14:20" />
      </div>
    </div>
  );
}