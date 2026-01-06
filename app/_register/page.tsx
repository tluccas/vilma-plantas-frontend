"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "@/components/ui/auth/InputField";
import PasswordInput from "@/components/ui/auth/PasswordInput";
import AuthForm from "@/components/ui/auth/AuthForm";
import { useAuthContext } from "@/features/auth/contexts/useAuthContext";

export default function Register() {
  const router = useRouter();
  const { register, loading } = useAuthContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setErrorMessage("");
    if (password.length < 6) {
      return;
    }

    if (password !== confirmPassword) {
      return;
    }

    const registerData = {
      name,
      email,
      password,
    };

    try {
      await register(registerData);
      setErrorMessage(
        "Cadastro realizado com sucesso! Agora você pode fazer login."
      );
      router.push("/login");
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(`Erro ao cadastrar: ${error.message}`);
        // console.error("Erro ao cadastrar:", error);
      } else {
        setErrorMessage("Erro desconhecido ao cadastrar.");
      }
    }
  }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <AuthForm
          title="Cadastrar-se"
          onSubmit={handleRegister}
          buttonText="Cadastrar"
          isLoading={loading}
        >
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
          {/* Mensagem de erro */}
          {errorMessage && (
            <div className="w-full text-center bg-red-100 border border-red-300 text-red-700 px-3 py-2 rounded-md mb-4">
              {errorMessage}
            </div>
          )}

          <PasswordInput
            label="Senha"
            placeholder="Sua Senha (mín 6 caracteres)"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className={
              password.length < 6 && password.length > 0
                ? "border-red-500"
                : "border-gray-300"
            }
          />

          {password.length > 0 && password.length < 6 && (
            <div className="w-full text-center bg-red-100 border border-red-300 text-red-700 px-3 py-2 rounded-md mb-4">
              Sua senha deve ter pelo menos 6 caracteres.
            </div>
          )}

          <PasswordInput
            label="Confirmar Senha"
            placeholder="Confirmar Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={
              confirmPassword !== password && confirmPassword.length > 0
                ? "border-red-500"
                : "border-gray-300"
            }
          />

          {confirmPassword !== password && confirmPassword.length > 0 && (
            <div className="w-full text-center bg-red-100 border border-red-300 text-red-700 px-3 py-2 rounded-md mb-4">
              As senhas não coincidem.
            </div>
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
    </>
  );
}
