import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../features/auth/pages/Login";


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rotas Publicas */}
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}