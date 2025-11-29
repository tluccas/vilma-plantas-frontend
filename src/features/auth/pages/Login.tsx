import { useState } from "react";
import InputField from "../components/InputField";
import PasswordInput from "../components/PasswordInput";
import AuthForm from "../components/AuthForm";
import { useAuthContext } from "../contexts/useAuthContext";
// import { Navigate } from "react-router-dom";

export default function Login() {
    const { login, loading } = useAuthContext();
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
        <div className="min-h-screen flex flex-col items-center justify-center">
            <AuthForm title="Entrar" 
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
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </AuthForm>

            
            <p className="mt-5 text-sm text-gray-600">
                Não tem uma conta?
            <a
                href="/register"
                className="ml-1 text-green-600 hover:underline font-medium"
            >
                Cadastre-se
            </a>
            </p>
        </div>
    );
}
