import SidebarItem from "./SlidebarItem.tsx";
import { useAuthContext } from "../../../features/auth/contexts/useAuthContext.ts";

interface Props {
  section: string;
  setSection: (value: string) => void;
}

export default function Sidebar({ section, setSection }: Props) {
  const { logout, isAdmin } = useAuthContext();

  async function handleLogout() {
    try {
      await logout();
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  }

  return (
    <aside className="w-64 border-r-3 border-(--color-border) p-6 flex flex-col">
      
      <h2 className="text-xl font-semibold text-(--color-primary)mb-6">
        Painel do Usuário
      </h2>

      <nav className="flex flex-col gap-3">
        <SidebarItem label="Visão Geral" icon={<i className="bi bi-house" style={{ fontSize: '18px' }} />} onClick={() => setSection("overview")} active={section === "overview"} />
        <SidebarItem label="Pedidos" icon={<i className="bi bi-bag" style={{ fontSize: '18px' }} />} onClick={() => setSection("orders")} active={section === "orders"} />
        <SidebarItem label="Meu Perfil" icon={<i className="bi bi-person" style={{ fontSize: '18px' }} />} onClick={() => setSection("profile")} active={section === "profile"} />
        <SidebarItem label="Configurações" icon={<i className="bi bi-gear" style={{ fontSize: '18px' }} />} onClick={() => setSection("settings")} active={section === "settings"} />
        {isAdmin && (
          <SidebarItem label="Gerenciar Categorias" icon={<i className="bi bi-tags-fill" style={{ fontSize: '18px' }} />} onClick={() => setSection("categories")} active={section === "categories"} />
        )}
      </nav>

      <div className="mt-auto pt-6">
        <button className="w-full flex items-center gap-3 py-2 px-3 rounded-md text-sm font-medium text-red-400 hover:bg-red-500/10 transition-all"
          onClick={handleLogout}
        >
          <i className="bi bi-box-arrow-right" style={{ fontSize: '18px' }} /> Sair
        </button>
      </div>

    </aside>
  );
}