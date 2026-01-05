import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cadastre-se | Vilma Plantas",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
