"use client";

import { useState, useEffect } from "react";
import { authService } from "../services/authService";
import type { LoginData, RegisterData } from "../types/AuthTypes";
import type { AuthUser } from "../types/AuthUser";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const isAdmin = user?.role?.toLowerCase() === "admin";

  async function login(data: LoginData) {
    setLoading(true);

    try {
      const response = await authService.login(data);
      const userData: AuthUser = response.user;
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
      const userData = response.user;
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
      console.log("Profile response:", response.data); // DEBUG
      setUser(response.data.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Auth check failed:", error); // DEBUG
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
    isAdmin,
    checkAuth,
  };
}
