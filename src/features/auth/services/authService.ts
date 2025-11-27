import { api } from '../../../lib/api.ts';
import type { LoginData, RegisterData } from "../types/AuthTypes.ts";

export const authService = {
    login: (data: LoginData) => {
         return api.post('/auth/login', data, { withCredentials: true });
    },

    register: (data: RegisterData) => {
         return api.post('/user/', data, { withCredentials: true });
    },

    logout: () => {
        return api.post('/auth/logout', {}, { withCredentials: true });
    }
}