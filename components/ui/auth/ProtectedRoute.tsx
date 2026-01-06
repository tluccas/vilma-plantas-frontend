"use client";

import type { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthContext } from "@/features/auth/contexts/useAuthContext";
import Loading from "@/components/Loading";

type PropsWithChildrenProps = PropsWithChildren;

export default function ProtectedRoute({ children }: PropsWithChildrenProps) {
  const router = useRouter();
  const { isAuthenticated, isInitialized } = useAuthContext();

  useEffect(() => {
    if (isInitialized && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, isInitialized, router]);

  if (!isInitialized) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return <Loading />;
  }

  return <>{children}</>;
}
