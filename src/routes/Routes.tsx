import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "../features/auth/components/ProtectedRoute.tsx";
import Home from "../pages/Home.tsx";
export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rotas Publicas */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Home />} />
                {/* <Route path="/teste" element={<Hero />} /> */}

                {/* Rotas Protegidas */}
                <Route path="/dashboard" element={
                    <ProtectedRoute> <Dashboard /> </ProtectedRoute>
                } />
            </Routes>
        </BrowserRouter>
    );
}