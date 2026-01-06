"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "@/components/ui/auth/InputField";
import PasswordInput from "@/components/ui/auth/PasswordInput";
import AuthForm from "@/components/ui/auth/AuthForm";
import { useAuthContext } from "@/features/auth/contexts/useAuthContext";

export default function Login() {
  const router = useRouter();
  const { login, loading } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setErrorMessage("");
    const LoginData = {
      email,
      password,
    };

    try {
      await login(LoginData);
      alert("Login realizado com sucesso!");

      router.push("/");
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
        // console.error("Erro ao fazer login:", error);
      } else {
        setErrorMessage("Erro desconhecido ao fazer login.");
      }
    }
  }
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <AuthForm
          title="Entrar"
          onSubmit={handleLogin}
          buttonText="Entrar"
          isLoading={loading}
        >
          <InputField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* Mensagem de erro */}
          {errorMessage && (
            <div className="w-full text-center bg-red-100 border border-red-300 text-red-700 px-3 py-2 rounded-md mb-4">
              {errorMessage}
            </div>
          )}
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
    </>
  );
}
