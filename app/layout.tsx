import type { Metadata } from "next";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { AuthProvider } from "@/features/auth/contexts/AuthProvider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Vilma Plantas",
  description: "Sua loja de plantas online",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <AuthProvider>{children}</AuthProvider>

        {/* Toaster para notificações */}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
