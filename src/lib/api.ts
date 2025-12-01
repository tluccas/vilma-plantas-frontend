import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_SITE_API_URL,
  withCredentials: true, // Habilita cookies para todas as requisições
});
