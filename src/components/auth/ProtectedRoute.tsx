import type { PropsWithChildren } from "react";
import { useAuth } from "../../features/auth/hooks/useAuth.ts";
import { Navigate } from "react-router-dom";
import Loading from "../Loading.tsx";

type PropsWithChildrenProps = PropsWithChildren;

function ProtectedRoute({ children }: PropsWithChildrenProps) {
    const { isAuthenticated, isInitialized } = useAuth();

    if(!isInitialized) {
        return <Loading />;
    }

    if(!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
}