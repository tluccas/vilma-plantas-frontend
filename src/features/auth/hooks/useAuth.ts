import { useState, useEffect } from "react";
import { authService } from "../services/authService";
import type { LoginData, RegisterData } from "../types/AuthTypes";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  async function login(data: LoginData) {
    setLoading(true);

    try {
      const response = await authService.login(data);
      const userData = response.data.user;
      setUser(userData);
      setIsAuthenticated(true);
      return userData;
    } finally {
      setLoading(false);
    }
  }

  async function register(data: RegisterData) {
    setLoading(true);

    try {
      const response = await authService.register(data);
      const userData = response.data.user;
      setUser(userData);
      setIsAuthenticated(true);
      return userData;
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    try {
      await authService.logout();
    } finally {
      setUser(null);
      setIsAuthenticated(false);
    }
  }

  // Verifica se o usuário está autenticado ao carregar a página
  async function checkAuth() {
    try {
      const response = await authService.getProfile();
      setUser(response.data.user);
      setIsAuthenticated(true);
    } catch {
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setIsInitialized(true);
    }
  }

  // verificação de autenticação ao montar o componente
  useEffect(() => {
    checkAuth();
  }, []);

  return {
    login,
    register,
    logout,
    loading,
    user,
    isAuthenticated,
    isInitialized,
    checkAuth,
  };
}
