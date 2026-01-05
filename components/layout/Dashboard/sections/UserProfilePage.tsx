"use client";

import UserProfile from "@/components/user/UserProfile";
import { useAuthContext } from "@/features/auth/contexts/useAuthContext";

export default function UserProfilePage() {

  const { user, isAuthenticated, loading } = useAuthContext();
  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!isAuthenticated) {
    return <div>Usuário não autenticado.</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Meu Perfil</h1>

      <UserProfile
        name={user?.name}
        email={user?.email}
        phone={user?.phone}
      />
    </div>
  );
}