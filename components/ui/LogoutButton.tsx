"use client";

import { useAuthContext } from "@/features/auth/contexts/useAuthContext";

interface Props {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function LogoutButton({
  variant = "danger",
  size = "md",
  className = "",
}: Props) {
  const { logout, loading } = useAuthContext();

  const baseStyles =
    "inline-flex items-center justify-center font-semibold letter-spacing-wide border-none cursor-pointer focus:outline-none transition-all duration-300 ease-out";

  const variants = {
    primary:
      "bg-[#6CC24A] hover:bg-[#92D050] text-[#ebebeb] hover:-translate-y-0.5 shadow-md hover:shadow-lg",
    secondary:
      "bg-[#554b4c] hover:bg-[#635859] text-[#ebebeb] hover:-translate-y-0.5 shadow-md hover:shadow-lg border border-[#635859] hover:border-[#6CC24A]",
    danger:
      "bg-red-600 hover:bg-red-700 text-white hover:-translate-y-0.5 shadow-md hover:shadow-lg focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-full",
    md: "px-7 py-3 text-base rounded-full",
    lg: "px-8 py-4 text-lg rounded-full",
  };

  const disabledStyles = loading
    ? "opacity-50 cursor-not-allowed transform-none hover:transform-none"
    : "";

  async function handleLogout() {
    try {
      await logout();
      // Redirecionamento será feito automaticamente pelas rotas protegidas
    } catch (error) {
      // console.error("Erro ao fazer logout:", error);
    }
  }

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
    >
      {loading ? "Saindo..." : "Desconectar"}
    </button>
  );
}
