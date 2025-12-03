import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../features/auth/components/ProtectedRoute.tsx";
import Loading from "../components/Loading.tsx";
import { lazy, Suspense } from "react";
export default function AppRoutes() {

    const Dashboard = lazy(() => import("../pages/Dashboard"));
    const Login = lazy(() => import("../features/auth/pages/Login"));
    const Register = lazy(() => import("../features/auth/pages/Register"));
    const Home = lazy(() => import("../pages/Home"));
    const NotFound = lazy(() => import("../pages/NotFound"));
    return (
        <BrowserRouter>
            <Routes>
                {/* Rotas Publicas */}
                <Route path="/login" element={
                        <Suspense fallback= {<Loading />}>
                            <Login/>
                        </Suspense>
                    }
                />
                <Route path="/register" element={
                        <Suspense fallback= {<Loading />}>
                            <Register/>
                        </Suspense>
                    }
                />
                <Route path="/" element={
                        <Suspense fallback={<Loading/>}>
                            <Home/>
                        </Suspense>
                    } 
                />
                {/* <Route path="/teste" element={<Hero />} /> */}

                {/* Rotas Protegidas */}
                 <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Suspense fallback={<Loading />}>
                                <Dashboard />
                            </Suspense>
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={
                        <Suspense fallback={<Loading/>}>
                            <NotFound/>
                        </Suspense>
                    } 
                />
            </Routes>
        </BrowserRouter>
    );
}