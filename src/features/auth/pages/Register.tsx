import React, { useState } from "react";
import InputField from "../components/InputField";
import PasswordInput from "../components/PasswordInput";
import AuthForm from "../components/AuthForm";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const { register, loading } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleRegister(e: React.FormEvent){
        e.preventDefault();

        if (password.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres.");
            return; 
        }

        const registerData = {
            name,
            email,
            password
        }

        try{
            await register(registerData);
            alert("Cadastro realizado com sucesso! Agora você pode fazer login.");
            navigate("/login");
        }catch(error){
            if (error instanceof Error) {
                alert(`Erro ao cadastrar: ${error.message}`);
                console.error("Erro ao cadastrar:", error);
            } else {
                alert("Erro desconhecido ao cadastrar.");
            }
        }       
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <AuthForm 
            title="Cadastrar-se" 
            onSubmit={handleRegister} 
            buttonText="Cadastrar"
            isLoading={loading}>
                <InputField
                    label="Nome"
                    type="text"
                    required={true}
                    placeholder="Seu Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <InputField
                    label="Email"
                    type="email"
                    required={true}
                    placeholder="Seu Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <PasswordInput
                    label="Senha"
                    placeholder="Sua senha (mín 6 caracteres)"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value)}}
                    className={password.length < 6 ? "border-red-500" : "border-gray-300"}
                />

                {password.length > 0 && password.length < 6 && (
                    <p className="text-red-500 text-sm -mt-2">
                        Sua senha deve ter pelo menos 6 caracteres.
                    </p>
    )}
        </AuthForm>

        <p className="mt-5 text-sm text-gray-600">
                Já tem uma conta?
            <a
                href="/login"
                className="ml-1 text-green-600 hover:underline font-medium"
            >
                Entrar
            </a>
            </p>
        </div>
    )
}