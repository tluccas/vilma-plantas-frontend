import { Metadata } from "next";
import ProtectedRoute from "@/components/ui/auth/ProtectedRoute";

export const metadata: Metadata = {
  title: "Dashboard | Vilma Plantas",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
