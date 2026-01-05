import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Vilma Plantas",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
