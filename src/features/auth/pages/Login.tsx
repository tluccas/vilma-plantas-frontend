import { useState } from "react";
import InputField from "../components/InputField";
import PasswordInput from "../components/PasswordInput";
import AuthForm from "../components/AuthForm";
import { useAuth } from "../hooks/useAuth";
// import { Navigate } from "react-router-dom";

export default function Login() {
    const { login, loading } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e: React.FormEvent){
        e.preventDefault();
        const LoginData = { 
            email, 
            password 
        };
        
        try {
            await login(LoginData);
            alert("Login realizado com sucesso!");

            // Navigate("/rota-depois-do-login"); Implementar depois
        } catch (error) {
            if (error instanceof Error) {
                alert(`Erro ao fazer login: ${error.message}`);
                console.error("Erro ao fazer login:", error);
            }else {
                alert("Erro desconhecido ao fazer login.");
            }
            
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <AuthForm title="Login" 
            onSubmit={handleLogin} 
            buttonText="Entrar"
            isLoading={loading}>
                <InputField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                
                <PasswordInput
                label="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </AuthForm>
        </div>
    );
}
