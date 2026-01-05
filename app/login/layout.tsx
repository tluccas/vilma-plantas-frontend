import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Vilma Plantas",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
