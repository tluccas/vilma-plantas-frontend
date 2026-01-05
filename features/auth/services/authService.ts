import { api } from "@/lib/api";
import type { LoginData, RegisterData } from "../types/AuthTypes";

export const authService = {
  login: async (data: LoginData) => {
    try{
      const res = await api.post("/auth/login", data, { withCredentials: true });
      return res.data;
    } catch (error: unknown) {
      if (typeof error === "object" && error !== null && "response" in error) {
        const err = error as { response?: { data?: { message?: string } } };
        throw new Error(err.response?.data?.message || "Erro desconhecido.");
      }

      throw new Error("Erro desconhecido.");
    }
  },

  register: async (data: RegisterData) => {
    // return api.post("/user/", data, { withCredentials: true });
    try{
      const res = await api.post("/user/", data, { withCredentials: true });
      return res.data;
    } catch (error: unknown) {
        if (typeof error === "object" && error !== null && "response" in error) {
          const err = error as { response?: { data?: { message?: string } } };
          throw new Error(err.response?.data?.message || "Erro desconhecido.");
        }

        throw new Error("Erro desconhecido.");
      }
    },

  logout: () => {
    return api.post("/auth/logout", {}, { withCredentials: true });
  },

  // Verifica se o usuário está autenticado (via cookie)
  getProfile: () => {
    return api.get("/auth/profile", { withCredentials: true });
  },
};
