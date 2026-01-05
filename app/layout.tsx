import type { Metadata } from "next";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { AuthProvider } from "@/features/auth/contexts/AuthProvider";

export const metadata: Metadata = {
  title: "Vilma Plantas",
  description: "Sua loja de plantas online",
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
      </body>
    </html>
  );
}
