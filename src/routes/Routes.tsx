import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rotas Publicas */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}