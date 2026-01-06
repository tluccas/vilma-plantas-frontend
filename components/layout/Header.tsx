"use client";

import { useState } from "react";
import { useAuthContext } from "@/features/auth/contexts/useAuthContext";
import Link from "next/link";

export default function Header() {
  const [mobile, setMobile] = useState(false);
  const { user, isAuthenticated, loading } = useAuthContext();

  // Função para fechar menu mobile
  const closeMobileMenu = () => setMobile(false);

  // Lista de itens do menu principal
  const menuItems = [
    { name: "Home", href: "/", icon: "bi-house" },
    { name: "Produtos", href: "/produtos", icon: "bi-shop" },
    { name: "Carrinho", href: "/carrinho", icon: "bi-cart3" },
  ];

  return (
    <header className="sticky bg-(--color-background) lg:relative top-0 z-50 w-full border-b border-gray-300 shadow-md">
      <nav className="flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo - Seção esquerda */}
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center space-x-2 -m-1.5 p-1.5">
            <span className="sr-only">Vilma Plantas</span>
            <img
              className="h-13! w-auto  transition-transform duration-300 hover:scale-105"
              src="/ico-square.png"
              alt="Vilma Plantas Logo"
            />
          </Link>
        </div>

        {/* Menu Desktop - Centro */}
        <div className="hidden  lg:flex lg:gap-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg transition-all duration-300 hover:text-green-700 hover:bg-black/10"
            >
              <i
                className={`bi ${item.icon} text-lg group-hover:scale-110 transition-transform duration-300`}
              ></i>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Botões de Login/User - Seção direita */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3">
          {loading ? (
            <div className="w-8 h-8 border-2 border-gray-300 border-t-green-600 rounded-full animate-spin"></div>
          ) : isAuthenticated ? (
            <Link
              href="/dashboard"
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all"
            >
              <i className="bi bi-person-circle text-xl"></i>
              <span>{user?.name}</span>
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-700 rounded-lg border border-gray-300 transition-all duration-300 hover:bg-gray-50 hover:border-gray-400"
              >
                <i className="bi bi-box-arrow-in-right"></i>
                <span>Entrar</span>
              </Link>
              <Link
                href="/register"
                className="btn-primary flex items-center space-x-1 px-4 py-2 text-sm font-medium text-white rounded-lg transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                <i className="bi bi-person-plus"></i>
                <span>Cadastrar</span>
              </Link>
            </>
          )}
        </div>

        {/* Botão Menu Mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobile(true)}
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-500"
          >
            <span className="sr-only">Abrir menu</span>
            <i className="bi bi-list text-2xl"></i>
          </button>
        </div>
      </nav>

      {/* Menu Mobile - Overlay */}
      {mobile && (
        <>
          {/* Overlay escuro */}
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
            onClick={closeMobileMenu}
          ></div>

          {/* Panel do menu mobile */}
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white px-6 py-6 shadow-xl lg:hidden">
            {/* Header do menu mobile */}
            <div className="flex items-center justify-between mb-6">
              <Link href="/" className="flex items-center space-x-2">
                <img
                  className="h-35! w-auto"
                  src="/logo.png"
                  alt="Vilma Plantas"
                />
              </Link>
              <button
                type="button"
                onClick={closeMobileMenu}
                className="rounded-md p-2.5 text-gray-400 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-500"
              >
                <span className="sr-only">Fechar menu</span>
                <i className="bi bi-x-lg text-xl"></i>
              </button>
            </div>

            {/* Links do menu mobile */}
            <div className="flow-root">
              <div className="space-y-2 py-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="group flex items-center space-x-3 rounded-lg px-3 py-3 text-base font-medium text-gray-700 transition-all duration-300 hover:bg-green-50 hover:text-green-600"
                  >
                    <i
                      className={`bi ${item.icon} text-xl group-hover:scale-110 transition-transform duration-300`}
                    ></i>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Divisor - Botões de Login/User Mobile */}
              <div className="border-t border-gray-200 py-6">
                <div className="space-y-3">
                  {loading ? (
                    <div className="flex justify-center">
                      <div className="w-8 h-8 border-2 border-gray-300 border-t-green-600 rounded-full animate-spin"></div>
                    </div>
                  ) : isAuthenticated ? (
                    <Link
                      href="/dashboard"
                      onClick={closeMobileMenu}
                      className="flex items-center space-x-2 rounded-lg px-3 py-3 text-base font-medium text-gray-700 transition-all duration-300 hover:bg-gray-50"
                    >
                      <i className="bi bi-person-circle text-xl"></i>
                      <span>{user?.name}</span>
                    </Link>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        onClick={closeMobileMenu}
                        className="flex items-center space-x-2 rounded-lg px-3 py-3 text-base font-medium text-gray-700 transition-all duration-300 hover:bg-gray-50"
                      >
                        <i className="bi bi-box-arrow-in-right text-xl"></i>
                        <span>Entrar</span>
                      </Link>
                      <Link
                        href="/register"
                        onClick={closeMobileMenu}
                        className="btn-primary flex items-center justify-center space-x-2 rounded-lg px-3 py-3 text-base font-medium text-white transition-all duration-300 hover:scale-105"
                        style={{ backgroundColor: "var(--color-primary)" }}
                      >
                        <i className="bi bi-person-plus text-xl"></i>
                        <span>Cadastrar</span>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
