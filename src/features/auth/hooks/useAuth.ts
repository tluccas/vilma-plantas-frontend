import { useState } from "react";
import { authService } from "../services/authService";
import type { LoginData, RegisterData } from "../types/AuthTypes";

export function useAuth() {
    const [ loading, setLoading ] = useState(false);

    async function login(data: LoginData){

        setLoading(true);

        try {
            const response = await authService.login(data);
            return response.data.user;
        } finally {
            setLoading(false);
        }
    }

    async function register(data: RegisterData){
        setLoading(true);

        try {
            const response = await authService.register(data);
            return response.data.user;
        } finally {
            setLoading(false);
        }
    }

    async function logout(){
        await authService.logout();
    }


    return { login, register, logout, loading };
}