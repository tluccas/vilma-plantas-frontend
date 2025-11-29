import type { PropsWithChildren } from "react";
import { useAuthContext } from "../contexts/useAuthContext.ts";
import { Navigate } from "react-router-dom";
import Loading from "../../../components/Loading.tsx";

type PropsWithChildrenProps = PropsWithChildren;

export default function ProtectedRoute({ children }: PropsWithChildrenProps) {
    const { isAuthenticated, isInitialized } = useAuthContext();

    if(!isInitialized) {
        return <Loading />;
    }

    if(!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
}